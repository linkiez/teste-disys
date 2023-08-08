import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlunosRoutingModule } from './alunos-routing.module';
import { AlunosComponent } from './alunos.component';
import { AlunoComponent } from './aluno/aluno.component';
import { CardModule } from 'primeng/card';
import { AlunoCardComponent } from 'src/app/components/aluno-card/aluno-card.component';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { DropdownModule } from 'primeng/dropdown';
@NgModule({
  declarations: [
    AlunosComponent,
    AlunoComponent,
    AlunoCardComponent
  ],
  imports: [
    CommonModule,
    AlunosRoutingModule,
    CardModule,
    AvatarModule,
    AvatarGroupModule,
    ButtonModule,
    FormsModule,
    InputTextModule,
    InputNumberModule,
    DropdownModule
  ]
})
export class AlunosModule { }
