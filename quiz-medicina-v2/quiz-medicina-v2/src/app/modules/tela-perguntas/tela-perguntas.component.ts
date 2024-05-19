import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PerguntaService } from 'src/app/services/perguntas/perguntas.service';
import { ProgressoPerguntasService } from 'src/app/services/progressoPerguntas/progresso-perguntas.service';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';
import { Pergunta } from 'src/app/models/pergunta';
import { Alternativa } from 'src/app/models/alternativa';
import { AlternativasService } from 'src/app/services/alternativas/alternativas.service';
import { Observable, combineLatest, combineLatestAll, map } from 'rxjs';

@Component({
  selector: 'app-tela-perguntas',
  templateUrl: './tela-perguntas.component.html',
  styleUrls: ['./tela-perguntas.component.css']
})
export class TelaPerguntasComponent implements OnInit {

  listaPerguntas$!: Observable<Pergunta[]>;
  alternativasByPergunta$!: Observable<Alternativa[]>;
  perguntaAtual!: Pergunta | null;
  contadorPergunta: number = 0;
  layout: boolean = false;

  userId: number = 2;
  quizId: number = 1;
  categoriaId: number = 1;
  skip: number = 0;
  take: number = 3;

  constructor(private http: HttpClient,
    private perguntasService: PerguntaService,
    private progressoService: ProgressoPerguntasService,
    private usuarioService: UsuarioService,
    private alternativasService: AlternativasService
  ) { }



  ngOnInit(): void {
    this.perguntaAtual = null;
    this.listaPerguntas$ = this.perguntasService.getAllPerguntasQuizByCategoria(this.userId, this.quizId, this.categoriaId, this.skip, this.take);
    this.listaPerguntas$.subscribe(perguntas => {
      this.perguntaAtual = perguntas[0];
      this.alternativasByPergunta$ = this.alternativasService.getAllAlternativasByPerguntaId(perguntas[0].id!);
    });
  }

  test(): void {
    console.log(this.listaPerguntas$);
    console.log(this.alternativasByPergunta$);
    console.log(this.perguntaAtual);
  }

  getAllPerguntas(userId: number, quizId: number, categoriaId: number, skip: number, take: number): void {
    this.listaPerguntas$ = this.perguntasService.getAllPerguntasQuizByCategoria(userId, quizId, categoriaId, skip, take);
  }

  getAllAlternativas(perguntaId: number): void {
    this.alternativasByPergunta$ = this.alternativasService.getAllAlternativasByPerguntaId(perguntaId);
  }

  proximaPergunta(): void {

    this.perguntaAtual = null;
    if(this.contadorPergunta  == 2) {
      this.skip += 3;
      this.getAllPerguntas(this.userId, this.quizId, this.categoriaId, this.skip, this.take);
      this.contadorPergunta = 0;
      this.carregarPerguntaDaVez();
    }else{
      this.contadorPergunta += 1;
      this.carregarPerguntaDaVez();
    }
  }

  carregarPerguntaDaVez(): void {
    this.listaPerguntas$.subscribe(p => {
      if(!p[this.contadorPergunta]){
        this.trocarLayout();
        return;
      }
      this.perguntaAtual = p[this.contadorPergunta];
      this.getAllAlternativas(this.perguntaAtual.id!);
    });
  }

  trocarLayout(){
    this.layout = !this.layout;
  }
}

