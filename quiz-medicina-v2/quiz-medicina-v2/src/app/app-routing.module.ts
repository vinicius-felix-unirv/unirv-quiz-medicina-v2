import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login',
  },
  {
    path: 'login',
    loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'menu',
    loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'new-password',
    loadChildren: () => import('./modules/new-password/new-password.module').then(m => m.NewPasswordComponentModule)

  },
  {
    path: 'home/category-screen',
    loadChildren: () => import('./modules/category-screen/category-screen.module').then(m => m.CategoryScreenComponentModule)

  },
  {
    path: 'home/quiz-screen',
    loadChildren: () => import('./modules/quiz-screen/quiz-screen.module').then(m => m.QuizScreenModule)

  },
  {
    path: 'home/tela-perguntas',
      loadChildren:  () => import('./modules/tela-perguntas/tela-perguntas.module').then(m => m.TelaPerguntasComponentModule)
  },
  {
    path: 'inscricao',
    loadChildren: () => import('./modules/inscricao/inscricao.module').then(m =>m.InscricaoModule)
  }
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
