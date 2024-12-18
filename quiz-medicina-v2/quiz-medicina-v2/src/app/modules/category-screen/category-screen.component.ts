import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Categoria } from 'src/app/models/categoria';
import { DataUtilsIds } from 'src/app/models/dataUtils';
import { Progresso } from 'src/app/models/progressoPerguntas';
import { CategoriasService } from 'src/app/services/categorias/categorias.service';
import { DataUtilsService } from 'src/app/services/dados/dataUtils.service';
import { ProgressoPerguntasService } from 'src/app/services/progressoPerguntas/progresso-perguntas.service';
import { CategoriaQuizBaseComponent } from '../categoria-quiz-base/categoria-quiz-base.component';

interface IDataToView{
  categoriaOrQuiz: Categoria,
  progresso: Observable<Progresso>
}

@Component({
  selector: 'app-category-screen',
  templateUrl: './category-screen.component.html',
  styleUrls: ['./category-screen.component.css']
})
export class CategoryScreenComponent extends CategoriaQuizBaseComponent implements OnInit  {

  titulo = 'Categorias'
  quizId!: number;
  userId!: number;
  override dataUtils: DataUtilsIds = {} as DataUtilsIds;

  progressoAndCategorias!: IDataToView[];

  constructor(
    protected override router: Router,
    private categoriaService: CategoriasService,
    private progressoService: ProgressoPerguntasService,
    protected override dataUtilsService: DataUtilsService<DataUtilsIds>
  ) {
    super(router, dataUtilsService);
  }

  ngOnInit(): void {

    this.dataUtilsService.getData().subscribe(data => {
      this.dataUtils = data! || {} as DataUtilsIds;
      this.userId = data?.usuarioId!;
      this.quizId = data?.quizId!;
    });

    this.categoriaService.getAllCategoriasInQuiz(this.quizId).subscribe( categorias => {
      this.progressoAndCategorias = categorias.map(categoria => ({
        categoriaOrQuiz: categoria,
        progresso: this.progressoService.getProgressoByCategoria(this.userId, this.quizId, categoria.id!)
      }));
    });

  }

  redirectForPerguntas(id: number): void {
    let data = this.dataUtils;
    data!.categoriaId = id;
    this.dataUtilsService.sendData(data!);

    this.router.navigate(['home/tela-perguntas']);
  }

  // isso ainda não funciona;
  getProgressWidth(progresso: Progresso): string {
    if (!progresso || progresso.progressoTotal === 0) {
      return '0%';
    }

    const percent = (progresso.progressoAtual / progresso.progressoTotal) * 100;
    return percent + '%';
  }

}
