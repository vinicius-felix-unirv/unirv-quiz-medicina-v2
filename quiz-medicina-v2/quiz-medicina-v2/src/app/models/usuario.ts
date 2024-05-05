export class Usuario {

  id?: number;
  nome: string = '';
  email: string = '';
  senha: string = '';
  telefone: string = '';
  sexo: number = 0;
  datanascimento: Date = new Date();
  role: number = 0;
  uf: string = '';
  nomecampus: number = 0;
  foto: string = '';
  pontuacao: number = 0;
  status: boolean =  true;
  turma: string = '';
  cursoid: number = 0;
  periodo: number = 0;
  cidade: string = '';
}
