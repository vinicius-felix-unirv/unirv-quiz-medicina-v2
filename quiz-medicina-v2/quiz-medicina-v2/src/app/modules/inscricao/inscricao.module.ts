import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { InscricaoComponent } from './inscricao.component';
import { ReactiveFormsModule } from '@angular/forms';
import { IbgeService } from './ibge.service';
import { HttpClientModule } from '@angular/common/http';

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
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    HttpClientModule
  ],
  providers: [IbgeService]
})
export class InscricaoModule { }
