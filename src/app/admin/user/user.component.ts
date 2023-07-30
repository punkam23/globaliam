import {Component, OnInit} from '@angular/core';
import {UserService} from '../../_services';
import {Observable} from 'rxjs';

@Component({ templateUrl: 'user.component.html', styleUrls: ['user.component.css'] })
export class UserComponent implements OnInit {
  users$: Observable<any>;
  usersColumns: string[] = ['name', 'sistemas', 'roles', 'email', 'status'];

  constructor(private userService: UserService) {
  }
  public ngOnInit(): void {
    this.users$ = this.userService.getUsers();
  }
}
