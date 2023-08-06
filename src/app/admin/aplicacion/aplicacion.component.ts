import {Component, OnInit, ViewChild} from '@angular/core';
import {Observable} from 'rxjs';
import {AplicacionService} from '../../_services';
import {MatDialog} from '@angular/material/dialog';
import {AplicacionDialogComponent} from './aplicacion-dialog/aplicacion-dialog.component';
import {MatTable} from '@angular/material/table';
import {AplicacionInterface} from './aplicacion.interface';
import {map} from 'rxjs/operators';

@Component({ templateUrl: 'aplicacion.component.html', styleUrls: ['aplicacion.component.css'] })
export class AplicacionComponent implements OnInit {
  aplicaciones$: Observable<any>;
  aplicacionesColumns: string[] = ['name', 'description', 'status', 'roles', 'actions'];

  @ViewChild(MatTable, {static: false }) table: MatTable<AplicacionInterface>;
  constructor(private aplicacionService: AplicacionService, public dialog: MatDialog) {
  }
  public ngOnInit(): void {
    this.aplicaciones$ = this.aplicacionService.getAplicaciones();
  }

  public openDialog(aplicacion: any): void {
    const dialogRef = this.dialog.open(AplicacionDialogComponent, {
      width: '250px',
      ariaLabel: 'Eliminación de Sistema',
      data: aplicacion,
    });

    dialogRef.afterClosed().subscribe(result => {
      this.aplicaciones$ = this.aplicacionService.getAplicaciones();
      // if (result) {
      //   this.aplicaciones$ = this.aplicacionService.getAplicaciones().pipe(map((value) => {
      //     const newvalue = value.filter(value2 => {
      //       return value2.id !== result;
      //     });
      //     return newvalue;
      //   }));
      //   this.table.renderRows();
      // }
    });
  }

  getEstado(aplicacion) {
    enum EstadoEnum {
      'Activo' = 'activo',
      'Inactivo' = 'inactivo',
    }
    const indexOfS = Object.values(EstadoEnum)
      .indexOf(aplicacion.status as unknown as EstadoEnum);
    const key = Object.keys(EstadoEnum)[indexOfS];
    return key;
  }
}


