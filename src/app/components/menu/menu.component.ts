import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent {
  constructor(private router: Router) { }

  userName = 'Pedro';

  logout() {
    console.log('Usuário deslogado');
    this.router.navigate(['/login']);
  }

  navigateToItem2() {
    console.log('Item 2 selecionado');
  }

  irMenu(){
    this.router.navigate(['/menu']);
  }

  configuracoes() {
    this.router.navigate(['/menu/configuracoes'], { state: { usuario: 'Pedro', nivel: 'admin' } });

  }

  listaFuncionarios() {
    this.router.navigate(['/menu/listafuncionarios']);
  }

  cadastroFuncionario() {
    this.router.navigate(['/menu/cadastrofuncionario']);
  }

  atualizarFuncionario() {
    this.router.navigate(['/menu/atualizarfuncionario']);
  }
  showFiller = false;
}
