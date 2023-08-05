import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {AdminLayoutComponent} from './layout/admin-layout.component';
import {AdminRoutingModule} from './admin-routing.module';
import {UserComponent} from './user/user.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {RolComponent} from './rol/rol.component';
import {AplicacionComponent} from './aplicacion/aplicacion.component';
import {PermisoComponent} from './permiso/permiso.component';
import {AplicacionDialogComponent} from './aplicacion/aplicacion-dialog/aplicacion-dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import {RemoveUserDialogComponent} from './user/remove-user-dialog/remove-user-dialog.component';
import {EditUserDialogComponent} from './user/edit-user-dialog/edit-user-dialog.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AdminRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatTableModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
  ],
  declarations: [
    AdminLayoutComponent,
    UserComponent,
    RolComponent,
    AplicacionComponent,
    PermisoComponent,
    AplicacionDialogComponent,
    RemoveUserDialogComponent,
    EditUserDialogComponent
  ],
  entryComponents: [AplicacionDialogComponent, RemoveUserDialogComponent, EditUserDialogComponent]
})
export class AdminModule { }
