import { Component, ViewEncapsulation } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AlternativeComponent } from '../alternative/alternative.component';


@Component({
  selector: 'app-creat-alternative',
  templateUrl: './creat-alternative.component.html',
  styleUrls: ['./creat-alternative.component.scss'],
  encapsulation: ViewEncapsulation.None

})
export class CreatAlternativeComponent {
  private _formBuilder: any;
  formData: any;

  constructor(public _dialog: MatDialog){  }

  dialog: any;

  private createFormData(): FormGroup {
    return this.formData = this._formBuilder.group({
      imagem: ['', [Validators.required]],
      titulo: ['', [Validators.required]],
      // senha: ['', [Validators.required]],
    });
  }

  onSubmit(){
    
  }

  openDialog(): void {
    const dialogRef = this._dialog.open(AlternativeComponent, {
    });

    dialogRef.afterClosed().subscribe(() => {
      console.log("fechou")
    });
  }
}
