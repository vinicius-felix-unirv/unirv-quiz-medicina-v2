import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import { Alternativa } from 'src/app/models/alternativa';
import { DataUtilsIds } from 'src/app/models/dataUtils';
import { AlternativasService } from 'src/app/services/alternativas/alternativas.service';
import { DataUtilsService } from 'src/app/services/dados/dataUtils.service';
import { DialogUtilsService } from 'src/app/services/dialog-utils/dialog-utils.service';

@Component({
  selector: 'app-alternativas-dialog',
  templateUrl: './alternativas-dialog.component.html',
  styleUrls: ['./alternativas-dialog.component.scss']
})
export class AlternativasDialogComponent {

  @Output() dialogClosed = new EventEmitter<void>();

  color: ThemePalette = "accent";
  formData!: FormGroup;
  dataUtils!: DataUtilsIds;

  constructor(
    private fb: FormBuilder,
    private dataUtilsService: DataUtilsService<DataUtilsIds>,
    private alternativasService: AlternativasService,
    private dialogUtils: DialogUtilsService<AlternativasDialogComponent>
  ) {}

  private createFormData(): FormGroup {
    return this.formData = this.fb.group({
      imagem: ['/teste'],
      conteudo: ['', [Validators.required]],
      correta: [false, [Validators.required]],
      perguntasid: [ this.dataUtils.perguntaId]
    });
  }

  ngOnInit(): void {
    this.dataUtilsService.getData().subscribe(data => this.dataUtils = data!);
    this.createFormData();
  }

  onSubmit(): void {

    let alternativa = new Alternativa(this.formData.value);
    console.log(alternativa);

    this.alternativasService.create(alternativa).subscribe({
        next: data => {
        if (data.id) {
          this.dialogUtils.closeDialog();
          this.dialogClosed.emit();
        }
      },
      error: error => {
        this.dialogUtils.openDialogSnackBar(error.error.message);
      }}
    );

  }
}
