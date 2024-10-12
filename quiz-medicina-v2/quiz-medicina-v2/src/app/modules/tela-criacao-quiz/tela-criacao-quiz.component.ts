import { Component, OnInit } from '@angular/core';
import { CategoriaQuizBaseComponent } from '../categoria-quiz-base/categoria-quiz-base.component';
import { Router } from '@angular/router';
import { DataUtilsService } from 'src/app/services/dados/dataUtils.service';
import { DataUtilsIds } from 'src/app/models/dataUtils';
import { QuizService } from 'src/app/services/quiz/quiz.service';
import { Quiz } from 'src/app/models/quiz';
import { MatDialog } from '@angular/material/dialog';
import { QuizDialogComponent } from '../quiz-dialog/quiz-dialog.component';
import { DialogUtilsService } from 'src/app/services/dialog-utils/dialog-utils.service';


interface IDataToView{
  categoriaOrQuiz: Quiz
}

@Component({
  selector: 'app-tela-criacao-quiz',
  templateUrl: './tela-criacao-quiz.component.html',
  styleUrls: ['./tela-criacao-quiz.component.scss']
})
export class TelaCriacaoQuizComponent extends CategoriaQuizBaseComponent implements OnInit {


  titulo: string = 'Criar Novo Quiz';
  quiz!: IDataToView[];
  override dataUtils: DataUtilsIds = {} as DataUtilsIds;

  skip: number = 0;
  take: number = 10;

  constructor(
    protected  override  router: Router,
    private quizService: QuizService,
    protected override  dataUtilsService: DataUtilsService<DataUtilsIds>,
    public dialogUtils: DialogUtilsService<QuizDialogComponent>
  ){
    super(router, dataUtilsService );
  }

  ngOnInit(): void {
    this.dataUtilsService.getData().subscribe(data => {
      this.dataUtils = data!;
    });
    this.loadQuiz();
  }

  loadQuiz(): void {
    this.quizService.getAllQuizByUsuarioAndCursoId(this.skip, this.take, this.dataUtils.cursoId, this.dataUtils.usuarioId).subscribe(quizes => {
      this.quiz = quizes.map( quiz => ({
        categoriaOrQuiz: quiz
      }));
    });
  }

  redirectForQuiz(id: number): void {
    let data = this.dataUtils;
    data!.quizId = id;
    this.dataUtilsService.sendData(data!);

    this.router.navigate(['home/tela-edit-quiz/edit-categorias']);
  }

  openDialog() {
    const dialogRef = this.dialogUtils.openDialog(QuizDialogComponent);

    dialogRef.componentInstance.dialogClosed.subscribe(() => {
      this.loadQuiz();
    });
  }
}
