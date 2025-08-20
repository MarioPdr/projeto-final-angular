import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AdminComponent } from './components/admin/admin.component';
import { ConfiguracoesComponent } from './components/configuracoes/configuracoes.component';
import { ListaFuncionariosComponent } from './components/lista-funcionarios/lista-funcionarios.component';
import { CadastroFuncionarioComponent } from './components/cadastro-funcionario/cadastro-funcionario.component';
import { AtualizarFuncionarioComponent } from './components/atualizar-funcionario/atualizar-funcionario.component';
import { AdminGuard } from './guard/admin.guard';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      { path: 'configuracoes', component: ConfiguracoesComponent },
      { path: 'lista-funcionarios', component: ListaFuncionariosComponent },
      { 
        path: 'cadastro-funcionario', 
        component: CadastroFuncionarioComponent,
        canActivate: [AdminGuard] 
      },
      { 
        path: 'atualizar-funcionario/:id', 
        component: AtualizarFuncionarioComponent,
        canActivate: [AdminGuard] 
      },
      { path: '', redirectTo: 'lista-funcionarios', pathMatch: 'full' }
    ],
    canActivate: [AuthGuard]
  },
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }