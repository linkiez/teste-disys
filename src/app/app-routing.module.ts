import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'alunos', loadChildren: () => import('./pages/alunos/alunos.module').then(m => m.AlunosModule) },
  { path: '', redirectTo: 'alunos', pathMatch: 'full' },
  { path: '**', redirectTo: 'alunos', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
