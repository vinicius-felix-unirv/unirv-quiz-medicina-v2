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

  // listaPerguntas$!: Observable<Pergunta[]>;
  listaPerguntas!: Pergunta[];
  alternativasByPergunta$!: Observable<Alternativa[]>;
  perguntaAtual!: Pergunta | null;
  contadorPergunta: number = 0;

  constructor(private http: HttpClient,
    private perguntasService: PerguntaService,
    private progressoService: ProgressoPerguntasService,
    private usuarioService: UsuarioService,
    private alternativasService: AlternativasService
  ) { }



  ngOnInit(): void {

    this.perguntaAtual = null;
    this.perguntasService.getAllPerguntasQuizByCategoria(2, 1, 1, 0, 3).subscribe(perguntas => {
      this.listaPerguntas = perguntas;
      this.perguntaAtual = perguntas[0];

      this.alternativasByPergunta$ = this.alternativasService.getAllAlternativasByPerguntaId(perguntas[0].id!);});

  }

  test(): void {
    console.log(this.listaPerguntas);
    console.log(this.alternativasByPergunta$);
    console.log(this.perguntaAtual);
  }

  getAllPerguntas(userId: number, quizId: number, categoriaId: number, skip: number, take: number): void {
    this.listaPerguntas = [];
    this.perguntasService.getAllPerguntasQuizByCategoria(userId, quizId, categoriaId, skip, take).subscribe(p => this.listaPerguntas = p);
  }

  getAllAlternativas(perguntaId: number): void {
    // this.alternativasByPergunta = [];
    this.alternativasByPergunta$ = this.alternativasService.getAllAlternativasByPerguntaId(perguntaId);
  }

  proximaPergunta(): void {

    this.perguntaAtual = null;
    this.perguntaAtual = this.listaPerguntas[this.contadorPergunta + 1];
    this.getAllAlternativas(this.perguntaAtual.id!);
    this.contadorPergunta = this.contadorPergunta + 1;
    this.test();
  }

}

