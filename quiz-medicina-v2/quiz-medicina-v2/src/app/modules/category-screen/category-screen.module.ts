import { RouterModule, Routes } from "@angular/router";
import { CategoryScreenComponent } from "./category-screen.component";
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
      component: CategoryScreenComponent,
    }
]
  
  @NgModule({
        declarations: [
          CategoryScreenComponent
        
        ],
        imports: [
            CommonModule,
            RouterModule.forChild(routes),
            ReactiveFormsModule,
            MaterialModule
        ],
        exports: []
    
    })

export class CategoryScreenComponentModule {} 