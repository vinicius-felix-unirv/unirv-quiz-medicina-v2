import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ThemePalette } from '@angular/material/core';     

@Component({
  selector: 'app-new-quiz',
  templateUrl: './new-quiz.component.html',
  styleUrls: ['./new-quiz.component.scss'],
  encapsulation: ViewEncapsulation.None

})
export class NewQuizComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<NewQuizComponent>,
    private _formBuilder: FormBuilder
  ) {}

  
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
}
