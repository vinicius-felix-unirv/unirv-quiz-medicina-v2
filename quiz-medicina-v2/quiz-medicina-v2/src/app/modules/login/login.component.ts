import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ResetPasswordDialogComponent } from './reset-password-dialog/reset-password-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from 'src/app/security/auth.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { DataUtilsService } from 'src/app/services/dados/dataUtils.service';
import { DataUtilsIds } from 'src/app/models/dataUtils';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';
import { DialogUtilsService } from 'src/app/services/dialog-utils/dialog-utils.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class LoginComponent implements OnInit {

  constructor(
    private _formBuilder: FormBuilder,
    private router: Router,
    public _dialog: MatDialog,
    private serviceAuth: AuthService,
    private dataUtilsService: DataUtilsService<DataUtilsIds>,
    private dialogUtilsService: DialogUtilsService<ResetPasswordDialogComponent>,
    private usuariosService: UsuarioService
  ) { }

  hide = true;
  formData!: FormGroup;
  dialog: any;

  togglePasswordVisibility(event: MouseEvent) {
    event.preventDefault(); 
    this.hide = !this.hide;  
  }

  private createFormData(): FormGroup {
    return this.formData = this._formBuilder.group({
      email: ['', [Validators.email, Validators.required]],
      senha: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
    this.createFormData();
  }

  public getErrorMessage(): String {
    if (this.formData.get('email')!.hasError('required')) {
      return 'Você deve inserir um valor';
    }

    return this.formData.get('email')!.hasError('email') ? 'Não é um e-mail válido' : '';
  }

  public onSubmit(): void {

    this.serviceAuth.authenticate(this.formData.value).subscribe(async resposta => {
      if (this.serviceAuth.isAuthenticated()) {
 
        let data =  new DataUtilsIds;
        data.usuarioId = parseInt(this.serviceAuth.returnUserId()!);
        this.usuariosService.findById(data.usuarioId).subscribe( user => {
          data.cursoId = user.cursoid;
          this.dataUtilsService.sendData(data);
        });
        this.router.navigate(['home/quiz-screen']);
      }
    }, (err: HttpErrorResponse) => {
      if (err.status == 0) {
        this.dialogUtilsService.openDialogSnackBar('Erro de Conexão Com Servidor');
      } else {
        if (this.formData.valid)
          this.dialogUtilsService.openDialogSnackBar('Email e/ou Senha Incorreta');
        else
          this.dialogUtilsService.openDialogSnackBar('Email e/ou Senha Não Informados');
      }
    });
  }

  openDialog(): void {
    this.dialogUtilsService.openDialog(ResetPasswordDialogComponent);
  }

  redirect(): void{
    this.router.navigate(['inscricao']);
  }
}


