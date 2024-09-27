import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RankingComponent } from './ranking.component';
import { RouterModule, Routes } from '@angular/router';
import { CategoriaQuizBaseModule } from '../categoria-quiz-base/categoria-quiz-base.module';

const routes: Routes = [
  {
    path: '',
    component: RankingComponent,
  }
]

@NgModule({
  declarations: [
    RankingComponent
  ],
  imports: [
    CommonModule,
    CategoriaQuizBaseModule,
    RouterModule.forChild(routes),
  ]
})
export class RankingModule { }
