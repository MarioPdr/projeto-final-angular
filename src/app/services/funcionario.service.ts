import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class FuncionarioService {
  private jsonUrl = 'assets/funcionarios.json'; 
  private funcionarios: any[] = [];

  constructor(private http: HttpClient) {
    this.carregarFuncionarios();
  }

  private carregarFuncionarios() {
    this.http.get<any[]>(this.jsonUrl).subscribe(data => {
      this.funcionarios = data;
    });
  }

  getFuncionarios(): Observable<any[]> {
    return of(this.funcionarios);
  }

  getFuncionarioPorId(id: number): Observable<any> {
    return of(this.funcionarios.find(f => f.id === id));
  }

  adicionarFuncionario(funcionario: any): Observable<any> {
    funcionario.id = this.gerarNovoId();
    this.funcionarios.push(funcionario);
    return of(funcionario);
  }

  atualizarFuncionario(id: number, funcionario: any): Observable<any> {
    const index = this.funcionarios.findIndex(f => f.id === id);
    if (index !== -1) {
      this.funcionarios[index] = { id, ...funcionario };
      return of(this.funcionarios[index]);
    }
    return of(null);
  }

  private gerarNovoId(): number {
    return this.funcionarios.length > 0
      ? Math.max(...this.funcionarios.map(f => f.id)) + 1
      : 1;
  }
}
