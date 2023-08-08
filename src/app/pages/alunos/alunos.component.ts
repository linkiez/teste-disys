import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Aluno } from 'src/app/models/Aluno';
import { AlunosService } from 'src/app/services/alunos.service';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css'],
})
export class AlunosComponent implements OnInit {
  alunos: Aluno[] = [
    {
      id: 1,
      nome: "João",
      sobrenome: "Silva",
      idade: 20,
      sexo: "M"
    },
    {
      id: 2,
      nome: "Maria",
      sobrenome: "Santos",
      idade: 22,
      sexo: "F"
    },
    {
      id: 3,
      nome: "Pedro",
      sobrenome: "Almeida",
      idade: 19,
      sexo: "M"
    },
    {
      id: 4,
      nome: "Ana",
      sobrenome: "Lima",
      idade: 21,
      sexo: "F"
    }
  ];;

  constructor(private alunosService: AlunosService, private messageService: MessageService) {}

  ngOnInit(): void {
    this.getAlunos();
  }

  getAlunos(): void {
    this.alunosService
      .getAlunos()
      .subscribe({
        next: (alunos) => (this.alunos = alunos),
        error: (error) => {
          console.error(error)
          this.messageService.add({
            severity: 'error',
            summary: 'Erro',
            detail: 'Erro ao carregar os alunos',
          });
        },
      });
  }

  
}
