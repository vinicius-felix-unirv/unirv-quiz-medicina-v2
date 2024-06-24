import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizDialogComponent } from './quiz-dialog.component';
import { MaterialModule } from 'src/app/shared/materialmodule/material.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    QuizDialogComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class QuizDialogModule { }
