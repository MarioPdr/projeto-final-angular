import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class FuncionarioService {
  private funcionarios = [
    {
      "id": 1025,
      "nome": "João da Silva",
      "cpf": "123.456.789-00",
      "data_nascimento": "1985-04-12",
      "email": "joao.silva@email.com",
      "telefone": "(11) 91234-5678",
      "endereco": {
        "logradouro": "Rua das Flores",
        "numero": 123,
        "bairro": "Centro",
        "cidade": "São Paulo",
        "estado": "SP",
        "cep": "01001-000"
      },
      "data_admissao": "2015-02-01",
      "cargo_atual": "Gerente de Projetos",
      "salario_atual": 12000.00,
      "opcaoVT": true,
      "numeroDependentes": 2,
      "historico": [
        {
          "cargo": "Analista Júnior",
          "salario": 3500.00,
          "data_inicio": "2015-02-01",
          "data_fim": "2017-06-30"
        },
        {
          "cargo": "Analista Pleno",
          "salario": 5000.00,
          "data_inicio": "2017-07-01",
          "data_fim": "2019-12-31"
        },
      ]
    },
    {
      "id": 1026,
      "nome": "Maria Oliveira",
      "cpf": "987.654.321-00",
      "data_nascimento": "1990-09-25",
      "email": "maria.oliveira@email.com",
      "telefone": "(21) 99876-5432",
      "endereco": {
        "logradouro": "Avenida Central",
        "numero": 456,
        "bairro": "Jardins",
        "cidade": "Rio de Janeiro",
        "estado": "RJ",
        "cep": "20000-000"
      },
      "data_admissao": "2020-03-15",
      "cargo_atual": "Analista de Sistemas",
      "salario_atual": 6500.00,
      "opcaoVT": false,
      "numeroDependentes": 1,
      "historico_cargos": [
        {
          "cargo": "Assistente de TI",
          "salario": 4000.00,
          "data_inicio": "2020-03-15",
          "data_fim": "2022-02-28"
        },
        {
          "cargo": "Analista de Sistemas",
          "salario": 6500.00,
          "data_inicio": "2022-03-01",
          "data_fim": null
        }
      ]
    }
  ];

  getFuncionarios() {
    return this.funcionarios;
  }

  getFuncionarioPorId(id: number) {
    return this.funcionarios.find(f => f.id === id);
  }

  adicionarFuncionario(funcionario: any) {
    funcionario.id = this.gerarNovoId();
    this.funcionarios.push(funcionario);
  }

  atualizarFuncionario(id: number, funcionario: any) {
    const index = this.funcionarios.findIndex(f => f.id === id);
    if (index !== -1) {
      this.funcionarios[index] = { ...funcionario, id };
    }
  }

  private gerarNovoId(): number {
    return Math.max(...this.funcionarios.map(f => f.id)) + 1;
  }
}