import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
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

  constructor(
    private fb: FormBuilder,
    private dataUtilsService: DataUtilsService<DataUtilsIds>,
    private categoriasService: CategoriasService,
    private dialogUtils: DialogUtilsService<CategoriasDialogComponent>
  ) {}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
