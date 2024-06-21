import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Alternativa } from 'src/app/models/alternativa';
import { DataUtilsIds } from 'src/app/models/dataUtils';
import { AlternativasService } from 'src/app/services/alternativas/alternativas.service';
import { DataUtilsService } from 'src/app/services/dados/dataUtils.service';

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

  constructor(
    private router: Router,
    private alternativasService: AlternativasService,
    private dataUtilsService: DataUtilsService<DataUtilsIds>
  ){}

  ngOnInit(): void {
    this.dataUtilsService.getData().subscribe(
      data => this.dataUtils = data!
    );
    this.alternativasService.getAllAlternativasByPerguntaId(this.dataUtils.perguntaId).subscribe(
      Alternativas => {
        this.dataForEdit = Alternativas.map( data => ({
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

}
