import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categoria } from 'src/app/models/categoria';
import { DataUtilsIds } from 'src/app/models/dataUtils';
import { CategoriasService } from 'src/app/services/categorias/categorias.service';
import { DataUtilsService } from 'src/app/services/dados/dataUtils.service';

interface IDataForEdit{
  dataOfRequest: Categoria
}

@Component({
  selector: 'app-edit-categorias',
  templateUrl: './edit-categorias.component.html',
  styleUrls: ['./edit-categorias.component.scss']
})
export class EditCategoriasComponent implements OnInit {

  titulo: string = 'Categorias criadas';
  dataForEdit: IDataForEdit[] = [];
  dataUtils: DataUtilsIds = {} as DataUtilsIds;

  constructor(
    private router: Router,
    private categoriasService: CategoriasService,
    private dataUtilsService: DataUtilsService<DataUtilsIds>
  ){}

  ngOnInit(): void {
    this.dataUtilsService.getData().subscribe(
      data => this.dataUtils = data!
    );
    this.categoriasService.getAllCategoriasInQuiz(this.dataUtils.quizId).subscribe(
      categorias => {
        this.dataForEdit = categorias.map( data => ({
          dataOfRequest: data
        }))
      }
    );
  }

  redirectForPerguntas(id: number): void {
    let data = this.dataUtils;
    data.categoriaId = id;
    this.dataUtilsService.sendData(data);

    this.router.navigate(['home/tela-edit-quiz/edit-perguntas']);
  }

  advancePage(): void{

  }

  returnPage(): void{

  }

  goBack(): void {
    this.router.navigate(['home/tela-criacao-quiz']);
  }

}
