import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-funcionarios',
  templateUrl: './lista-funcionarios.component.html',
  styleUrls: ['./lista-funcionarios.component.css']
})
export class ListaFuncionariosComponent {
  funcionarios: string[] = ['id', 'nome', 'cpf', 'cargo_atual', 'salario_atual', 'opcaoVT'];
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

  editarFuncionario(id: number) {
    this.router.navigate(['/atualizar-funcionario'], { queryParams: { id } });
  }
}
