import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriasDialogComponent } from './categorias-dialog.component';
import { MaterialModule } from 'src/app/shared/materialmodule/material.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CategoriasDialogComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class CategoriasDialogModule { }
