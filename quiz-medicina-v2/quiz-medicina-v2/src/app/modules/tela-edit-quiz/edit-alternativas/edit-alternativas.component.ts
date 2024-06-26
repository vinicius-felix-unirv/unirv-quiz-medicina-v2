import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Alternativa } from 'src/app/models/alternativa';
import { DataUtilsIds } from 'src/app/models/dataUtils';
import { AlternativasService } from 'src/app/services/alternativas/alternativas.service';
import { DataUtilsService } from 'src/app/services/dados/dataUtils.service';
import { AlternativasDialogComponent } from '../../alternativas-dialog/alternativas-dialog.component';
import { ComponentType } from '@angular/cdk/portal';

interface IDataForEdit{
  dataOfRequest: Alternativa
}

@Component({
  selector: 'app-edit-alternativas',
  templateUrl: './edit-alternativas.component.html',
  styleUrls: ['./edit-alternativas.component.scss']
})
export class EditAlternativasComponent {

  titulo: string = 'Alternativas criadas';
  dataForEdit: IDataForEdit[] = [];
  dataUtils: DataUtilsIds = {} as DataUtilsIds;
  component: ComponentType<AlternativasDialogComponent> = AlternativasDialogComponent;

  constructor(
    private router: Router,
    private alternativasService: AlternativasService,
    private dataUtilsService: DataUtilsService<DataUtilsIds>
  ){}

  ngOnInit(): void {
    this.dataUtilsService.getData().subscribe(
      data => this.dataUtils = data!
    );
    this.loadAlternativas();
  }

  loadAlternativas(): void {
    this.alternativasService.getAllAlternativasByPerguntaId(this.dataUtils.perguntaId).subscribe(
      Alternativas => {
        this.dataForEdit = Alternativas.map( data => ({
          dataOfRequest: data
        }))
      }
    );
  }

  goBack(): void {
    this.router.navigate(['/home/tela-edit-quiz/edit-perguntas']);
  }

  redirec(): void {}
}
