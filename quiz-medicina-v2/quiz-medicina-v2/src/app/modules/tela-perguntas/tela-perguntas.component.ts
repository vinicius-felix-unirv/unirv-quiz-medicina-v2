import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PerguntaService } from 'src/app/services/perguntas/perguntas.service';
import { ProgressoPerguntasService } from 'src/app/services/progressoPerguntas/progresso-perguntas.service';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';
import { Pergunta } from 'src/app/models/pergunta';
import { Alternativa } from 'src/app/models/alternativa';
import { AlternativasService } from 'src/app/services/alternativas/alternativas.service';
import { Observable } from 'rxjs';
import { ProgressoPerguntas } from 'src/app/models/progressoPerguntas';

@Component({
  selector: 'app-tela-perguntas',
  templateUrl: './tela-perguntas.component.html',
  styleUrls: ['./tela-perguntas.component.css']
})
export class TelaPerguntasComponent implements OnInit {

  listaPerguntas!: Pergunta[];
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
    this.perguntasService.getAllPerguntasQuizByCategoria(this.userId, this.quizId, this.categoriaId, this.skip, this.take).subscribe(perguntas => {
      if(!perguntas.length) {
        this.trocarLayout();
        return;
      }
      this.listaPerguntas = perguntas;
      this.perguntaAtual = perguntas[0];
      this.alternativasByPergunta$ = this.alternativasService.getAllAlternativasByPerguntaId(perguntas[0].id!);
    });
  }

  getAllPerguntas(userId: number, quizId: number, categoriaId: number, skip: number, take: number): void {

    // this.listaPerguntas$.subscribe(perguntas => {
    //   perguntas.forEach(console.log);
    // });
  }

  getAllAlternativas(perguntaId: number): void {
    this.alternativasByPergunta$ = this.alternativasService.getAllAlternativasByPerguntaId(perguntaId);
  }

  proximaPergunta(): void {

    this.addNewProgresso();

    this.perguntaAtual = null;
    if(this.contadorPergunta  == this.take - 1) {
      this.perguntasService.getAllPerguntasQuizByCategoria(this.userId, this.quizId, this.categoriaId, this.skip, this.take).subscribe(perguntas => {
        this.listaPerguntas = perguntas;
        this.contadorPergunta = 0;
        this.carregarPerguntaDaVez();
        console.log(perguntas);
      });
    }else{
      this.contadorPergunta += 1;
      this.carregarPerguntaDaVez();
    }
  }

  carregarPerguntaDaVez(): void {

      if(!this.listaPerguntas[this.contadorPergunta]){
        this.trocarLayout();
        return;
      }
      // console.log(p[this.contadorPergunta]);
      this.perguntaAtual = this.listaPerguntas[this.contadorPergunta];
      this.getAllAlternativas(this.perguntaAtual.id!);

  }

  trocarLayout(){
    this.layout = !this.layout;
  }

  addNewProgresso(): void{
    // let result: ProgressoPerguntas;
    this.progressoService.create({usuariosid: this.userId, perguntasid: this.perguntaAtual?.id!}).subscribe();
  }
}

