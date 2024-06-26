import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { DataUtilsIds } from 'src/app/models/dataUtils';
import { DataUtilsService } from 'src/app/services/dados/dataUtils.service';
import { DialogUtilsService } from 'src/app/services/dialog-utils/dialog-utils.service';


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
  @Input() component!: any;
  @Input() onDialogClosed!: () => void;

  skip: number = 0;
  @Input() take!: number;

  constructor(
    protected router: Router,
    protected dataUtilsService: DataUtilsService<DataUtilsIds>,
    protected dialogUtils: DialogUtilsService<any>
  ) {}

  openDialog() {
    const dialogRef = this.dialogUtils.openDialog(this.component);

    dialogRef.componentInstance.dialogClosed.subscribe(() => {
      this.onDialogClosed();
    });
  }

}
