import { Component, Input, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IbgeService } from './ibge.service';

@Component({
  selector: 'app-inscricao',
  templateUrl: './inscricao.component.html',
  styleUrls: ['./inscricao.component.scss']
})
export class InscricaoComponent implements OnInit {
  @Input() btnText!: string;
  formulario: FormGroup; 
  estados: any[] = [];
  cidades: any[] = [];
  selectedEstadoId: number = 0; 

  constructor(
    private formBuilder: FormBuilder,
    @Inject(IbgeService) private ibgeService: IbgeService
  ) {
    this.formulario = this.formBuilder.group({
      nomeCompleto: ['', Validators.required],
      telefone: ['', [Validators.required, Validators.pattern(/^\d{10,}$/)]],
      uf: ['', Validators.required],
      cidade: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.ibgeService.getEstados().subscribe(estados => {
      this.estados = estados;
    });

    if (!this.btnText) {
      this.btnText = 'Enviar';
    }
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
