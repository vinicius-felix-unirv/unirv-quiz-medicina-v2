import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Categoria } from 'src/app/models/categoria';
import { CategoriaForPerguntas } from 'src/app/models/dataUtils';
import { Progresso } from 'src/app/models/progressoPerguntas';
import { CategoriasService } from 'src/app/services/categorias/categorias.service';
import { DataUtilsService } from 'src/app/services/dados/dataUtils.service';
import { ProgressoPerguntasService } from 'src/app/services/progressoPerguntas/progresso-perguntas.service';


interface categoriaAndProgresso{
  categoria: Categoria,
  progresso: Observable<Progresso>
}

@Component({
  selector: 'app-category-screen',
  templateUrl: './category-screen.component.html',
  styleUrls: ['./category-screen.component.css']
})
export class CategoryScreenComponent implements OnInit  {

  progressoAndCategorias!: categoriaAndProgresso[];

  quizId: number = 1;
  usuarioId: number =2;

  constructor(
    private router: Router,
    private categoriaService: CategoriasService,
    private progressoService: ProgressoPerguntasService,
    private dataUtilsService: DataUtilsService<CategoriaForPerguntas>
  ) {

  }

  ngOnInit(): void {
    this.categoriaService.getAllCategoriasInQuiz(this.quizId).subscribe( categorias => {
      this.progressoAndCategorias = categorias.map(categoria => ({
        categoria: categoria,
        progresso: this.progressoService.getProgressoByCategoria(this.usuarioId, this.quizId, categoria.id!)
      }));
    });
  }

  redirect(categoriaId: number): void {
    let data = new CategoriaForPerguntas()
    data.categoriaId = categoriaId;
    data.quizId = this.quizId;
    data.usuarioId = this.usuarioId;
    this.dataUtilsService.sendData(data);

    this.router.navigate(['tela-perguntas']);

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
