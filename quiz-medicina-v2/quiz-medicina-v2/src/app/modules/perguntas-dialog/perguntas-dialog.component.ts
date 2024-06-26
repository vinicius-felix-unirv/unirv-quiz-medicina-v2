import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import { DataUtilsIds } from 'src/app/models/dataUtils';
import { Pergunta } from 'src/app/models/pergunta';
import { DataUtilsService } from 'src/app/services/dados/dataUtils.service';
import { DialogUtilsService } from 'src/app/services/dialog-utils/dialog-utils.service';
import { PerguntanivelService } from 'src/app/services/perguntanivel/perguntanivel.service';
import { PerguntaService } from 'src/app/services/perguntas/perguntas.service';


@Component({
  selector: 'app-perguntas-dialog',
  templateUrl: './perguntas-dialog.component.html',
  styleUrls: ['./perguntas-dialog.component.scss']
})
export class PerguntasDialogComponent {

  @Output() dialogClosed = new EventEmitter<void>();

  color: ThemePalette = "accent";
  formData!: FormGroup;
  dataUtils!: DataUtilsIds;
  tempo: number = 0;

  niveis: {nivel: string, id: number}[] = [
    {nivel: 'Fácil', id: 1},
    {nivel: 'Médio', id: 2},
    {nivel: 'Dificil', id: 3},
  ];

  constructor(
    private fb: FormBuilder,
    private perguntasService: PerguntaService,
    private perguntasNivelService: PerguntanivelService,
    private dataUtilsService: DataUtilsService<DataUtilsIds>,
    private dialogUtils: DialogUtilsService<PerguntasDialogComponent>
  ) {}

  private createFormData(): FormGroup {
    return this.formData = this.fb.group({
      conteudo: ['', [Validators.required]],
      pathimage: [ null],
      tempo: [ this.tempo, [Validators.required]],
      categoriasid: [ this.dataUtils.categoriaId, [Validators.required]],
      perguntasnivelid: [ '', [Validators.required]],
      quizid: [ this.dataUtils.quizId, [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.dataUtilsService.getData().subscribe(data => this.dataUtils = data!);
    this.createFormData();
  }

  onSubmit(): void{

    let formValue = this.formData.value;

    formValue.tempo = Number(formValue.tempo);

    let pergunta = new Pergunta(formValue);

    console.log('pergunta:', pergunta);
    this.perguntasService.create(pergunta).subscribe({
        next: data => {
        if (data.id) {

          this.dialogUtils.closeDialog();
          this.dialogClosed.emit();
          console.log('data:', data);
        }
      },
      error: error => {
        this.dialogUtils.openDialogSnackBar(error.error.message);
      }}
    );
  }

  buttonColor: string = 'black';

  changeColor(): void {
    this.buttonColor = this.buttonColor === 'black' ? 'green' : 'black';
  }

  onNivelChange(): void {

    if (this.formData && this.formData.get('perguntasnivelid')) {

      const nivelId = this.formData.get('perguntasnivelid')!.value;

      if (nivelId) {
        this.perguntasNivelService.findById(nivelId).subscribe(
          data => {
            this.tempo = data.tempo;
            this.formData.patchValue({ tempo: this.tempo });
          }
        );
      }
    }
  }

}
