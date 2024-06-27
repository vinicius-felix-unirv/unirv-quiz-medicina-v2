import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlternativasDialogComponent } from './alternativas-dialog.component';
import { MaterialModule } from 'src/app/shared/materialmodule/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';

@NgModule({
  declarations: [
    AlternativasDialogComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    MatCheckboxModule
  ],
  exports: [
    AlternativasDialogComponent,
  ]
})
export class AlternativasDialogModule { }
