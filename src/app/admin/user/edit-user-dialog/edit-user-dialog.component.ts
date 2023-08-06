import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {UserInterface} from '../user.interface';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AccountService, RolService, UserService} from '../../../_services';
import {User} from '../../../_models';
import {RolInterface} from '../../rol/rol.interface';

@Component({
  selector: 'app-edit-user-diaglog',
  templateUrl: 'edit-user-dialog.component.html',
  styleUrls: ['edit-user-dialog.component.css']
})
export class EditUserDialogComponent {
  name = new FormControl(this.data.name, []);
  apellidos = new FormControl(this.data.apellidos, []);
  email = new FormControl(this.data.email, [Validators.required, Validators.email]);
  autenticacion = new FormControl(this.data.autenticacion, []);
  estado = new FormControl(this.data.status, []);
  roles = new FormControl('');
  userValue = {...this.data};
  listaRoles: string [] = [];
  constructor(public dialogRef: MatDialogRef<EditUserDialogComponent>,
              public rolService: RolService,
              @Inject(MAT_DIALOG_DATA) public data: UserInterface,
              public userService: AccountService) {
    this.rolService.getRoles().subscribe(rolesRes => {
      this.listaRoles = rolesRes.map((rol: RolInterface) => {
        return rol.name;
      });
    });
    if (this.data.roles) {
      this.roles.patchValue(this.data.roles);
    }
  }
  public onNoClick(): void {
    this.dialogRef.close();
  }

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'Introduzca un correo electronico';
    }

    return this.email.hasError('email') ? 'Correo electrónico invalido' : '';
  }

  public onSave() {
    const user: User = {
      firstName: this.name.value,
      lastName: this.apellidos.value,
      username: this.email.value,
      autenticacion: this.autenticacion.value,
      roles: this.roles.value,
      state: this.estado.value,
    };
    this.userService.update(this.data.id, user);
    this.dialogRef.close();
  }
}
