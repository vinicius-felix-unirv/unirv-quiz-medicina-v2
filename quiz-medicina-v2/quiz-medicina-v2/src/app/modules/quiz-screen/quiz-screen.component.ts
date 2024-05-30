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
  progressoAndQuiz!: IDataToView[];
  // quizIdSelected!: number;
  override userId: number = 2;

  cursoId: number = 1;
  skip: number = 0;
  take: number = 10;

  constructor(
    protected  override  router: Router,
    private quizService: QuizService,
    private  progressoService: ProgressoPerguntasService,
    protected override  dataUtilsService: DataUtilsService<DataUtilsIds>
  ){
    super(router, dataUtilsService );
  }

  ngOnInit(): void {
    this.quizService.getAllQuizByCursoId(this.cursoId, this.skip, this.take).subscribe(quizes =>{
      this.progressoAndQuiz = quizes.map( quiz => ({
        categoriaOrQuiz: quiz,
        progresso: this.progressoService.getProgressoByQuizId(this.userId, quiz.id!)
      }));
    });
  }

  redirectForCategoria(id: number): void {
    let data =  new DataUtilsIds;
    data.quizId = id;
    data.usuarioId = this.userId;
    this.dataUtilsService.sendData(data);

    this.router.navigate(['category-screen']);
  }

}
