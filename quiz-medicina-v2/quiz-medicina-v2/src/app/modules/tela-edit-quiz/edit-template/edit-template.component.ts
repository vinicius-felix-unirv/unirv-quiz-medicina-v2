import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { DataUtilsIds } from 'src/app/models/dataUtils';
import { AlternativasService } from 'src/app/services/alternativas/alternativas.service';
import { CategoriasService } from 'src/app/services/categorias/categorias.service';
import { DataUtilsService } from 'src/app/services/dados/dataUtils.service';
import { PerguntaService } from 'src/app/services/perguntas/perguntas.service';

@Component({
  selector: 'app-edit-template',
  templateUrl: './edit-template.component.html',
  styleUrls: ['./edit-template.component.scss']
})
export class EditTemplateComponent {

  @Input() dataForEdit: any;
  @Input() titulo!: string;
  @Input() redirect!: (id: number) => void;
  @Input() advancePage!: () => void;
  @Input() returnPage!: () => void;
  @Input() goBack!: () => void;
  @Input() dataUtils!: DataUtilsIds;

  skip: number = 0;
  take: number = 3;

  constructor(
    protected router: Router,
    protected dataUtilsService: DataUtilsService<DataUtilsIds>,
    private categoriasService: CategoriasService,
    private perguntasService: PerguntaService,
    private alternativasService: AlternativasService,
  ) { }

}
