import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Aluno } from 'src/app/models/Aluno';
import { AlunosService } from 'src/app/services/alunos.service';

@Component({
  selector: 'app-aluno',
  templateUrl: './aluno.component.html',
  styleUrls: ['./aluno.component.css']
})
export class AlunoComponent implements OnInit {

  aluno: Aluno = {}
  sexos: string[] = ['M', 'F']

  constructor(private route: ActivatedRoute, private alunosService: AlunosService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.getAluno();
  }

  createOrUpdate(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id == 0) {
      this.alunosService.addAluno(this.aluno).subscribe({
        next: (aluno) => this.aluno = aluno,
        error: (error) => {
          console.error(error)
          this.messageService.add({
            severity: 'error',
            summary: 'Erro',
            detail: 'Erro ao criar os alunos',
          });
        },
      });
  }else{
    this.alunosService.updateAluno(this.aluno).subscribe({
      next: (aluno) => this.aluno = aluno,
      error: (error) => {
        console.error(error)
        this.messageService.add({
          severity: 'error',
          summary: 'Erro',
          detail: 'Erro ao atualizar os alunos',
        });
      },
    });
  }
}

  getAluno(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id != 0) {
      this.alunosService.getAluno(id).subscribe({
        next: (aluno) => (this.aluno = aluno),
        error: (error) => {
          console.error(error)
          this.messageService.add({
            severity: 'error',
            summary: 'Erro',
            detail: 'Erro ao carregar o aluno',
          });
        },
      });
    }

  }

  delete(){
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.alunosService.deleteAluno(id).subscribe({
      next: () => this.goBack(),
      error: (error) => {
        console.error(error)
        this.messageService.add({
          severity: 'error',
          summary: 'Erro',
          detail: 'Erro ao excluir o aluno',
        });
      },
    });
  }

  goBack(): void {
    window.history.back();
  }

}
