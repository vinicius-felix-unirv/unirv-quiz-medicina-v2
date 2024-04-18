import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Pergunta {
  id: number;
  tipo: 'texto' | 'imagem';
  conteudo: string;
  alternativas: Alternativa[];
  respostaCorretaId: number;
  nivelDificuldade: 'fácil' | 'médio' | 'difícil'; 
}

interface Alternativa {
  id: number;
  resposta: string;
  correta: boolean;
  respostaIncorreta?: boolean; // Propriedade para aplicar estilo de resposta errada
  shaking?: boolean; // Propriedade para aplicar animação de "tremor"
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
  larguraBarraProgresso: number = 100; 
  interval: any;
  tempoExpiradoSemResposta: boolean = true;

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
      this.setTempoLimite(); 
      this.startTimer(); 
    } else {
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
    const incremento = 100 / this.tempoLimite;
    
    this.interval = setInterval(() => {
      if (this.timer > 0) {
        this.timer--;
        this.larguraBarraProgresso = this.timer * incremento;
      } else {
        clearInterval(this.interval);
        this.loadNextQuestion();
      }
    }, 1000);
  }

  selectAnswer(alternativaId: number) {
    this.selectedAnswer = alternativaId;
  }

  confirmAnswer() {
    this.tempoExpiradoSemResposta = false; 
    if (this.selectedAnswer !== undefined) {
      const respostaSelecionada = this.question?.alternativas.find(a => a.id === this.selectedAnswer);
      if (respostaSelecionada) {
        if (respostaSelecionada.correta) {
          respostaSelecionada.correta = true; 
          this.loadNextQuestion(); 
        } else {
          respostaSelecionada.correta = false; 
          this.applyWrongAnswer(); 
          this.shakeWrongAnswer();
        }
      }
    }
  }
  applyWrongAnswer() {
    if (this.selectedAnswer !== undefined) {
      const alternativaIncorreta = this.question?.alternativas.find(alternativa => alternativa.id === this.selectedAnswer);
      if (alternativaIncorreta) {
        alternativaIncorreta.respostaIncorreta = true;
        setTimeout(() => {
          this.removeWrongAnimation(alternativaIncorreta); 
        }, 500); 
      }
    }
  }
  
  
  
  shakeWrongAnswer() {
    if (this.selectedAnswer !== undefined) {
      const alternativaIncorreta = this.question?.alternativas.find(alternativa => alternativa.id === this.selectedAnswer);
      if (alternativaIncorreta) {
        alternativaIncorreta.shaking = true;
        setTimeout(() => {
          alternativaIncorreta.shaking = false;
        }, 500);
      }
    }
  }
  

  removeWrongAnimation(alternativa: Alternativa) {
    alternativa.respostaIncorreta = false;
  }

  isWrongAnswer(alternativaId: number): boolean {
    if (!this.selectedAnswer || !this.tempoExpiradoSemResposta) {
      return false;
    }
    
    const respostaSelecionada = this.question?.alternativas.find(a => a.id === this.selectedAnswer);
    return respostaSelecionada !== undefined && respostaSelecionada.id === alternativaId && !respostaSelecionada.correta;
  }

  loadNextQuestion() {
    this.questionIndex++;
    this.loadQuestion();
  }

  calculateScore() {
    this.score = this.perguntas.reduce((acc, pergunta) => {
      const respostaSelecionada = pergunta.alternativas.find(a => a.id === this.selectedAnswer);
      if (respostaSelecionada && respostaSelecionada.correta) {
        return acc + 1;
      } else {
        return acc;
      }
    }, 0);
  }
}