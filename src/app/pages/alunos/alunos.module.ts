import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlunosRoutingModule } from './alunos-routing.module';
import { AlunosComponent } from './alunos.component';
import { AlunoComponent } from './aluno/aluno.component';


@NgModule({
  declarations: [
    AlunosComponent,
    AlunoComponent
  ],
  imports: [
    CommonModule,
    AlunosRoutingModule
  ]
})
export class AlunosModule { }
