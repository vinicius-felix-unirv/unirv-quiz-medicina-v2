import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categoria } from 'src/app/models/categoria';
import { DataUtilsIds } from 'src/app/models/dataUtils';
import { CategoriasService } from 'src/app/services/categorias/categorias.service';
import { DataUtilsService } from 'src/app/services/dados/dataUtils.service';
import { EditTemplateComponent } from '../edit-template/edit-template.component';
import { DialogUtilsService } from 'src/app/services/dialog-utils/dialog-utils.service';
import { ComponentType } from '@angular/cdk/portal';
import { CategoriasDialogComponent } from '../../categorias-dialog/categorias-dialog.component';


interface IDataForEdit{
  dataOfRequest: Categoria
}

@Component({
  selector: 'app-edit-categorias',
  templateUrl: './edit-categorias.component.html',
  styleUrls: ['./edit-categorias.component.scss']
})
export class EditCategoriasComponent extends EditTemplateComponent implements OnInit {

  override titulo: string = 'Categorias criadas';
  override dataForEdit: IDataForEdit[] = [];
  override dataUtils: DataUtilsIds = {} as DataUtilsIds;
  override component: ComponentType<CategoriasDialogComponent> = CategoriasDialogComponent;

  constructor(
    public override router: Router,
    public categoriasService: CategoriasService,
    public override dataUtilsService: DataUtilsService<DataUtilsIds>,
    public override dialogUtils: DialogUtilsService<CategoriasDialogComponent>
  ){
    super(router, dataUtilsService, dialogUtils );
  }

  ngOnInit(): void {
    this.dataUtilsService.getData().subscribe(
      data => this.dataUtils = data!
    );
    this.categoriasService.getAllCategoriasByCusro(this.dataUtils.cursoId).subscribe(
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

  goBackCriacao(): void {
    this.router.navigate(['home/tela-criacao-quiz']);
  }

}
