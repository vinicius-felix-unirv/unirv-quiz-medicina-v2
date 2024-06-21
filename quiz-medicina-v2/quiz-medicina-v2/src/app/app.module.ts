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
    TelaEditQuizModule

  ],
  providers: [
    AuthInterceptorProvider

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
