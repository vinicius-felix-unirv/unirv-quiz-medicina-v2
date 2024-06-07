import { RouterModule, Routes } from "@angular/router";
import { TelaPerguntasComponent } from "./tela-perguntas.component";
import { NgModule } from "@angular/core";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { MatIconModule } from "@angular/material/icon";
import { MaterialModule } from "src/app/shared/materialmodule/material.module";

const routes: Routes = [
    {
      path: '',
      component: TelaPerguntasComponent,
    }
]
  
  @NgModule({
        declarations: [
          TelaPerguntasComponent
        ],
        imports: [
            CommonModule,
            RouterModule.forChild(routes),
            ReactiveFormsModule,
            MaterialModule
        ],
        exports: []
    
    })

export class TelaPerguntasComponentModule {} 