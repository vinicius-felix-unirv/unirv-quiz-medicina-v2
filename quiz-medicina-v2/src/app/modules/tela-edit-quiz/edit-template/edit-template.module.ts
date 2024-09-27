import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditTemplateComponent } from './edit-template.component';
import { MaterialModule } from 'src/app/shared/materialmodule/material.module';



@NgModule({
  declarations: [
    EditTemplateComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    EditTemplateComponent
  ]
})
export class EditTemplateModule { }
