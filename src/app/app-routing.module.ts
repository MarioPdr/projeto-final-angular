import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroFuncionario } from './components/cadastro-funcionario/cadastro-funcionario.component';
import { HomeComponent } from './components/home/home.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { AdminComponent } from './components/admin/admin.component';
import { ConfiguracoesComponent } from './components/configuracoes/configuracoes.component';
import { ListaFuncionariosComponent } from './components/lista-funcionarios/lista-funcionarios.component';
import { MenuComponent } from './components/menu/menu.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AtualizarFuncionarioComponent } from './components/atualizar-funcionario/atualizar-funcionario.component';

const routes: Routes = [
  { path: 'cadastrofuncionario', component: CadastroFuncionario },
  { path: 'atualizarfuncionario', component: AtualizarFuncionarioComponent },
  {
    path: 'menu',
    component: MenuComponent,
    children: [
      { path: 'configuracoes', component: ConfiguracoesComponent },
      { path: 'listafuncionarios', component: ListaFuncionariosComponent },
      { path: 'profile', component: ProfileComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
