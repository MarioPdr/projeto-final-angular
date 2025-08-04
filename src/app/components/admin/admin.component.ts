import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  usuario: any;
  nivel: "admin" | undefined;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.usuario = history.state.usuario;
    this.nivel = history.state.nivel;
    
    if (this.nivel !== 'admin') {
      console.log('Acesso negado. Somente administradores podem acessar.');
      this.router.navigate(['/home']);
    }
  }

  irParaConfiguracoes() {
    this.router.navigate(['/admin/configuracoes']);
  }

  irParaFuncionarios() {
    this.router.navigate(['/admin/lista']);
  }
}
