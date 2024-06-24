import { ComponentType } from '@angular/cdk/portal';
import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class DialogUtilsService<T> {

  dialogRef!: MatDialogRef<T>;

  constructor(
    private snackBar: MatSnackBar,
    private dialog: MatDialog
  ) { }

  closeDialog(): void {
    this.dialogRef.close();
  }

  openDialogSnackBar(message: string): void {
    this.snackBar.open(message, 'Fechar',
      { duration: 5000, verticalPosition: 'top', horizontalPosition: 'right' });
  }

  openDialog(component: ComponentType<T>) {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = false;

    this.dialogRef = this.dialog.open(component, dialogConfig);

  }
}
