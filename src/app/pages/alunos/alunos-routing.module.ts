import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlunosComponent } from './alunos.component';
import { AlunoComponent } from './aluno/aluno.component';

const routes: Routes = [
  { path: '', component: AlunosComponent },
  { path: ':id', component: AlunoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlunosRoutingModule { }
