import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryScreenComponent } from './category-screen/category-screen.component';
import { QuizComponent } from './quiz/quiz.component';


const routes: Routes = [
  { path: '', redirectTo: 'categories', pathMatch: 'full' },
  { path: 'categories', component: CategoryScreenComponent },
  { path: 'quiz/:categoryId', component: QuizComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }