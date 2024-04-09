import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { InscricaoComponent } from './inscricao.component';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: InscricaoComponent
  }
];

@NgModule({
  declarations: [
    InscricaoComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule, // Corrigido para ser importado aqui
    RouterModule.forChild(routes)
  ],
  exports: []
})
export class InscricaoModule { }
