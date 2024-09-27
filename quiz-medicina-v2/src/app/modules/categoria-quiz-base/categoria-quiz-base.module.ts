import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriaQuizBaseComponent } from './categoria-quiz-base.component';


@NgModule({
  declarations: [
    CategoriaQuizBaseComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CategoriaQuizBaseComponent
  ]
})
export class CategoriaQuizBaseModule { }
