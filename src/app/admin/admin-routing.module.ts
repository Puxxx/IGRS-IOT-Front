import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AppComponent} from '../app.component';

import {AdminComponent} from './admin/admin.component';
import {LoginComponent} from '../pages/login-new/login.component';
import {DigitalClockComponent} from './digital-clock/digital-clock.component';

const adminRoutes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      {
        path: '',
        children: [
          {path: 'login', component: LoginComponent},
          {path: 'timeclock', component: DigitalClockComponent},
          {path: '', component: AppComponent}
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(adminRoutes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {
}
