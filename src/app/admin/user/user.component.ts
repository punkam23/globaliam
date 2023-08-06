import {Component, OnInit} from '@angular/core';
import {UserService} from '../../_services';
import {Observable} from 'rxjs';
import {MatDialog} from '@angular/material/dialog';
import {RemoveUserDialogComponent} from './remove-user-dialog/remove-user-dialog.component';
import {EditUserDialogComponent} from './edit-user-dialog/edit-user-dialog.component';

@Component({ templateUrl: 'user.component.html', styleUrls: ['user.component.css'] })
export class UserComponent implements OnInit {
  users$: Observable<any>;
  usersColumns: string[] = ['name', 'apellidos', 'roles', 'email', 'autenticacion', 'status', 'actions'];

  constructor(private userService: UserService, public dialog: MatDialog) {
  }
  public ngOnInit(): void {
    this.users$ = this.userService.getAll();
  }

  public openEditDialog(user) {
    const dialogRef = this.dialog.open(EditUserDialogComponent, {
      width: '350px',
      ariaLabel: 'Edición de Usuario',
      data: user,
    });

    dialogRef.afterClosed().subscribe(() => {
      this.users$ = this.userService.getAll();
    });
  }

  public openDeleteDialog(user) {
    const dialogRef = this.dialog.open(RemoveUserDialogComponent, {
      width: '250px',
      ariaLabel: 'Eliminación de Usuario',
      data: user,
    });

    dialogRef.afterClosed().subscribe(() => {
      this.users$ = this.userService.getAll();
    });
  }

  getAutenticacion(user): string {
    enum AutenticacionEnum {
      'Biometría' = 'bio',
      'Doble Factor de autenticación' = 'mfa',
      'OTP SMS' = 'otp',
    }
    const indexOfS = Object.values(AutenticacionEnum)
        .indexOf(user.autenticacion as unknown as AutenticacionEnum);
    const key = Object.keys(AutenticacionEnum)[indexOfS];
    return key;
  }

  getEstado(user) {
    enum EstadoEnum {
      'Activo' = 'activo',
      'Inactivo' = 'inactivo',
    }
    const indexOfS = Object.values(EstadoEnum)
        .indexOf(user.status as unknown as EstadoEnum);
    const key = Object.keys(EstadoEnum)[indexOfS];
    return key;
  }
}
