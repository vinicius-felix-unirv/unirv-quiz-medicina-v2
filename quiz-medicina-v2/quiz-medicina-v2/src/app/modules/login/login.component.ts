import { AfterViewInit, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { ResetPasswordDialogComponent } from './reset-password-dialog/reset-password-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { AuthService } from 'src/app/security/auth.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { LoginResponse } from 'src/app/models/loginResponse';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class LoginComponent implements OnInit, AfterViewInit {

  // O que falta: fazer o submiti, mensagem de erro caso o email ou a senha não sejam validos
  constructor(private _formBuilder: FormBuilder, private router: Router, public _dialog: MatDialog, private _snackBar: MatSnackBar, private serviceAuth: AuthService) { }

  hide = true;
  formData!: FormGroup;
  dialog: any;

  private createFormData(): FormGroup {
    return this.formData = this._formBuilder.group({
      email: ['', [Validators.email, Validators.required]],
      senha: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
    this.createFormData();
  }

  ngAfterViewInit(): void {
    throw new Error('Method not implemented.');
  }

  public getErrorMessage() {
    if (this.formData.get('email')!.hasError('required')) {
      return 'Você deve inserir um valor';
    }

    return this.formData.get('email')!.hasError('email') ? 'Não é um e-mail válido' : '';
  }

  public getIncorrectData() {
    // if(){

    // }
  }

  public onSubmit(): void {

    this.serviceAuth.authenticate(this.formData.value).subscribe(async resposta => {
      if (this.serviceAuth.isAuthenticated()) {
        this.openDialogSnackBar('Auth');
        this.router.navigate(['home']);
      }
    }, (err: HttpErrorResponse) => {
      if (err.status == 0) {
        this.openDialogSnackBar('Erro de Conexão Com Servidor');
      } else {
        if (this.formData.valid)
          this.openDialogSnackBar('Email e/ou Senha Incorreta');
        else
          this.openDialogSnackBar('Email e/ou Senha Não Informados');
      }
    });
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

  private openDialogSnackBar(message: string): void {
    this._snackBar.open(message, 'Fechar',
      { duration: 2000, verticalPosition: 'top', horizontalPosition: 'right' });
  }


}


