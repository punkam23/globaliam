import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home';
import {AuthGuard} from './_helpers';
import {InitialPageComponent} from './initial-page';

const securityModule = () => import('./security/security.module').then(x => x.SecurityModule);
const adminModule = () => import('./admin/admin.module').then(x => x.AdminModule);

const routes: Routes = [
  {path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
  {path: 'admin', loadChildren: adminModule, canActivate: [AuthGuard]},
  {path: 'security', loadChildren: securityModule},
  {path: '', component: InitialPageComponent},
  // otherwise redirect to home
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
