import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro-funcionario',
  standalone: false,
  templateUrl: './cadastro-funcionario.html',
  styleUrls: ['./cadastro-funcionario.css']
})
export class CadastroFuncionario {
  cadastroForm = new FormGroup({
    nomecompleto: new FormControl('', [Validators.required, Validators.minLength(10)]),
    salario: new FormControl('', [Validators.required, Validators.min(1518)]),
    cargo: new FormControl('', Validators.required),
    numerodependentes: new FormControl('', [Validators.required, Validators.min(0), Validators.max(4)]),
    vt: new FormControl('', Validators.required)
  });

  enviar() {
    if (this.cadastroForm.valid) {
      console.log('Cadastro feito com sucesso!', this.cadastroForm.value);
    } else {
      console.log('Formulario inválido.');
    }
  }
}
