import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Aluno } from '../models/Aluno';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlunosService {

  constructor(private http: HttpClient) { }

  // Retorna uma lista de alunos
  getAlunos(): Observable<Aluno[]> {
    return this.http.get<Aluno[]>(environment.API_URL + 'alunos');
  }

  // Retorna um aluno específico pelo seu ID
  getAluno(id: number): Observable<Aluno> {
    return this.http.get<Aluno>(environment.API_URL + 'alunos/' + id);
  }

  // Adiciona um novo aluno
  addAluno(aluno: Aluno): Observable<Aluno> {
    return this.http.post<Aluno>(environment.API_URL + 'alunos', aluno);
  }

  // Atualiza os dados de um aluno existente
  updateAluno(aluno: Aluno): Observable<Aluno> {
    return this.http.put<Aluno>(environment.API_URL + 'alunos/' + aluno.id, aluno);
  }

  // Deleta um aluno pelo seu ID
  deleteAluno(id: number): Observable<Aluno> {
    return this.http.delete<Aluno>(environment.API_URL + 'alunos/' + id);
  }
}

