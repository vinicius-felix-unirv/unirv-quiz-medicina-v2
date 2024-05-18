import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "src/app/shared/materialmodule/material.module";


const routes: Routes = [
    {
      path: '',
      component: HomeComponent
    }
  ];

  @NgModule({
    declarations: [
        HomeComponent,
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        ReactiveFormsModule,
        MaterialModule
      
    ],
    providers: []
  })

  export class HomeModule { }
  