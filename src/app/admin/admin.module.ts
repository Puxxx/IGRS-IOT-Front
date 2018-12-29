import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AdminComponent} from './admin/admin.component';

import {DigitalClockComponent} from './digital-clock/digital-clock.component';
import {AdminRoutingModule} from './admin-routing.module';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  declarations: [
    AdminComponent,
    DigitalClockComponent,
  ]
})
export class AdminModule {
}
