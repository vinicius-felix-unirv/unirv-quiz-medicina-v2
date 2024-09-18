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
  perguntaAtual: Pergunta | null = null;
  contadorPergunta: number = 0;
  layout: boolean = false;
  confirmar_continuar = true;
  alternativaCorreta: number = 0;
  alternativaEscolhida: number = 0;
  pontuacao: number = 0;
  tempoRestante: number = 0;

  userId!: number;
  quizId!: number;
  categoriaId!: number;
  skip: number = 0;
  take: number = 3;
  alternativaErrada: number = 0;
  shakeAlternativaId: number | null = null;

  constructor(
    private perguntasService: PerguntaService,
    private progressoService: ProgressoPerguntasService,
    private usuarioService: UsuarioService,
    private alternativasService: AlternativasService,
    private perguntasNivel: PerguntanivelService,
    private dataUtilsService: DataUtilsService<DataUtilsIds>
  ) {}

  ngOnInit(): void {
    this.dataUtilsService.getData().subscribe(data => {
      this.userId = data?.usuarioId!;
      this.categoriaId = data?.categoriaId!;
      this.quizId = data?.quizId!;
      this.carregarPerguntas();
    });
  }

  carregarPerguntas(): void {
    this.perguntasService.getAllPerguntasQuizByCategoria(this.userId, this.quizId, this.categoriaId, this.skip, this.take).subscribe(perguntas => {
      if (!perguntas.length) {
        this.trocarLayout();
        return;
      }
      this.listaPerguntas = perguntas;
      this.carregarPerguntaDaVez();
    });
  }

  carregarPerguntaDaVez(): void {
    if (this.listaPerguntas.length === 0) {
      this.trocarLayout();
      return;
    }

    this.perguntaAtual = this.listaPerguntas[this.contadorPergunta];
    this.tempoRestante = this.perguntaAtual.tempo ?? 0;
    
    this.alternativasByPergunta$ = this.alternativasService.getAllAlternativasByPerguntaId(this.perguntaAtual.id!);
    this.alternativasByPergunta$.subscribe(alternativas => {
      const correta = alternativas.find(x => x.correta);
      if (correta) {
        this.alternativaCorreta = correta.id!;
      }
    });

    this.perguntasNivel.findById(this.perguntaAtual.perguntasnivelid!).subscribe(p => {
      this.pontuacao = p.pontuacao;
    });

    // this.startTimer();
  }

  startTimer(): void {
    const timerInterval = setInterval(() => {
      if (this.tempoRestante > 0) {
        this.tempoRestante--;
      } else {
        clearInterval(timerInterval);
        this.finalizarPergunta(false);
      }
    }, 1000);
  }

  getAllAlternativas(perguntaId: number): void {
    this.alternativasByPergunta$ = this.alternativasService.getAllAlternativasByPerguntaId(perguntaId);
    this.alternativasByPergunta$.subscribe(alternativas => {
      const correta = alternativas.find(x => x.correta);
      if (correta) {
        this.alternativaCorreta = correta.id!;
      }
    });
  }

  proximaPergunta(): void {
    this.alternativaEscolhida = 0;
    this.alternativaCorreta = 0;
    this.perguntaAtual = null;

    if (this.contadorPergunta >= this.listaPerguntas.length - 1) {
      this.carregarPerguntas();
      this.contadorPergunta = 0;
    } else {
      this.contadorPergunta += 1;
      this.carregarPerguntaDaVez();
    }
  }

  trocarLayout(): void {
    this.layout = true;
  }

  addNewProgresso(): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      this.progressoService.create({usuariosid: this.userId, perguntasid: this.perguntaAtual?.id!}).subscribe({
        next: () => resolve(),
        error: (err) => reject(err)
      });
    });
  }


  onSelect(id: number): void {
    this.alternativaEscolhida = id;
  }

  async checkAcerto(): Promise<void> {
    this.confirmar_continuar = !this.confirmar_continuar;
    if (this.alternativaEscolhida === this.alternativaCorreta) {
      console.log('acertouu');
      this.shakeAlternativaId = this.alternativaCorreta;
      await Promise.all([
        this.addNewProgresso(),
      ]);
    } else {
      console.log('errou');
      this.alternativaErrada = this.alternativaEscolhida;
      this.shakeAlternativaId = this.alternativaCorreta;
      await this.addNewProgresso();
    }
  }

  continuar(): void {
    this.shakeAlternativaId = null;
    this.alternativaErrada = 0;
    this.proximaPergunta();
    this.confirmar_continuar = !this.confirmar_continuar;
  }

  finalizarPergunta(acertou: boolean): void {
    if (!acertou) {
      this.confirmar_continuar = !this.confirmar_continuar;
      this.shakeAlternativaId = this.alternativaCorreta; // Define a alternativa correta para o shake
    }
  }
}