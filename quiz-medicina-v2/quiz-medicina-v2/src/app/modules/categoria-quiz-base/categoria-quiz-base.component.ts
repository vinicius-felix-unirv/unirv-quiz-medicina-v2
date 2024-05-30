import { Component, Input, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DataUtilsIds } from 'src/app/models/dataUtils';
import { Progresso } from 'src/app/models/progressoPerguntas';
import { DataUtilsService } from 'src/app/services/dados/dataUtils.service';

interface IDataToView{
  categoriaOrQuiz: any,
  progresso: Observable<Progresso>
}

@Component({
  selector: 'app-categoria-quiz-base',
  templateUrl: './categoria-quiz-base.component.html',
  styleUrls: ['./categoria-quiz-base.component.scss']
})
export class CategoriaQuizBaseComponent implements OnInit {

  @Input() Titulo!: string;
  @Input() typeClass!: any;
  @Input() progressoAndCategorias!: IDataToView[];

  @Input() quizId!: number;
  @Input() usuarioId!: number;
  @Input() rota!: string;
  constructor(
    protected router: Router,
    protected dataUtilsService: DataUtilsService<DataUtilsIds>
  ) {

  }
  ngOnInit(): void {
    console.log(this.dataUtilsService.getData());
  }

  redirect(categoriaId: number): void {
    let data: any = {};
    data.categoriaId = categoriaId;
    data.quizId = this.quizId;
    data.usuarioId = this.usuarioId;
    this.dataUtilsService.sendData(data);

    this.router.navigate([this.rota]);
  }

}
