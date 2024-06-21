import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TelaEditQuizComponent } from './tela-edit-quiz.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: TelaEditQuizComponent,
  }
]

@NgModule({
  declarations: [
    TelaEditQuizComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class TelaEditQuizModule { }
