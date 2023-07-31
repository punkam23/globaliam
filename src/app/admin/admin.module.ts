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

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AdminRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatTableModule,
    MatDialogModule
  ],
  declarations: [
    AdminLayoutComponent,
    UserComponent,
    RolComponent,
    AplicacionComponent,
    PermisoComponent,
    AplicacionDialogComponent
  ],
  entryComponents: [AplicacionDialogComponent]
})
export class AdminModule { }
