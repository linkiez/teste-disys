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

  getAlunos(): Observable<Aluno[]> {
    return this.http.get<Aluno[]>(environment.API_URL + '/alunos');
  }

  getAluno(id: number): Observable<Aluno> {
    return this.http.get<Aluno>(environment.API_URL + '/alunos/' + id);
  }

  addAluno(aluno: Aluno): Observable<Aluno> {
    return this.http.post<Aluno>(environment.API_URL + '/alunos', aluno);
  }

  updateAluno(aluno: Aluno): Observable<Aluno> {
    return this.http.put<Aluno>(environment.API_URL + '/alunos/' + aluno.id, aluno);
  }

  deleteAluno(id: number): Observable<Aluno> {
    return this.http.delete<Aluno>(environment.API_URL + '/alunos/' + id);
  }
}
