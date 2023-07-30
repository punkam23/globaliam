import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {AplicacionService} from '../../_services';

@Component({ templateUrl: 'aplicacion.component.html', styleUrls: ['aplicacion.component.css'] })
export class AplicacionComponent implements OnInit {
  aplicaciones$: Observable<any>;
  aplicacionesColumns: string[] = ['name', 'description', 'status', 'roles'];

  constructor(private aplicacionService: AplicacionService) {
  }
  public ngOnInit(): void {
    this.aplicaciones$ = this.aplicacionService.getAplicaciones();
  }
}
