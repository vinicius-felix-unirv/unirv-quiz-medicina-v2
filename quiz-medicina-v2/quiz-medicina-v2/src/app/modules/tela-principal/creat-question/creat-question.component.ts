import { Component, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { CreateCategoriaComponent } from '../create-categoria/create-categoria.component';


interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-creat-question',
  templateUrl: './creat-question.component.html',
  styleUrls: ['./creat-question.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CreatQuestionComponent {
  // private _dialog: any;
  constructor(
    public dialogRef: MatDialogRef<CreatQuestionComponent>,
    private _formBuilder: FormBuilder, public _dialog: MatDialog
  ) {}

  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'},
  ];
  
  color: ThemePalette = "accent";
  formData!: FormGroup;

  private createFormData(): FormGroup {
    return this.formData = this._formBuilder.group({
      imagem: ['', [Validators.required]],
      titulo: ['', [Validators.required]],
      // senha: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.createFormData();
  }

  closeDialog(): void {
    this.dialogRef.close();
  }

  onSubmit(): void{
    console.log("é isso");
  }

  buttonColor: string = 'black'; 

  changeColor(): void {
    this.buttonColor = this.buttonColor === 'black' ? 'green' : 'black'; 
  }
  
  openDialog(): void {
    console.log("Abriu a dialog")
    const dialogRef = this._dialog.open(CreateCategoriaComponent, {
    });

    dialogRef.afterClosed().subscribe(() => {
      console.log("fechou")
    });
  }
  
}
