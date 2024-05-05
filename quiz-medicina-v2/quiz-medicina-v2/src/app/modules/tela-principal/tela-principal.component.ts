import { Component } from '@angular/core';
import { NewQuizComponent } from './new-quiz/new-quiz.component';
import { MatDialog } from '@angular/material/dialog';
import { CreatQuestionComponent } from './creat-question/creat-question.component';
import { CreatAlternativeComponent } from './creat-alternative/creat-alternative.component';

@Component({
  selector: 'app-tela-principal',
  templateUrl: './tela-principal.component.html',
  styleUrls: ['./tela-principal.component.scss']
})
export class TelaPrincipalComponent {

  constructor(public _dialog: MatDialog){}

  openDialog(): void {
    console.log("Abriu a dialog")
    const dialogRef = this._dialog.open(CreatQuestionComponent, {
    });

    dialogRef.afterClosed().subscribe(() => {
      console.log("fechou")
    });
  }

}
