import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditCategoriasComponent } from './edit-categorias.component';
import { RouterModule, Routes } from '@angular/router';
import { EditTemplateModule } from '../edit-template/edit-template.module';

const routes: Routes = [
  {
    path: '',
    component: EditCategoriasComponent,
  }
]

@NgModule({
  declarations: [
    EditCategoriasComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    EditTemplateModule
  ]
})
export class EditCategoriasModule { }
