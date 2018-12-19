import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AdminComponent} from './admin.component';
import {LoginComponent} from '../login/login.component';
import {AppComponent} from '../app.component';

import {DigitalClockComponent} from './digital-clock/digital-clock.component';
import {AdminRoutingModule} from './admin-routing.module';
import {PageNotFoundComponent} from '../page-not-found/page-not-found.component';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  declarations: [
    AdminComponent,
    LoginComponent,
    DigitalClockComponent,
    AppComponent,
    PageNotFoundComponent
  ]
})
export class AdminModule {
}
