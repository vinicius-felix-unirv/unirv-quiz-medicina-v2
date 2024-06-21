import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditPerguntasComponent } from './edit-perguntas.component';
import { RouterModule, Routes } from '@angular/router';

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
  ]
})
export class EditPerguntasModule { }
