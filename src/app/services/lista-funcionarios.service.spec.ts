import { TestBed } from '@angular/core/testing';

import { ListaFuncionariosService } from './lista-funcionarios.service';

describe('ListaFuncionariosService', () => {
  let service: ListaFuncionariosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListaFuncionariosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
