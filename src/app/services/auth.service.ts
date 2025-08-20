import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthService {
  public usuario: any = null;

  login(nome: string, role: string) {
    this.usuario = { nome, role };
    localStorage.setItem('usuario', JSON.stringify(this.usuario));
    return this.usuario;
  }

  logout() {
    this.usuario = null;
    localStorage.removeItem('usuario');
    this.router.navigate(['/home']);
  }

  estaLogado(): boolean {
    const usuarioSalvo = localStorage.getItem('usuario');
    if (usuarioSalvo) {
      this.usuario = JSON.parse(usuarioSalvo);
    }
    return !!this.usuario;
  }

  temRole(role: string): boolean {
    return this.usuario?.role === role;
  }

  isAdmin(): boolean {
    return this.usuario?.role === 'admin';
  }

  isFuncionario(): boolean {
    return this.usuario?.role === 'funcionario';
  }

  getUsuario() {
    const usuarioSalvo = localStorage.getItem('usuario');
    if (usuarioSalvo) {
      this.usuario = JSON.parse(usuarioSalvo);
    }
    return this.usuario;
  }

  autoLogin(role: string) {
    const nome = role === 'admin' ? 'Administrador' : 'Funcionário';
    return this.login(nome, role);
  }

  constructor(private router: Router) {
    const usuarioSalvo = localStorage.getItem('usuario');
    if (usuarioSalvo) {
      this.usuario = JSON.parse(usuarioSalvo);
    }
  }
}