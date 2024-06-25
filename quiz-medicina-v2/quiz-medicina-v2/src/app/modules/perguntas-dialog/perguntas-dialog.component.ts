import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import { DataUtilsIds } from 'src/app/models/dataUtils';
import { DataUtilsService } from 'src/app/services/dados/dataUtils.service';
import { DialogUtilsService } from 'src/app/services/dialog-utils/dialog-utils.service';
import { PerguntaService } from 'src/app/services/perguntas/perguntas.service';

interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-perguntas-dialog',
  templateUrl: './perguntas-dialog.component.html',
  styleUrls: ['./perguntas-dialog.component.scss']
})
export class PerguntasDialogComponent {


  constructor(
    private fb: FormBuilder,
    private perguntasService: PerguntaService,
    private dataUtilsService: DataUtilsService<DataUtilsIds>,
    private dialogUtils: DialogUtilsService<PerguntasDialogComponent>
  ) {}

  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'},
  ];

  color: ThemePalette = "accent";
  formData!: FormGroup;

  private createFormData(): FormGroup {
    return this.formData = this.fb.group({
      imagem: ['', [Validators.required]],
      titulo: ['', [Validators.required]],
      // senha: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.createFormData();
  }

  onSubmit(): void{
    console.log("é isso");
  }

  buttonColor: string = 'black';

  changeColor(): void {
    this.buttonColor = this.buttonColor === 'black' ? 'green' : 'black';
  }

}
