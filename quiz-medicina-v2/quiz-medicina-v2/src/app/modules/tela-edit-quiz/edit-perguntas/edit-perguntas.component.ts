import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataUtilsIds } from 'src/app/models/dataUtils';
import { Pergunta } from 'src/app/models/pergunta';
import { DataUtilsService } from 'src/app/services/dados/dataUtils.service';
import { PerguntaService } from 'src/app/services/perguntas/perguntas.service';

interface IDataForEdit{
  dataOfRequest: Pergunta
}

@Component({
  selector: 'app-edit-perguntas',
  templateUrl: './edit-perguntas.component.html',
  styleUrls: ['./edit-perguntas.component.scss']
})
export class EditPerguntasComponent {

  titulo: string = 'Perguntas criadas';
  dataForEdit: IDataForEdit[] = [];
  dataUtils: DataUtilsIds = {} as DataUtilsIds;

  skip: number = 0;
  take: number = 5;

  constructor(
    private router: Router,
    private perguntasService: PerguntaService,
    private dataUtilsService: DataUtilsService<DataUtilsIds>
  ){}

  ngOnInit(): void {
    this.dataUtilsService.getData().subscribe(
      data => this.dataUtils = data!
    );
    this.perguntasService.getAllPerguntasQuizByCategoriaForProf(this.dataUtils.quizId, this.dataUtils.categoriaId, this.skip, this.take).subscribe(
      perguntas => {
        this.dataForEdit = perguntas.map( data => ({
          dataOfRequest: data
        }))
      }
    );
  }

  redirectForPerguntas(id: number): void {
    let data = this.dataUtils;
    data.perguntaId = id;
    this.dataUtilsService.sendData(data);

    this.router.navigate(['home/tela-edit-quiz/edit-alternativas']);
  }

  advancePage(): void{
    this.skip += this.take;
    this.perguntasService.getAllPerguntasQuizByCategoriaForProf(this.dataUtils.quizId, this.dataUtils.categoriaId, this.skip, this.take).subscribe(
      perguntas => {
        this.dataForEdit = perguntas.map( data => ({
          dataOfRequest: data
        }))
      }
    );

  }

  returnPage(): void{
    this.skip -= this.take;
    this.perguntasService.getAllPerguntasQuizByCategoriaForProf(this.dataUtils.quizId, this.dataUtils.categoriaId, this.skip, this.take).subscribe(
      perguntas => {
        this.dataForEdit = perguntas.map( data => ({
          dataOfRequest: data
        }))
      }
    );
  }

  goBack(): void {
    this.router.navigate(['home/tela-edit-quiz/edit-categorias']);
  }

}
