export class Alternativa {

  id?: number;
  perguntasid: number = 0;
  conteudo: string | null = "";
  imagem: string | null = "";
  correta: boolean = false;

  constructor(init?: Partial<Alternativa>) {
    Object.assign(this, init);
  }
}
