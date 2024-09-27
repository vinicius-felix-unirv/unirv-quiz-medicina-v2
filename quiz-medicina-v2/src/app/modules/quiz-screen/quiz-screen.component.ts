import { Component, OnInit } from '@angular/core';
import { CategoriaQuizBaseComponent } from '../categoria-quiz-base/categoria-quiz-base.component';
import { QuizService } from 'src/app/services/quiz/quiz.service';
import { ProgressoPerguntasService } from 'src/app/services/progressoPerguntas/progresso-perguntas.service';
import { DataUtilsService } from 'src/app/services/dados/dataUtils.service';
import { Data, Router } from '@angular/router';
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

  titulo: string = 'Tela de Quiz';
  progressoAndQuiz!: IDataToView[];

  userId!: number;
  cursoId!: number;
  override dataUtils: DataUtilsIds = {} as DataUtilsIds;

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

    this.dataUtilsService.getData().subscribe(data => {
      this.dataUtils = data! || {} as DataUtilsIds;
      this.userId = data?.usuarioId!;
      this.cursoId = data?.cursoId!;
    });

    this.quizService.getAllQuizByCursoId(this.cursoId, this.skip, this.take).subscribe(quizes =>{
      this.progressoAndQuiz = quizes.map( quiz => ({
        categoriaOrQuiz: quiz,
        progresso: this.progressoService.getProgressoByQuizId(this.userId, quiz.id!)
      }));
    });
  }

  redirectForCategoria(id: number): void {
    let data = this.dataUtils;
    data!.quizId = id;
    this.dataUtilsService.sendData(data!);

    this.router.navigate(['home/category-screen']);
  }

}
