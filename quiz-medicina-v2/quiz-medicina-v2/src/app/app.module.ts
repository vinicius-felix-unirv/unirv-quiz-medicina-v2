import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { ResetPasswordDialogComponent } from './modules/login/reset-password-dialog/reset-password-dialog.component';
import { AuthInterceptorProvider } from './interceptors/auth.interceptor';
import { HttpClientModule } from '@angular/common/http';
import { AlternativeComponent } from './modules/tela-principal/alternative/alternative.component';

// import { NewPasswordComponent } from './modules/new-password/new-password.component';


@NgModule({
  declarations: [
    AppComponent,
    AlternativeComponent,
    AlternativeComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [
    AuthInterceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
