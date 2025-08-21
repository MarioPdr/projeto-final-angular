import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { FuncionarioService } from 'src/app/services/funcionario.service';

@Component({
  selector: 'app-lista-funcionarios',
  templateUrl: './lista-funcionarios.component.html',
  styleUrls: ['./lista-funcionarios.component.css']
})
export class ListaFuncionariosComponent implements OnInit {
  displayedColumns: string[] = ['id', 'nome', 'cpf', 'cargo', 'salario', 'vt'];
  dataSource: any[] = [];
  usuario: string = '';
  nivel: string = '';
  isAdmin: boolean = false;

  constructor(
    private funcionarioService: FuncionarioService,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit() {
    const usuarioLogado = this.authService.getUsuario();

    if (usuarioLogado) {
      this.usuario = usuarioLogado.nome;
      this.nivel = usuarioLogado.role;
      this.isAdmin = this.authService.isAdmin();

      if (this.isAdmin) {
        this.displayedColumns = [...this.displayedColumns, 'acoes'];
      }
    } else {
      console.log('Usuário não autenticado. Redirecionando para home...');
      this.router.navigate(['/home']);
    }

    this.funcionarioService.getFuncionarios().subscribe({
      next: (data) => {
        this.dataSource = data;
      },
      error: (err) => {
        console.error('Erro ao carregar funcionários:', err);
      }
    });
  }

  editarFuncionario(funcionario: any) {
    this.router.navigate(['/admin/atualizar-funcionario', funcionario.id], {
      state: { 
        nome: funcionario.nome, 
        cargo: funcionario.cargo_atual, 
        salario: funcionario.salario_atual, 
        vt: funcionario.opcaoVT,
        numeroDependentes: funcionario.numeroDependentes
      }
    });
  }

  novoFuncionario() {
    this.router.navigate(['/admin/cadastro-funcionario']);
  }
}
