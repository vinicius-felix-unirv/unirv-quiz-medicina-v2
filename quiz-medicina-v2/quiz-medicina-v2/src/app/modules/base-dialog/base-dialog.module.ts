import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/shared/materialmodule/material.module';
import { BaseDialogComponent } from './base-dialog.component';
import { QuizDialogComponent } from './quiz-dialog/quiz-dialog.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    BaseDialogComponent,
    QuizDialogComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class BaseDialogModule { }
