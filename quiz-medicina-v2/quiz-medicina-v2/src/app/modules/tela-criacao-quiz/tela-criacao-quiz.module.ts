import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TelaCriacaoQuizComponent } from './tela-criacao-quiz.component';
import { RouterModule, Routes } from '@angular/router';
import { CategoriaQuizBaseModule } from '../categoria-quiz-base/categoria-quiz-base.module';

const routes: Routes = [
  {
    path: '',
    component: TelaCriacaoQuizComponent,
  }
]

@NgModule({
  declarations: [
    TelaCriacaoQuizComponent
  ],
  imports: [
    CommonModule,
    CategoriaQuizBaseModule,
    RouterModule.forChild(routes),
  ]
})
export class TelaCriacaoQuizModule { }
