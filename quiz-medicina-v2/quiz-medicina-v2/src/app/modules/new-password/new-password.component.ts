import { Component, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-password',
  templateUrl: './new-password.component.html',
  styleUrls: ['./new-password.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NewPasswordComponent {
  hide = true;
  formData!: FormGroup;

  constructor(private _formBuilder: FormBuilder){}

  private createFormData(): FormGroup {
    return this.formData = this._formBuilder.group({
      senha: ['', [Validators.required]],
      confirmarSenha: ['', [Validators.required]]
    });
  }

  //criar função 

  ngOnInit(): void {
    this.createFormData();
  }

}
