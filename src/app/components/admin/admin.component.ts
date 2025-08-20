import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  usuario: any;
  nivel: any;
  isAdmin: boolean = false;

  constructor(
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    const usuarioLogado = this.authService.getUsuario();
    
    if (usuarioLogado) {
      this.usuario = usuarioLogado.nome;
      this.nivel = usuarioLogado.role;
      this.isAdmin = this.authService.isAdmin();
    } else {
      console.log('Usuário não autenticado. Redirecionando para home...');
      this.router.navigate(['/home']);
    }
  }

  irParaConfiguracoes() {
    this.router.navigate(['/admin/configuracoes']);
  }

  irParaFuncionarios() {
    this.router.navigate(['/admin/lista-funcionarios']);
  }

  irParaCadastro() {
    this.router.navigate(['/admin/cadastro-funcionario']);
  }

  logout() {
    this.authService.logout();
  }
}