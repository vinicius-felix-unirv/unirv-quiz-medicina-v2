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
export class CategoriaQuizBaseComponent {

  @Input() Titulo!: string;
  @Input() typeClass!: any;
  @Input() dataToView!: IDataToView[];

  @Input() quizId!: number;
  @Input() userId!: number;
  @Input() redirect!: (id: number) => void;


  constructor(
    protected router: Router,
    protected dataUtilsService: DataUtilsService<DataUtilsIds>
  ) {

  }


}
