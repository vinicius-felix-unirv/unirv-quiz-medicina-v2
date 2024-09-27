import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerguntasDialogComponent } from './perguntas-dialog.component';
import { MaterialModule } from 'src/app/shared/materialmodule/material.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    PerguntasDialogComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  exports: [
    PerguntasDialogComponent
  ]
})
export class PerguntasDialogModule { }
