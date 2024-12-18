export class Pergunta {

  id?: number;
  conteudo: string | null = '';
  perguntasnivelid: number = 0;
  tempo: number = 0;
  pathimage: string | null = null;
  status: boolean = true;
  categoriasid: number = 0;
  quizid: number = 0;

  constructor(init?: Partial<Pergunta>) {
    Object.assign(this, init);
  }
}
