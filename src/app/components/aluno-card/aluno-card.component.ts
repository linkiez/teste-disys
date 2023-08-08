import { Component, Input } from '@angular/core';
import { Aluno } from 'src/app/models/Aluno';

@Component({
  selector: 'aluno-card',
  templateUrl: './aluno-card.component.html',
  styleUrls: ['./aluno-card.component.css']
})
export class AlunoCardComponent {

@Input() aluno: Aluno = {id: 0, nome: '', sobrenome: '', idade: 0, sexo: undefined};



}
