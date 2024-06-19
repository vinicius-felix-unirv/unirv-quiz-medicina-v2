import { Component, Input } from '@angular/core';
import {  Router } from '@angular/router';
import { DataUtilsIds } from 'src/app/models/dataUtils';
import { DataUtilsService } from 'src/app/services/dados/dataUtils.service';


@Component({
  selector: 'app-categoria-quiz-base',
  templateUrl: './categoria-quiz-base.component.html',
  styleUrls: ['./categoria-quiz-base.component.scss']
})
export class CategoriaQuizBaseComponent {

  @Input() Titulo!: string;
  @Input() typeClass!: any;
  @Input() dataToView!: any[];

  @Input() redirect!: (id: number) => void;
  @Input() dataUtils!: DataUtilsIds;

  constructor(
    protected router: Router,
    protected dataUtilsService: DataUtilsService<DataUtilsIds>
  ) { }
}
