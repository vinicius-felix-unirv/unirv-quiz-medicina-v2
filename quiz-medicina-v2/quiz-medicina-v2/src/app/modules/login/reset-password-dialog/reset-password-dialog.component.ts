import { Component, ViewEncapsulation } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-reset-password-dialog',
  templateUrl: './reset-password-dialog.component.html',
  styleUrls: ['./reset-password-dialog.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class ResetPasswordDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<ResetPasswordDialogComponent>,
  ) {}

  teste: boolean = true;

  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'Você deve inserir um valor';
    }

    return this.email.hasError('email') ? 'Não é um e-mail válido' : '';
  }

  onSubmit(event: Event): void {
    this.email.markAsTouched();
    if(this.email.valid){
      this.teste = false;
    }else{
      event.preventDefault();
    }
  }

  closeDialog(): void {
    this.dialogRef.close();
  }

}
