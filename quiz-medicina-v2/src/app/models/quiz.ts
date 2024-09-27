export class Quiz {

  id?: number;
  titulo: string = "";
  cursoid: number = 0;
  imagem: string = "";
  status: boolean = true;
  avaliativo: boolean = false;
  usuarioid: number = 0;

  constructor(init?: Partial<Quiz>) {
    Object.assign(this, init);
  }
}
