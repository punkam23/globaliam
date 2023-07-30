import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AdminLayoutComponent} from './layout/admin-layout.component';
import {UserComponent} from './user/user.component';
import {RolComponent} from './rol/rol.component';
import {AplicacionComponent} from './aplicacion/aplicacion.component';
import {PermisoComponent} from './permiso/permiso.component';

const routes: Routes = [
  {
    path: '', component: AdminLayoutComponent,
    children: [
      { path: 'users', component: UserComponent },
      { path: 'roles', component: RolComponent },
      { path: 'aplicaciones', component: AplicacionComponent },
      { path: 'permisos', component: PermisoComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
