import {Component, OnInit} from '@angular/core';
import {UserService} from '../../_services';
import {Observable} from 'rxjs';
import {MatDialog} from '@angular/material/dialog';
import {RemoveUserDialogComponent} from './remove-user-dialog/remove-user-dialog.component';
import {EditUserDialogComponent} from './edit-user-dialog/edit-user-dialog.component';
import {map} from "rxjs/operators";

@Component({ templateUrl: 'user.component.html', styleUrls: ['user.component.css'] })
export class UserComponent implements OnInit {
  users$: Observable<any>;
  usersColumns: string[] = ['name', 'apellidos', 'sistemas', 'roles', 'email', 'autenticacion', 'status', 'actions'];

  constructor(private userService: UserService, public dialog: MatDialog) {
  }
  public ngOnInit(): void {
    this.users$ = this.userService.getAll();
  }

  public openEditDialog(user) {
    const dialogRef = this.dialog.open(EditUserDialogComponent, {
      width: '250px',
      data: user,
    });

    dialogRef.afterClosed().subscribe(() => {
      this.users$ = this.userService.getAll();
    });
  }

  public openDeleteDialog(user) {
    const dialogRef = this.dialog.open(RemoveUserDialogComponent, {
      width: '250px',
      data: user,
    });

    dialogRef.afterClosed().subscribe(() => {
      this.users$ = this.userService.getAll();
    });
  }
}
