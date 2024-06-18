import { Component } from '@angular/core';
import { CategoriaQuizBaseComponent } from '../categoria-quiz-base/categoria-quiz-base.component';
import { Router } from '@angular/router';
import { DataUtilsService } from 'src/app/services/dados/dataUtils.service';
import { DataUtilsIds } from 'src/app/models/dataUtils';

@Component({
  selector: 'app-tela-criacao-quiz',
  templateUrl: './tela-criacao-quiz.component.html',
  styleUrls: ['./tela-criacao-quiz.component.scss']
})
export class TelaCriacaoQuizComponent extends CategoriaQuizBaseComponent{

  constructor(
    protected  override  router: Router,
    // private quizService: QuizService,
    protected override  dataUtilsService: DataUtilsService<DataUtilsIds>
  ){
    super(router, dataUtilsService );
  }
}
