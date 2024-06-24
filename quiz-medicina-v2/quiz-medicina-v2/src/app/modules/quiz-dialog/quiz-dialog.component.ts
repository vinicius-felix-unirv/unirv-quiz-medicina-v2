import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import { MatDialogRef } from '@angular/material/dialog';
import { DataUtilsIds } from 'src/app/models/dataUtils';
import { Quiz } from 'src/app/models/quiz';
import { DataUtilsService } from 'src/app/services/dados/dataUtils.service';
import { QuizService } from 'src/app/services/quiz/quiz.service';

@Component({
  selector: 'app-quiz-dialog',
  templateUrl: './quiz-dialog.component.html',
  styleUrls: ['./quiz-dialog.component.scss']
})
export class QuizDialogComponent {

  color: ThemePalette = "accent";
  formData!: FormGroup;
  dataUtils!: DataUtilsIds;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<QuizDialogComponent>,
    private quizService: QuizService,
    private dataUtilsService: DataUtilsService<DataUtilsIds>
  ) {}

  private createFormData(): FormGroup {
    return this.formData = this.fb.group({
      imagem: ['/teste', []],
      titulo: ['', [Validators.required]],
      avaliativo: ['', [Validators.required]],
      usuarioid: [ this.dataUtils.usuarioId],
      cursoid: [ this.dataUtils.cursoId]
    });
  }

  ngOnInit(): void {
    this.dataUtilsService.getData().subscribe(data => this.dataUtils = data!);
    this.createFormData();
  }

  closeDialog(): void {
    this.dialogRef.close();
  }

  onSubmit(): void{
    let quiz = new Quiz(this.formData.value);
    console.log(quiz);
    // this.quizService.create(quiz);
    this.dialogRef.close(this.formData.value);
  }
}

