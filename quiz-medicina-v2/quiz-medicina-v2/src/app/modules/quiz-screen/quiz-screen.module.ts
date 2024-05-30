import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizScreenComponent } from './quiz-screen.component';
import { CategoriaQuizBaseModule } from '../categoria-quiz-base/categoria-quiz-base.module';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: QuizScreenComponent,
  }
]

@NgModule({
  declarations: [
    QuizScreenComponent
  ],
  imports: [
    CommonModule,
    CategoriaQuizBaseModule,
    RouterModule.forChild(routes),
  ]
})
export class QuizScreenModule { }
