import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private router: Router) { }

  cadastrarFuncionario() {
    this.router.navigate(['/formulario'], {
      state: { usuario: 'Mario', nivel: 'admin' }
    });
  }

  login() {
  this.router.navigate(['/admin'], {
    state: {
      usuario: 'Mario',
      nivel: 'admin'
    }
  });

  }
}                  