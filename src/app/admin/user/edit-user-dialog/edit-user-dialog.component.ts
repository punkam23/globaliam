import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {UserInterface} from '../user.interface';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AccountService, UserService} from '../../../_services';
import {User} from "../../../_models";

@Component({
  selector: 'app-edit-user-diaglog',
  templateUrl: 'edit-user-dialog.component.html',
  styleUrls: ['edit-user-dialog.component.css']
})
export class EditUserDialogComponent {
  name = new FormControl(this.data.name, []);
  apellidos = new FormControl(this.data.apellidos, []);
  email = new FormControl(this.data.email, [Validators.required, Validators.email]);
  constructor(public dialogRef: MatDialogRef<EditUserDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: UserInterface,
              public userService: AccountService) {}
  public onNoClick(): void {
    this.dialogRef.close();
  }

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'Introduzca un correo electronico';
    }

    return this.email.hasError('email') ? 'Correo electronico invalido' : '';
  }

  public onSave() {
    const user: User = {
      firstName: this.name.value,
      lastName: this.apellidos.value,
      username: this.email.value,
    };
    this.userService.update(this.data.id, user);
    this.dialogRef.close();
  }
}
