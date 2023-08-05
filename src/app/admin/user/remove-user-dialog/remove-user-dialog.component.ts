import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {UserInterface} from '../user.interface';
import {User} from '../../../_models';
import {AccountService} from '../../../_services';

@Component({
  selector: 'app-remove-user-diaglog',
  templateUrl: 'remove-user-dialog.component.html',
  styleUrls: ['remove-user-dialog.component.css']
})
export class RemoveUserDialogComponent {
  constructor(public dialogRef: MatDialogRef<RemoveUserDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: UserInterface,
              public userService: AccountService) {}
  public onNoClick(): void {
    this.dialogRef.close();
  }

  public onDelete() {
    const user: User = {
      state: 'inactivo',
    };
    this.userService.update(this.data.id, user);
    this.dialogRef.close();
  }
}
