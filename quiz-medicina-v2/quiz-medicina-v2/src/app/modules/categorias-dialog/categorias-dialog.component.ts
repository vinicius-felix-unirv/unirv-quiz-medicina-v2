import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
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

  color: ThemePalette = "accent";
  formData!: FormGroup;
  dataUtils!: DataUtilsIds;

  constructor(
    private fb: FormBuilder,
    private dataUtilsService: DataUtilsService<DataUtilsIds>,
    private categoriasService: CategoriasService,
    private dialogUtils: DialogUtilsService<CategoriasDialogComponent>
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
    console.log(categoria);

    this.categoriasService.create(categoria).subscribe({
        next: data => {
        if (data.id) {
          this.dialogUtils.closeDialog();
        }
      },
      error: error => {
        console.error('There was an error!', error.error.message);
        this.dialogUtils.openDialogSnackBar('Categoria já cadastrado');
      }}
    );

  }
}
