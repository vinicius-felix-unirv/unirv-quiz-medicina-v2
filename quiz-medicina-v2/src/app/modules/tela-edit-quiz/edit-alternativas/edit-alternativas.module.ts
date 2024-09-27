import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditAlternativasComponent } from './edit-alternativas.component';
import { RouterModule, Routes } from '@angular/router';
import { EditTemplateModule } from '../edit-template/edit-template.module';

const routes: Routes = [
  {
    path: '',
    component: EditAlternativasComponent,
  }
]

@NgModule({
  declarations: [
    EditAlternativasComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    EditTemplateModule
  ]
})
export class EditAlternativasModule { }
