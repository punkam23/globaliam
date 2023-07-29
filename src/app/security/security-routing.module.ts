import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {LayoutComponent} from './layout/layout.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {ForgotpassComponent} from './forgotpass/forgotpass.component';

const routes: Routes = [
  {
    path: '', component: LayoutComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'forgotpass', component: ForgotpassComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecurityRoutingModule { }
