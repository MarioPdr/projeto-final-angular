import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroFuncionario } from './components/cadastro-funcionario/cadastro-funcionario.component';
import { ConfiguracoesComponent } from './components/configuracoes/configuracoes.component';
import { ListaFuncionariosComponent } from './components/lista-funcionarios/lista-funcionarios.component';
import { MenuComponent } from './components/menu/menu.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AtualizarFuncionarioComponent } from './components/atualizar-funcionario/atualizar-funcionario.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {
    path: 'menu',
    component: MenuComponent,
    children: [
      { path: 'configuracoes', component: ConfiguracoesComponent },
      { path: 'listafuncionarios', component: ListaFuncionariosComponent, 
        canActivate: [AuthGuard]
       },
      { path: 'profile', component: ProfileComponent },
      { path: 'cadastrofuncionario', component: CadastroFuncionario },
      { path: 'atualizarfuncionario/:id', component: AtualizarFuncionarioComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
