import { Component, Input, OnInit, Inject, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IbgeService } from '../../services/cidades/ibge.service';
import { Curso } from 'src/app/models/curso';
import { CursosService } from 'src/app/services/cursos/cursos.service';
import { Campus } from 'src/app/models/campus';
import { CampusService } from 'src/app/services/campus/campus.service';

@Component({
  selector: 'app-inscricao',
  templateUrl: './inscricao.component.html',
  styleUrls: ['./inscricao.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class InscricaoComponent implements OnInit {

  formulario!: FormGroup;
  estados: any[] = [];
  cidades: any[] = [];
  selectedEstadoId: number = 0;
  cursos!: Curso[];
  campusList!: Campus[];
  sexos: {sexo: string, id: number}[] = [
    {sexo: 'Masculino', id: 1},
    {sexo: 'Feminino', id: 2},
    {sexo: 'Outros', id: 3},
  ];
  periodos: {nome: string, numero: number}[] = [
    {nome:'Primeiro', numero: 1}, {nome:'Segundo', numero: 2}, {nome:'Terceiro', numero: 3},
    {nome:'Quarto', numero: 4}, {nome:'Quinto', numero: 5}, {nome:'Sexto', numero: 6},
    {nome:'Sétimo', numero: 7}, {nome:'Oitavo', numero: 8}, {nome:'Nono', numero: 9},
    {nome:'Décimo', numero: 10},
  ];

  template = true;
  isActive = true;
  hideSenha = true;
  hideConfirmarSenha = true;
  testando = false;

  constructor(
    private formBuilder: FormBuilder,
    @Inject(IbgeService) private ibgeService: IbgeService,
    private cursoService: CursosService,
    private campusService: CampusService
  ) { }

  private createFormData(): FormGroup {
    return this.formulario = this.formBuilder.group({
      nomeCompleto: ['', Validators.required],
      telefone: ['', [Validators.required, Validators.pattern(/^\d{10,}$/)]],
      sexo: ['', Validators.required],
      uf: ['', Validators.required],
      cidade: ['', Validators.required],
      dataNascimento: ['', Validators.required],
      campus: ['', Validators.required],
      curso: ['', Validators.required],
      turma: ['', Validators.required],
      periodo: ['', Validators.required],
      email: ['', Validators.required],
      senha: ['', Validators.required],
      confirmarSenha: ['', Validators.required],
    });
  }

  public getErrorMessage() {
    if (this.formulario.get('email')!.hasError('required')) {
      return 'Você deve inserir um valor';
    }

    return this.formulario.get('email')!.hasError('email') ? 'Não é um e-mail válido' : '';
  }

  public trocarTemplate(): void{
    this.template = !this.template;
    this.isActive = !this.isActive;
  }

  ngOnInit(): void {
    this.createFormData();
    this.campusService.findAll().subscribe(campus => this.campusList = campus);
    this.cursoService.findAll().subscribe(cursos => this.cursos =cursos);
    this.ibgeService.getEstados().subscribe(estados => this.estados = estados);

  }
  onSubmit() {
    // Implemente o que deseja fazer quando o formulário for submetido
    console.log(this.formulario)
    this.trocarTemplate();
  }
  onEstadoChange() {
    // Verificar se this.formulario e this.formulario.get('uf') não são nulos
    if (this.formulario && this.formulario.get('uf')) {
      // Obter o ID do estado selecionado
      const selectedEstadoId = this.formulario.get('uf')!.value;

      // Verificar se foi selecionado algum estado
      if (selectedEstadoId) {
        // Obter as cidades correspondentes ao estado selecionado
        this.ibgeService.getCidadesPorEstado(selectedEstadoId).subscribe(cidades => {
          this.cidades = cidades;
        });
      } else {
        // Limpar a lista de cidades se nenhum estado for selecionado
        this.cidades = [];
      }
    }
  }


  // Getter para verificar se o campo nomeCompleto está vazio
  get isNomeCompletoEmpty(): boolean {
    const campo = this.formulario.get('nomeCompleto');
    return campo ? campo.value === '' : true;
  }

  // Getter para verificar se o campo telefone está vazio
  get isTelefoneEmpty(): boolean {
    const campo = this.formulario.get('telefone');
    return campo ? campo.value === '' : true;
  }

  // Getter para verificar se o campo telefone é inválido
  get isTelefoneInvalid(): boolean {
    const campo = this.formulario.get('telefone');
    return campo ? campo.invalid : false;
  }
}
