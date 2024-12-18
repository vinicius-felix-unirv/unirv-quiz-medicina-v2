import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Categoria } from 'src/app/models/categoria';
import { DataUtilsIds } from 'src/app/models/dataUtils';
import { Pergunta } from 'src/app/models/pergunta';
import { Quiz } from 'src/app/models/quiz';
import { CategoriasService } from 'src/app/services/categorias/categorias.service';
import { DataUtilsService } from 'src/app/services/dados/dataUtils.service';
import { PerguntaService } from 'src/app/services/perguntas/perguntas.service';
import { QuizService } from 'src/app/services/quiz/quiz.service';

@Component({
  selector: 'app-tela-edit-quiz',
  templateUrl: './tela-edit-quiz.component.html',
  styleUrls: ['./tela-edit-quiz.component.scss']
})
export class TelaEditQuizComponent implements OnInit {

  dataUtils!: DataUtilsIds;
  quiz$!: Observable<Quiz>;

  constructor(
    private quizService: QuizService,
    private dataUtilsService: DataUtilsService<DataUtilsIds>,
  ){}

  ngOnInit(): void {
    this.dataUtilsService.getData().subscribe(data => {
      this.dataUtils = data!;
    });
    this.quiz$ = this.quizService.findById(this.dataUtils.quizId);
  }

}
