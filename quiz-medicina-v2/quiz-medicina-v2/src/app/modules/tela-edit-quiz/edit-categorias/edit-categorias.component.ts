import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categoria } from 'src/app/models/categoria';
import { DataUtilsIds } from 'src/app/models/dataUtils';
import { CategoriasService } from 'src/app/services/categorias/categorias.service';
import { DataUtilsService } from 'src/app/services/dados/dataUtils.service';

@Component({
  selector: 'app-edit-categorias',
  templateUrl: './edit-categorias.component.html',
  styleUrls: ['./edit-categorias.component.scss']
})
export class EditCategoriasComponent implements OnInit {

  categoriaId!: number;
  categorias: Categoria[] = [];
  dataUtils: DataUtilsIds = {} as DataUtilsIds;

  constructor(
    private router: Router,
    private categoriasService: CategoriasService,
    private dataUtilsService: DataUtilsService<DataUtilsIds>
  ){}

  ngOnInit(): void {
    this.categoriasService.getAllCategoriasInQuiz(this.dataUtils.quizId).subscribe(
      categorias => this.categorias = categorias);
  }

}
