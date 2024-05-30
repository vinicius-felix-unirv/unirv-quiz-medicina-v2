import { Component, OnInit } from '@angular/core';
import { CategoriaQuizBaseComponent } from '../categoria-quiz-base/categoria-quiz-base.component';
import { QuizService } from 'src/app/services/quiz/quiz.service';
import { ProgressoPerguntasService } from 'src/app/services/progressoPerguntas/progresso-perguntas.service';
import { DataUtilsService } from 'src/app/services/dados/dataUtils.service';
import { Router } from '@angular/router';
import { DataUtilsIds } from 'src/app/models/dataUtils';
import { Quiz } from 'src/app/models/quiz';
import { Observable } from 'rxjs';
import { Progresso } from 'src/app/models/progressoPerguntas';

interface IDataToView{
  categoriaOrQuiz: Quiz,
  progresso: Observable<Progresso>
}

@Component({
  selector: 'app-quiz-screen',
  templateUrl: './quiz-screen.component.html',
  styleUrls: ['./quiz-screen.component.scss']
})
export class QuizScreenComponent extends CategoriaQuizBaseComponent implements OnInit {

  titulo: string = 'tela-Quiz';
  override rota: string = 'category-screen';

  constructor(
    protected  override  router: Router,
    private quizService: QuizService,
    private  progressoService: ProgressoPerguntasService,
    protected override  dataUtilsService: DataUtilsService<DataUtilsIds>
  ){
    super(router, dataUtilsService );
  }

  override ngOnInit(): void {

  }

}
