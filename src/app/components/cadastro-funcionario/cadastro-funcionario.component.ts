import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { FuncionarioService } from 'src/app/services/funcionario.service';

@Component({
  selector: 'app-cadastro-funcionario',
  templateUrl: './cadastro-funcionario.html',
  styleUrls: ['./cadastro-funcionario.css']
})
export class CadastroFuncionarioComponent implements OnInit {
  cadastroForm = new FormGroup({
    nomeCompleto: new FormControl('', [Validators.required, Validators.minLength(10)]),
    salario: new FormControl('', [Validators.required, Validators.min(1518)]),
    cargo: new FormControl('', Validators.required),
    numeroDependentes: new FormControl('', [Validators.required, Validators.min(0), Validators.max(4)]),
    vt: new FormControl('', Validators.required)
  });

  usuario: any;
  nivel: any;
  isAdmin: boolean = false;

  constructor(
    public auth: AuthService, 
    private funcionarioService: FuncionarioService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const usuarioLogado = this.auth.getUsuario();
    
    if (usuarioLogado) {
      this.usuario = usuarioLogado.nome;
      this.nivel = usuarioLogado.role;
      this.isAdmin = this.auth.isAdmin();
      
      if (!this.isAdmin) {
        console.log('Acesso negado. Apenas administradores podem cadastrar funcionários.');
        this.router.navigate(['/admin/lista-funcionarios']);
      }
    } else {
      console.log('Usuário não autenticado. Redirecionando para home...');
      this.router.navigate(['/home']);
    }
  }

  enviar() {
    if (this.cadastroForm.valid) {
      const formValue = this.cadastroForm.value;

      const funcionario = {
        nome: formValue.nomeCompleto,
        cpf: '',
        cargo_atual: formValue.cargo,
        salario_atual: Number(formValue.salario),
        opcaoVT: formValue.vt === 'true',
        numeroDependentes: Number(formValue.numeroDependentes)
      };

      this.funcionarioService.adicionarFuncionario(funcionario).subscribe({
        next: () => {
          console.log('Funcionário cadastrado com sucesso!', funcionario);
          this.router.navigate(['/admin/lista-funcionarios']);
        },
        error: (err) => console.error('Erro ao cadastrar funcionário:', err)
      });
    } else {
      console.log('Formulário inválido.');
    }
  }
}
