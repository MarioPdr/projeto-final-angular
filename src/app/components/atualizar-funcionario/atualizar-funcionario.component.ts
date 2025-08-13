import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-atualizar-funcionario',
  templateUrl: './atualizar-funcionario.component.html',
  styleUrls: ['./atualizar-funcionario.component.css']
})
export class AtualizarFuncionarioComponent implements OnInit {
  atualizarForm = new FormGroup({
    nomecompleto: new FormControl('', [Validators.required, Validators.minLength(10)]),
    salario: new FormControl('', [Validators.required, Validators.min(1518)]),
    cargo: new FormControl('', Validators.required),
    numerodependentes: new FormControl('', [Validators.required, Validators.min(0), Validators.max(4)]),
    vt: new FormControl('', Validators.required)
  });

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        console.log('ID editado:', id);
      }
    });

    const state = history.state;
    if (state) {
      this.atualizarForm.patchValue({
        nomecompleto: state.nome,
        salario: state.salario,
        cargo: state.cargo,
        vt: state.vt
      });
    }
  }

  enviar() {
    if (this.atualizarForm.valid) {
      console.log('Cadastro feito com sucesso!', this.atualizarForm.value);
    } else {
      console.log('Formulário inválido.');
    }
  }
}