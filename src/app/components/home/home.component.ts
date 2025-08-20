import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  login(role: string) {
    const usuario = this.authService.autoLogin(role);
    
    this.router.navigate(['/admin'], {
      state: {
        usuario: usuario.nome,
        nivel: usuario.role
      }
    });
  }
}