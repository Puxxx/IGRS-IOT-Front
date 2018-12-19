import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';

import {AppRoutingModule} from './app-routing.module';
import {NavbarComponent} from './navbar/navbar.component';
import {SidenavComponent} from './sidenav/sidenav.component';
import {MaterialModule} from './material.module';
import {DialogOverviewComponent, LoginComponent} from './login/login.component';
import {DigitalClockComponent} from './admin/digital-clock/digital-clock.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    NavbarComponent,
    SidenavComponent,
    LoginComponent,
    DigitalClockComponent,
    DialogOverviewComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule,

    AppRoutingModule
  ],
  entryComponents: [
    DialogOverviewComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

