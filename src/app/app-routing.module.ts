import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home';
import {AuthGuard} from './_helpers';

const securityModule = () => import('./security/security.module').then(x => x.SecurityModule);

const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  // { path: 'users', loadChildren: usersModule, canActivate: [AuthGuard] },
  { path: 'security', loadChildren: securityModule },

  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
