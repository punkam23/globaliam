import { BrowserModule } from '@angular/platform-browser';
import {APP_INITIALIZER, NgModule} from '@angular/core';

import { AppComponent } from './app.component';
import {HomeComponent} from './home';
import {AppRoutingModule} from './app-routing.module';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import {fakeBackendProvider} from './_helpers';
import {ErrorInterceptor, JwtInterceptor} from './_helpers';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { RouterModule } from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {InitialPageComponent} from './initial-page';
import {AlertComponent} from './_alert';
import {AplicacionService} from './_services';

export function loadDataFactory(dataService: AplicacionService) {
  return () => dataService.initAplicaciones();
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InitialPageComponent,
    AlertComponent,
  ],
  imports: [
    RouterModule,
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatSidenavModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    AplicacionService,
    {
      provide: APP_INITIALIZER,
      useFactory: loadDataFactory,
      deps: [AplicacionService],
      multi: true
    },
    // provider used to create fake backend
    fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
