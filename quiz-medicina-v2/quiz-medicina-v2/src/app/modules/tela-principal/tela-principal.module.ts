import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TelaPrincipalComponent } from './tela-principal.component';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from 'src/app/shared/materialmodule/material.module';
import { ReactiveFormsModule } from '@angular/forms';

import { NewQuizComponent } from './new-quiz/new-quiz.component';
import { CreatQuestionComponent } from './creat-question/creat-question.component';

const routes: Routes = [
  {
    path: '',
    component: TelaPrincipalComponent
  }
]

@NgModule({
  declarations: [
    TelaPrincipalComponent,
    NewQuizComponent,
    CreatQuestionComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    MaterialModule

  ]
})
export class TelaPrincipalModule { }
