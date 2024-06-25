import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AuthInterceptorProvider } from './interceptors/auth.interceptor';

import { HttpClientModule } from '@angular/common/http';
import { QuizScreenModule } from './modules/quiz-screen/quiz-screen.module';
import { CategoryScreenComponentModule } from './modules/category-screen/category-screen.module';
import { HomeModule } from './modules/home/home.module';
import { TelaEditQuizModule } from './modules/tela-edit-quiz/tela-edit-quiz.module';
import { QuizDialogModule } from './modules/quiz-dialog/quiz-dialog.module';
import { CategoriasDialogModule } from './modules/categorias-dialog/categorias-dialog.module';
import { PerguntasDialogModule } from './modules/perguntas-dialog/perguntas-dialog.module';
import { MaterialModule } from './shared/materialmodule/material.module';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    QuizScreenModule,
    CategoryScreenComponentModule,
    HomeModule,
    TelaEditQuizModule,
    QuizDialogModule,
    CategoriasDialogModule,
    PerguntasDialogModule,
    MaterialModule
  ],
  providers: [
    AuthInterceptorProvider

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
