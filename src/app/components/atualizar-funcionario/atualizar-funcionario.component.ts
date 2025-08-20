import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { FuncionarioService } from 'src/app/services/funcionario.service';

@Component({
  selector: 'app-atualizar-funcionario',
  templateUrl: './atualizar-funcionario.component.html',
  styleUrls: ['./atualizar-funcionario.component.css']
})
export class AtualizarFuncionarioComponent implements OnInit {
  atualizarForm = new FormGroup({
    nomeCompleto: new FormControl('', [Validators.required, Validators.minLength(10)]),
    salario: new FormControl('', [Validators.required, Validators.min(1518)]),
    cargo: new FormControl('', Validators.required),
    numeroDependentes: new FormControl('', [Validators.required, Validators.min(0), Validators.max(4)]),
    vt: new FormControl('', Validators.required)
  });

  funcionarioId: number | null = null;
  usuario: any;
  nivel: any;
  isAdmin: boolean = false;

  constructor(
    private route: ActivatedRoute, 
    public auth: AuthService,
    private funcionarioService: FuncionarioService,
    private router: Router
  ) { }

  ngOnInit() {
    const usuarioLogado = this.auth.getUsuario();
    
    if (usuarioLogado) {
      this.usuario = usuarioLogado.nome;
      this.nivel = usuarioLogado.role;
      this.isAdmin = this.auth.isAdmin();
      
      if (!this.isAdmin) {
        console.log('Acesso negado. Apenas administradores podem editar funcionários.');
        this.router.navigate(['/admin/lista-funcionarios']);
        return;
      }
    } else {
      console.log('Usuário não autenticado. Redirecionando para home...');
      this.router.navigate(['/home']);
      return;
    }

    this.route.params.subscribe(params => {
      this.funcionarioId = +params['id'];
      if (this.funcionarioId) {
        const funcionario = this.funcionarioService.getFuncionarioPorId(this.funcionarioId);
        if (funcionario) {
          this.atualizarForm.patchValue({
            nomeCompleto: funcionario.nome,
            salario: funcionario.salario_atual.toString(),
            cargo: funcionario.cargo_atual,
            numeroDependentes: funcionario.numeroDependentes.toString(),
            vt: funcionario.opcaoVT.toString()
          });
        }
      }
    });

    const state = history.state;
    if (state) {
      this.atualizarForm.patchValue({
        nomeCompleto: state.nome,
        salario: state.salario,
        cargo: state.cargo,
        vt: state.vt?.toString(),
        numeroDependentes: state.numeroDependentes?.toString()
      });
    }
  }

  enviar() {
    if (this.atualizarForm.valid && this.funcionarioId) {
      const funcionario = this.atualizarForm.value;
      this.funcionarioService.atualizarFuncionario(this.funcionarioId, funcionario);
      console.log('Funcionário atualizado com sucesso!', funcionario);
      this.router.navigate(['/admin/lista-funcionarios']);
    } else {
      console.log('Formulário inválido.');
    }
  }
}