import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {RolService} from '../../_services';

@Component({ templateUrl: 'rol.component.html', styleUrls: ['rol.component.css'] })
export class RolComponent implements OnInit {
  roles$: Observable<any>;
  rolesColumns: string[] = ['name', 'role', 'email', 'sistema', 'status'];

  constructor(private rolService: RolService) {
  }
  public ngOnInit(): void {
    this.roles$ = this.rolService.getRoles();
  }
}
