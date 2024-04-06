import { Component, Inject, ViewEncapsulation } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-reset-password-dialog',
  templateUrl: './reset-password-dialog.component.html',
  styleUrls: ['./reset-password-dialog.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ResetPasswordDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<ResetPasswordDialogComponent>,
    // @Inject(MAT_DIALOG_DATA) public data: string,
  ) {}

  teste: boolean = true;

  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'Você deve inserir um valor';
    }

    return this.email.hasError('email') ? 'Não é um e-mail válido' : '';
  }

  onSubmit(): void {
    if(this.email.valid){
      console.log(this.email.value);
    }else{
      console.log(this.email.value);
      console.log("error");
    }
  }

  onNoClick(): void {
    // this.dialogRef.close();
    console.log("esta fechando pelo btn");
    this.teste = false;
  }

  // enviarDados(): void{
  //   if(this.email != null){
  //     this.dialogRef.close();
  //     console.log("esta fechando pelo btn")
  //   }
  // }

}
