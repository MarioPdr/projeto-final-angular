import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-atualizar-funcionario',
  templateUrl: './atualizar-funcionario.component.html',
  styleUrls: ['./atualizar-funcionario.component.css']
})
export class AtualizarFuncionarioComponent {
   atualizarForm = new FormGroup({
     nomecompleto: new FormControl('', [Validators.required, Validators.minLength(10)]),
     salario: new FormControl('', [Validators.required, Validators.min(1518)]),
     cargo: new FormControl('', Validators.required),
     numerodependentes: new FormControl('', [Validators.required, Validators.min(0), Validators.max(4)]),
     vt: new FormControl('', Validators.required)
   });

   enviar() {
  if (this.atualizarForm.valid) {
    console.log('Cadastro feito com sucesso!', this.atualizarForm.value);
  } else {
    console.log('Formulario inválido.');
  }
}

}
