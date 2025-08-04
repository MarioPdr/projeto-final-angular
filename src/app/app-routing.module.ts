import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroFuncionario } from './components/cadastro-funcionario/cadastro-funcionario.component';
import { HomeComponent } from './components/home/home.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { AdminComponent } from './components/admin/admin.component';
import { ConfiguracoesComponent } from './components/configuracoes/configuracoes.component';
import { ListaFuncionariosComponent } from './lista-funcionarios/lista-funcionarios.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {
    path: 'formulario',
    component: CadastroFuncionario,
    children: [
      { path: 'usuarios', component: UsuariosComponent }
    ]
  },
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      { path: 'configuracoes', component: ConfiguracoesComponent },
      { path: 'lista', component: ListaFuncionariosComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
