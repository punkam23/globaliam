import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {AplicacionInterface} from '../aplicacion.interface';

@Component({
  selector: 'app-aplicacion-diaglog',
  templateUrl: 'aplicacion-dialog.component.html',
  styleUrls: ['aplicacion-dialog.component.css']
})
export class AplicacionDialogComponent {
  constructor(public dialogRef: MatDialogRef<AplicacionDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: AplicacionInterface) {}
  public onNoClick(): void {
    this.dialogRef.close();
  }
}
