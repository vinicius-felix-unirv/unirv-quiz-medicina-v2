import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TelaPrincipalComponent } from './tela-principal.component';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from 'src/app/shared/materialmodule/material.module';
import { ReactiveFormsModule } from '@angular/forms';

import { NewQuizComponent } from './new-quiz/new-quiz.component';
import { CreatQuestionComponent } from './creat-question/creat-question.component';
import { CreatAlternativeComponent } from './creat-alternative/creat-alternative.component';
import { AlternativeComponent } from './alternative/alternative.component';
import { CreateCategoriaComponent } from './create-categoria/create-categoria.component';


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
    CreatQuestionComponent,
    CreatAlternativeComponent,
    AlternativeComponent,
    CreateCategoriaComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    MaterialModule

  ]
})
export class TelaPrincipalModule { }
