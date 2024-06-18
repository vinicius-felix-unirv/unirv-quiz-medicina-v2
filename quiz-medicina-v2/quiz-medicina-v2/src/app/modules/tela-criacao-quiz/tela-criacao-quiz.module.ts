import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TelaCriacaoQuizComponent } from './tela-criacao-quiz.component';
import { RouterModule, Routes } from '@angular/router';

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
    RouterModule.forChild(routes),
  ]
})
export class TelaCriacaoQuizModule { }
