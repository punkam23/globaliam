import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {PermisoService} from '../../_services';

@Component({ templateUrl: 'permiso.component.html', styleUrls: ['permiso.component.css'] })
export class PermisoComponent implements OnInit {
  permisos$: Observable<any>;
  permisosColumns: string[] = ['name', 'description', 'status'];

  constructor(private permisoService: PermisoService) {
  }
  public ngOnInit(): void {
    this.permisos$ = this.permisoService.getPermisos();
  }
}
