import { Component, OnInit } from '@angular/core';
import { PerguntaService } from 'src/app/services/perguntas/perguntas.service';
import { ProgressoPerguntasService } from 'src/app/services/progressoPerguntas/progresso-perguntas.service';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';
import { Pergunta } from 'src/app/models/pergunta';
import { Alternativa } from 'src/app/models/alternativa';
import { AlternativasService } from 'src/app/services/alternativas/alternativas.service';
import { Observable } from 'rxjs';
import { PerguntanivelService } from 'src/app/services/perguntanivel/perguntanivel.service';
import { DataUtilsService } from 'src/app/services/dados/dataUtils.service';
import { DataUtilsIds } from 'src/app/models/dataUtils';


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
  alternativaCorreta: number = 0;
  alternativaEscolhida: number = 0;
  qtdTentativas: number = 0;
  pontuacao: number = 0;

  userId!: number;
  quizId!: number;
  categoriaId!: number;
  skip: number = 0;
  take: number = 3;

  constructor(
    private perguntasService: PerguntaService,
    private progressoService: ProgressoPerguntasService,
    private usuarioService: UsuarioService,
    private alternativasService: AlternativasService,
    private perguntasNivel: PerguntanivelService,
    private dataUtilsService: DataUtilsService<DataUtilsIds>
  ) {

  }

  ngOnInit(): void {

    this.dataUtilsService.getData().subscribe(data => {
      this.userId = data?.usuarioId!;
      this.categoriaId = data?.categoriaId!;
      this.quizId = data?.quizId!;
    });
    this.perguntaAtual = null;
    this.perguntasService.getAllPerguntasQuizByCategoria(this.userId, this.quizId, this.categoriaId, this.skip, this.take).subscribe(perguntas => {
      if(!perguntas.length) {
        this.trocarLayout();
        return;
      }
      this.listaPerguntas = perguntas;
      this.perguntaAtual = perguntas[0];
      this.alternativasByPergunta$ = this.alternativasService.getAllAlternativasByPerguntaId(perguntas[0].id!);
      this.alternativasByPergunta$.subscribe(al => al.forEach( x => {
        if(x.correta === true){
          this.alternativaCorreta = x.id!;
          return;
        }
      }));
      this.perguntasNivel.findById(this.perguntaAtual?.perguntasnivelid).subscribe(p => {
        this.pontuacao = p.pontuacao;
      });
    });
  }

  getAllAlternativas(perguntaId: number): void {
    this.alternativasByPergunta$ = this.alternativasService.getAllAlternativasByPerguntaId(perguntaId);
    this.alternativasByPergunta$.subscribe(al => al.forEach( x => {
      if(x.correta === true){
        this.alternativaCorreta = x.id!;
        return;
      }
    }));
  }

  proximaPergunta(): void {

    this.alternativaEscolhida = 0;
    this.alternativaCorreta = 0;
    this.qtdTentativas = 0;
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
    this.perguntaAtual = this.listaPerguntas[this.contadorPergunta];
    this.perguntasNivel.findById(this.perguntaAtual?.perguntasnivelid).subscribe(p => {
      this.pontuacao = p.pontuacao;
    });
    this.getAllAlternativas(this.perguntaAtual.id!);

  }

  trocarLayout(){
    this.layout = !this.layout;
  }

  addNewProgresso(): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      this.progressoService.create({usuariosid: this.userId, perguntasid: this.perguntaAtual?.id!}).subscribe({
        next: () => resolve(),
        error: (err) => reject(err)
      });
    });
  }

  addPontuacao(): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      this.usuarioService.addPontuacao(this.calcPontuacao(this.qtdTentativas), this.userId).subscribe({
        next: () => resolve(),
        error: (err) => reject(err)
      });
    });
  }

  onSelect(id: number): void{
    this.alternativaEscolhida = id;
    this.qtdTentativas++;
  }

  calcPontuacao(qtdTentativas: number): number {
    let valorPorcentagem = 0;
    switch (qtdTentativas) {
      case 1:
        return this.pontuacao;
      case 2:
        valorPorcentagem = 20;
        break;
      case 3:
        valorPorcentagem = 40;
        break;
      case 4:
        valorPorcentagem = 60;
        break;
      case 5:
        valorPorcentagem = 80;
        break;
      default:
        valorPorcentagem = 80;
    }

    return this.pontuacao - ((this.pontuacao * valorPorcentagem)/ 100);
  }

  async checkAcerto(): Promise<void> {
    if(this.alternativaEscolhida === this.alternativaCorreta){

      await Promise.all([
        this.addNewProgresso(),
        this.addPontuacao()
      ]);

      this.pontuacao = 0;
      this.proximaPergunta();
    }
  }
}

