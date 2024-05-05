export class Pergunta {

  id?: number;
  conteudo: string | null = '';
  perguntasnivelid: number = 0;
  tempo: number = 0;
  pathimage: string | null = '';
  status: boolean = true;
  categoriasid: number = 0;
  quizid: number | null = 0;
  quizavaliativoid: number | null = 0;

}
