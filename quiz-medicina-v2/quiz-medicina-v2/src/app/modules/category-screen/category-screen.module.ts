import { RouterModule, Routes } from "@angular/router";
import { CategoryScreenComponent } from "./category-screen.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "src/app/shared/materialmodule/material.module";
import { CategoriaQuizBaseModule } from "../categoria-quiz-base/categoria-quiz-base.module";


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
            MaterialModule,
            CategoriaQuizBaseModule
        ],
        exports: []

    })

export class CategoryScreenComponentModule {}
