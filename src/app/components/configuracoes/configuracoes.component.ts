import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-configuracoes',
  templateUrl: './configuracoes.component.html',
  styleUrls: ['./configuracoes.component.css']
})
export class ConfiguracoesComponent {
  settings = {
    notifications: true,
    emailUpdates: false,
    darkMode: false
  };

  usuario: any;
  nivel: any;
  isAdmin: boolean = false;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

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

  saveSettings() {
    console.log('Configurações salvas:', this.settings);
  }
}