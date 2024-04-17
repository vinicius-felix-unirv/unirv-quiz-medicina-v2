import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';//Dialog...
import { ResetPasswordDialogComponent } from './reset-password-dialog/reset-password-dialog.component';
import { MaterialModule } from 'src/app/shared/materialmodule/material.module';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  }
]

@NgModule({
  declarations: [
    LoginComponent,
    ResetPasswordDialogComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    MaterialModule
  ],
  exports: []

})
export class LoginModule { }
