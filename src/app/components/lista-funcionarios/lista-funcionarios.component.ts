import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-funcionarios',
  templateUrl: './lista-funcionarios.component.html',
  styleUrls: ['./lista-funcionarios.component.css']
})
export class ListaFuncionariosComponent {
  funcionarios: string[] = ['id', 'nome', 'cpf', 'cargo_atual', 'salario_atual', 'opcaoVT', 'verDetalhes'];
  informacoes = [
    {
      id: 1025,
      nome: 'João da Silva',
      cpf: '123.456.789-00',
      cargo_atual: 'Gerente de Projetos',
      salario_atual: 12000,
      opcaoVT: true
    },
    {
      id: 1026,
      nome: 'Maria Oliveira',
      cpf: '987.654.321-00',
      cargo_atual: 'Analista de Sistemas',
      salario_atual: 6500,
      opcaoVT: false
    }
  ];
  constructor(private router: Router) { }

editarFuncionario(funcionario: any) {
  this.router.navigate(['/menu/atualizarfuncionario', funcionario.id], {
    state: { 
      nome: funcionario.nome, 
      cargo: funcionario.cargo_atual, 
      salario: funcionario.salario_atual, 
      vt: funcionario.opcaoVT 
    }  });
}

}

