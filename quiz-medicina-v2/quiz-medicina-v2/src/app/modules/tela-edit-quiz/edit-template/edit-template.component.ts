import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { DataUtilsIds } from 'src/app/models/dataUtils';
import { DataUtilsService } from 'src/app/services/dados/dataUtils.service';

@Component({
  selector: 'app-edit-template',
  templateUrl: './edit-template.component.html',
  styleUrls: ['./edit-template.component.scss']
})
export class EditTemplateComponent {

  @Input() dataForEdit: any;
  @Input() titulo!: string;
  @Input() redirect!: (id: number) => void;
  @Input() goBack!: () => void;
  @Input() dataUtils!: DataUtilsIds;

  skip: number = 0;
  @Input() take!: number;

  constructor(
    protected router: Router,
    protected dataUtilsService: DataUtilsService<DataUtilsIds>
  ) { }

}
