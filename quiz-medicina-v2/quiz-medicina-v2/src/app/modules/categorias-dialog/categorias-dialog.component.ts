import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import { Router } from '@angular/router';
import { Categoria } from 'src/app/models/categoria';
import { DataUtilsIds } from 'src/app/models/dataUtils';
import { CategoriasService } from 'src/app/services/categorias/categorias.service';
import { DataUtilsService } from 'src/app/services/dados/dataUtils.service';
import { DialogUtilsService } from 'src/app/services/dialog-utils/dialog-utils.service';

@Component({
  selector: 'app-categorias-dialog',
  templateUrl: './categorias-dialog.component.html',
  styleUrls: ['./categorias-dialog.component.scss']
})
export class CategoriasDialogComponent implements OnInit {

  @Output() dialogClosed = new EventEmitter<void>();

  color: ThemePalette = "accent";
  formData!: FormGroup;
  dataUtils!: DataUtilsIds;

  constructor(
    private fb: FormBuilder,
    private dataUtilsService: DataUtilsService<DataUtilsIds>,
    private categoriasService: CategoriasService,
    private dialogUtils: DialogUtilsService<CategoriasDialogComponent>,
    private router: Router
  ) {}

  private createFormData(): FormGroup {
    return this.formData = this.fb.group({
      imagem: ['/teste', []],
      descricao: ['', [Validators.required]],
      cursoId: [ this.dataUtils.cursoId]
    });
  }

  ngOnInit(): void {
    this.dataUtilsService.getData().subscribe(data => this.dataUtils = data!);
    this.createFormData();
  }

  onSubmit(): void {

    let categoria = new Categoria(this.formData.value);

    this.categoriasService.create(categoria).subscribe({
        next: data => {
        if (data.id) {
          this.dialogUtils.closeDialog();
          this.dataUtils.categoriaId = data.id;
          this.dataUtilsService.sendData(this.dataUtils);
          this.router.navigate(['/home/tela-edit-quiz/edit-perguntas']);
          this.dialogClosed.emit();
        }
      },
      error: error => {
        this.dialogUtils.openDialogSnackBar(error.error.message);
      }}
    );

  }
}
