import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataUtilsIds } from 'src/app/models/dataUtils';
import { Pergunta } from 'src/app/models/pergunta';
import { DataUtilsService } from 'src/app/services/dados/dataUtils.service';
import { PerguntaService } from 'src/app/services/perguntas/perguntas.service';
import { PerguntasDialogComponent } from '../../perguntas-dialog/perguntas-dialog.component';
import { ComponentType } from '@angular/cdk/portal';

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
  component: ComponentType<PerguntasDialogComponent> = PerguntasDialogComponent;

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
    this.loadPerguntas();
  }

  redirectForPerguntas(id: number): void {
    let data = this.dataUtils;
    data.perguntaId = id;
    this.dataUtilsService.sendData(data);

    this.router.navigate(['home/tela-edit-quiz/edit-alternativas']);
  }

  loadPerguntas(): void {
    this.perguntasService.getAllPerguntasQuizByCategoriaForProf(this.dataUtils.quizId, this.dataUtils.categoriaId, this.skip, this.take).subscribe(
      perguntas => {
        this.dataForEdit = perguntas.map( data => ({
          dataOfRequest: data
        }))
      }
    );
  }

  advancePage(): void{
    this.skip += this.take;
    this.loadPerguntas();
  }

  returnPage(): void{

    if(this.skip > 0){
      this.skip -= this.take;
    }
    this.loadPerguntas();

  }

  goBack(): void {
    this.router.navigate(['home/tela-edit-quiz/edit-categorias']);
  }

}
