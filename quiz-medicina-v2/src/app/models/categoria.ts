export class Categoria {

  id?: number;
  descricao: string = '';
  status: boolean = true;
  imagem: string = '';
  cursoId: number = 0;

  constructor(init?: Partial<Categoria>) {
    Object.assign(this, init);
  }
}
