import { Component, ViewEncapsulation } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Email } from 'src/app/models/email';
import { EmailService } from 'src/app/services/email/email.service';

@Component({
  selector: 'app-reset-password-dialog',
  templateUrl: './reset-password-dialog.component.html',
  styleUrls: ['./reset-password-dialog.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ResetPasswordDialogComponent {
  constructor(
    private dialogRef: MatDialogRef<ResetPasswordDialogComponent>,
    private emailService: EmailService
  ) {}

  teste: boolean = true;

  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'Você deve inserir um valor';
    }

    return this.email.hasError('email') ? 'Não é um e-mail válido' : '';
  }

  public sendEmail(): void {

    const emailToBeSend = new Email();
    emailToBeSend.to = this.email.value!;
    emailToBeSend.subject = "recebe ai";
    emailToBeSend.text = "vai dar bom nego";

    this.emailService.create(emailToBeSend).subscribe(data => console.log(data));
  }

  onSubmit(event: Event): void {
    this.email.markAsTouched();
    console.log(this.email.value);
    if(this.email.valid){
      this.teste = false;
      this.sendEmail();
    }else{
      event.preventDefault();
    }
  }

  closeDialog(): void {
    this.dialogRef.close();
  }

}
