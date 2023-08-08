import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { AlunosService } from './alunos.service';
import { environment } from 'src/environments/environment';
import { Aluno } from '../models/Aluno';

describe('AlunosService', () => {
  let service: AlunosService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AlunosService]
    });
    service = TestBed.inject(AlunosService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should retrieve a list of alunos', () => {
    const mockAlunos: Aluno[] = [
      { id: 1, nome: 'João' },
      { id: 2, nome: 'Maria' }
    ];

    service.getAlunos().subscribe(alunos => {
      expect(alunos).toEqual(mockAlunos);
    });

    const req = httpMock.expectOne(environment.API_URL + '/alunos');
    expect(req.request.method).toBe('GET');
    req.flush(mockAlunos);
  });

  it('should retrieve a specific aluno by ID', () => {
    const mockAluno: Aluno = { id: 1, nome: 'João' };

    service.getAluno(1).subscribe(aluno => {
      expect(aluno).toEqual(mockAluno);
    });

    const req = httpMock.expectOne(environment.API_URL + '/alunos/1');
    expect(req.request.method).toBe('GET');
    req.flush(mockAluno);
  });

  it('should add a new aluno', () => {
    const mockAluno: Aluno = { id: 1, nome: 'João' };

    service.addAluno(mockAluno).subscribe(aluno => {
      expect(aluno).toEqual(mockAluno);
    });

    const req = httpMock.expectOne(environment.API_URL + '/alunos');
    expect(req.request.method).toBe('POST');
    req.flush(mockAluno);
  });

  it('should update an existing aluno', () => {
    const mockAluno: Aluno = { id: 1, nome: 'João' };

    service.updateAluno(mockAluno).subscribe(aluno => {
      expect(aluno).toEqual(mockAluno);
    });

    const req = httpMock.expectOne(environment.API_URL + '/alunos/1');
    expect(req.request.method).toBe('PUT');
    req.flush(mockAluno);
  });

  it('should delete an aluno by ID', () => {
    const mockAluno: Aluno = { id: 1, nome: 'João' };

    service.deleteAluno(1).subscribe(aluno => {
      expect(aluno).toEqual(mockAluno);
    });

    const req = httpMock.expectOne(environment.API_URL + '/alunos/1');
    expect(req.request.method).toBe('DELETE');
    req.flush(mockAluno);
  });
});
