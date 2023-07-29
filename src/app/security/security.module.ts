import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {LayoutComponent} from './layout/layout.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {SecurityRoutingModule} from './security-routing.module';
import { ForgotpassComponent } from './forgotpass/forgotpass.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SecurityRoutingModule
  ],
  declarations: [
    LayoutComponent,
    LoginComponent,
    RegisterComponent,
    ForgotpassComponent
  ]
})
export class SecurityModule { }
