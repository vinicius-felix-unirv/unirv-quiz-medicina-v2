import { Component, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ResetPasswordDialogComponent } from './reset-password-dialog/reset-password-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar,  MatSnackBarVerticalPosition } from '@angular/material/snack-bar';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class LoginComponent {

  // O que falta: fazer o submiti, mensagem de erro caso o email ou a senha não sejam validos

  hide = true;
  formData!: FormGroup;
  dialog: any;

  

  constructor(private _formBuilder: FormBuilder, public _dialog: MatDialog, private _snackBar: MatSnackBar){}

  private createFormData(): FormGroup {
    return this.formData = this._formBuilder.group({
      email: ['', [Validators.email, Validators.required]],
      senha: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
    this.createFormData();
  }

  getErrorMessage() {
    if (this.formData.get('email')!.hasError('required')) {
      return 'Você deve inserir um valor';
    }

    return this.formData.get('email')!.hasError('email') ? 'Não é um e-mail válido' : '';
  }

  getIncorrectData(){
    // if(){

    // }
  }

  onSubmit(): void {
    if(this.formData.valid){
      console.log(this.formData.value);
    }else{
      console.log("error");
      this.openSnackBar('Usuário não encontrado', 'Fechar');
    }
  }

  openDialog(): void {
    const dialogRef = this._dialog.open(ResetPasswordDialogComponent, {
    });

    dialogRef.afterClosed().subscribe(() => {
      console.log("fechou")
    });
  }

  verticalPosition: MatSnackBarVerticalPosition = 'top'

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      verticalPosition: this.verticalPosition,
      duration: 2000, 
    });
  }


}


