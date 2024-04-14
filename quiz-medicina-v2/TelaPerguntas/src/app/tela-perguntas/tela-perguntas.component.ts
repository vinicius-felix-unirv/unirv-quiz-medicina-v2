import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Pergunta {
  id: number;
  tipo: 'texto' | 'imagem';
  conteudo: string;
  alternativas: Alternativa[];
  respostaCorretaId: number;
  nivelDificuldade: 'fácil' | 'médio' | 'difícil'; // Adicione o nível de dificuldade
}

interface Alternativa {
  id: number;
  resposta: string;
}

@Component({
  selector: 'app-tela-perguntas',
  templateUrl: './tela-perguntas.component.html',
  styleUrls: ['./tela-perguntas.component.css']
})
export class TelaPerguntasComponent implements OnInit {
  perguntas: Pergunta[] = [];
  question: Pergunta | undefined;
  questionIndex: number = 0;
  selectedAnswer: number | undefined;
  showResult: boolean = false;
  score: number = 0;
  timer: number = 0;
  tempoLimite: number = 0;
  larguraBarraProgresso: number = 100; // Largura inicial da barra de progresso
  interval: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.loadQuestions();
  }

  loadQuestions() {
    this.http.get<Pergunta[]>('assets/perguntas.json').subscribe(data => {
      this.perguntas = data;
      this.loadQuestion();
    });
  }

  loadQuestion() {
    if (this.perguntas.length > 0 && this.questionIndex < this.perguntas.length) {
      this.question = this.perguntas[this.questionIndex];
      this.selectedAnswer = undefined;
      this.setTempoLimite(); // Definir o tempo limite com base no nível de dificuldade
      this.startTimer(); // Iniciar o temporizador
    } else {
      // Resetar o índice quando todas as perguntas forem respondidas
      this.questionIndex = 0;
    }
  }

  setTempoLimite() {
    switch (this.question?.nivelDificuldade) {
      case 'fácil':
        this.tempoLimite = 25; 
        break;
      case 'médio':
        this.tempoLimite = 20;
        break;
      case 'difícil':
        this.tempoLimite = 15; 
        break;
      default:
        this.tempoLimite = 5; 
    }
  }

  startTimer() {
    this.timer = this.tempoLimite;
    const incremento = 100 / this.tempoLimite; // Calcular incremento percentual
    this.interval = setInterval(() => {
      if (this.timer > 0) {
        this.timer--;
        // Ajustar a largura da barra de progresso
        this.larguraBarraProgresso = this.timer * incremento;
      } else {
        clearInterval(this.interval);
        // Se o temporizador chegar a zero e nenhuma resposta foi selecionada, ir para a próxima pergunta
        if (!this.selectedAnswer) {
          if (this.questionIndex === this.perguntas.length - 1) {
            this.showResult = true;
            this.calculateScore();
          } else {
            this.confirmAnswer();
          }
        }
      }
    }, 1000); // Atualizar o temporizador a cada segundo
  }

  selectAnswer(alternativaId: number) {
    this.selectedAnswer = alternativaId;
  }

  confirmAnswer() {
    if (this.selectedAnswer !== undefined) {
      // Verificar se ainda há perguntas para exibir
      if (this.questionIndex < this.perguntas.length - 1) {
        // Avançar para a próxima pergunta
        this.questionIndex++;
        this.loadQuestion();
      } else {
        // Se for a última pergunta, exibir o resultado
        this.showResult = true;
        this.calculateScore();
        clearInterval(this.interval); // Limpar o intervalo do temporizador
      }
    } else {
      // Se nenhuma resposta foi selecionada, ir para a próxima pergunta
      if (this.questionIndex < this.perguntas.length - 1) {
        // Avançar para a próxima pergunta
        this.questionIndex++;
        this.loadQuestion();
      } else {
        // Se for a última pergunta, exibir o resultado
        this.showResult = true;
        this.calculateScore();
        clearInterval(this.interval); // Limpar o intervalo do temporizador
      }
    }
  }

  calculateScore() {
    // Calcular a pontuação com base nas respostas corretas
    this.score = this.perguntas.reduce((acc, pergunta) => {
      const respostaSelecionada = pergunta.alternativas.find(a => a.id === this.selectedAnswer);
      if (respostaSelecionada && respostaSelecionada.id === pergunta.respostaCorretaId) {
        return acc + 1;
      } else {
        return acc;
      }
    }, 0);
  }
}
