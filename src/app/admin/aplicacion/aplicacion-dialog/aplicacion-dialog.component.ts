import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {AplicacionInterface} from '../aplicacion.interface';
import {User} from "../../../_models";
import {AplicacionService} from "../../../_services";

@Component({
  selector: 'app-aplicacion-diaglog',
  templateUrl: 'aplicacion-dialog.component.html',
  styleUrls: ['aplicacion-dialog.component.css']
})
export class AplicacionDialogComponent {
  constructor(private aplicacionService: AplicacionService, public dialogRef: MatDialogRef<AplicacionDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: AplicacionInterface) {}
  public onNoClick(): void {
    this.dialogRef.close();
  }

  onDelete() {
    const aplicacion: AplicacionInterface = {
      status: 'inactivo',
    };
    this.aplicacionService.update(this.data.id, aplicacion);
    this.dialogRef.close();
  }
}
