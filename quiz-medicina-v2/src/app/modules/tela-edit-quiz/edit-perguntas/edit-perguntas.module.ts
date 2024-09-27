import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditPerguntasComponent } from './edit-perguntas.component';
import { RouterModule, Routes } from '@angular/router';
import { EditTemplateModule } from '../edit-template/edit-template.module';

const routes: Routes = [
  {
    path: '',
    component: EditPerguntasComponent,
  }
]

@NgModule({
  declarations: [
    EditPerguntasComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    EditTemplateModule
  ]
})
export class EditPerguntasModule { }
