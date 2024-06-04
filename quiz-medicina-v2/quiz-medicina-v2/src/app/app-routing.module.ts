import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';

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
    path: 'new-password',
    loadChildren: () => import('./modules/new-password/new-password.module').then(m => m.NewPasswordComponentModule)

  },
  {
    path: 'inscricao',
    loadChildren: () => import('./modules/inscricao/inscricao.module').then(m =>m.InscricaoModule)
  },
  {
    path: 'home',
    component: HomeComponent,

    children: [
      {
        path: 'category-screen',
        loadChildren: () => import('./modules/category-screen/category-screen.module').then(m => m.CategoryScreenComponentModule)

      },
      {
        path: 'quiz-screen',
        loadChildren: () => import('./modules/quiz-screen/quiz-screen.module').then(m => m.QuizScreenModule)

      },
      {
        path: 'tela-perguntas',
          loadChildren:  () => import('./modules/tela-perguntas/tela-perguntas.module').then(m => m.TelaPerguntasComponentModule)
      },
      // {
      //   path: 'ranking',
      //   loadChildren: () => import('./modules/ranking/ranking.module').then(m =>m.RankingModule)
      // }
    ]
  }
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
