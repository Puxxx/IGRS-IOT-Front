import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {LoginComponent} from './login/login.component';
import {DigitalClockComponent} from './admin/digital-clock/digital-clock.component';

import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {AppComponent} from './app.component';
import {NavbarComponent} from './navbar/navbar.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'timeclock', component: DigitalClockComponent},
  {path: '', component: LoginComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
