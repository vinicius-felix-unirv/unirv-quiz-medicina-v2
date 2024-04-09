import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-inscricao',
  templateUrl: './inscricao.component.html',
  styleUrls: ['./inscricao.component.scss']
})
export class InscricaoComponent implements OnInit {
  @Input() btnText!: string;
  formulario: FormGroup; // Adicione a declaração do FormGroup

  constructor(private formBuilder: FormBuilder) {
    this.formulario = this.formBuilder.group({
      nomeCompleto: ['', Validators.required],
      telefone: ['', [Validators.required, Validators.pattern(/^\d{10,}$/)]]
    });
  }

  ngOnInit(): void {
    if (!this.btnText) {
      this.btnText = 'Enviar';
    }
  }
}
