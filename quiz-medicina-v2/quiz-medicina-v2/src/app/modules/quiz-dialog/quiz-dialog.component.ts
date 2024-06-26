import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import { DataUtilsIds } from 'src/app/models/dataUtils';
import { Quiz } from 'src/app/models/quiz';
import { DataUtilsService } from 'src/app/services/dados/dataUtils.service';
import { DialogUtilsService } from 'src/app/services/dialog-utils/dialog-utils.service';
import { QuizService } from 'src/app/services/quiz/quiz.service';

@Component({
  selector: 'app-quiz-dialog',
  templateUrl: './quiz-dialog.component.html',
  styleUrls: ['./quiz-dialog.component.scss']
})
export class QuizDialogComponent {

  @Output() dialogClosed = new EventEmitter<void>();

  color: ThemePalette = "accent";
  formData!: FormGroup;
  dataUtils!: DataUtilsIds;

  constructor(
    private fb: FormBuilder,
    private quizService: QuizService,
    private dataUtilsService: DataUtilsService<DataUtilsIds>,
    private dialogUtils: DialogUtilsService<QuizDialogComponent>
  ) { }

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

  onSubmit(): void{

    const formValues = {
      ...this.formData.value,
      avaliativo: this.formData.value.avaliativo === 'true'
    };

    let quiz = new Quiz(formValues);

    this.quizService.create(quiz).subscribe({
        next: data => {
        if (data.id) {
          this.dialogUtils.closeDialog();
          this.dialogClosed.emit();
        }
      },
      error: error => {
        this.dialogUtils.openDialogSnackBar(error.error.message);
      }}
    );

  }
}

