import { Component, ViewEncapsulation } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-creat-alternative',
  templateUrl: './creat-alternative.component.html',
  styleUrls: ['./creat-alternative.component.scss'],
  encapsulation: ViewEncapsulation.None

})
export class CreatAlternativeComponent {
  private _formBuilder: any;
  formData: any;

  private createFormData(): FormGroup {
    return this.formData = this._formBuilder.group({
      imagem: ['', [Validators.required]],
      titulo: ['', [Validators.required]],
      // senha: ['', [Validators.required]],
    });
  }

  onSubmit(){
    
  }
}
