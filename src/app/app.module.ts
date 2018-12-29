import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

// necessary module.
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {OverlayContainer} from '@angular/cdk/overlay';
import {CustomOverlayContainer} from './theme/utils/custom-overlay-container';
import {SharedModule} from './shared/shared.module';
import {PipesModule} from './theme/pipes/pipes.module';

import {AppComponent} from './app.component';
import {PageNotFoundComponent} from './pages/errors/page-not-found/page-not-found.component';
import {DialogOverviewComponent, LoginComponent} from './pages/login-new/login.component';

// adding ngx-perfect-scrollbar.
import {PerfectScrollbarModule} from 'ngx-perfect-scrollbar';
import {PERFECT_SCROLLBAR_CONFIG} from 'ngx-perfect-scrollbar';
import {PerfectScrollbarConfigInterface} from 'ngx-perfect-scrollbar';
const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  wheelPropagation: true,
  suppressScrollX: true
};

import {AdminModule} from './admin/admin.module';
import {AppSettings} from './app.settings';
import {AppRoutingModule} from './app-routing.module';

import {PagesComponent} from './pages/pages.component';
import {BlankComponent} from './pages/blank/blank.component';
import {SearchComponent} from './pages/search/search.component';
import {NotFoundComponent} from './pages/errors/not-found/not-found.component';
import {ErrorComponent} from './pages/errors/error/error.component';

import {TopInfoContentComponent} from './theme/components/top-info-content/top-info-content.component';
import {SidenavComponent} from './theme/components/sidenav/sidenav.component';
import {VerticalMenuComponent} from './theme/components/menu/vertical-menu/vertical-menu.component';
import {HorizontalMenuComponent} from './theme/components/menu/horizontal-menu/horizontal-menu.component';
import {FlagsMenuComponent} from './theme/components/flags-menu/flags-menu.component';
import {FullScreenComponent} from './theme/components/fullscreen/fullscreen.component';
import {ApplicationsComponent} from './theme/components/applications/applications.component';
import {MessagesComponent} from './theme/components/messages/messages.component';
import {UserMenuComponent} from './theme/components/user-menu/user-menu.component';
import {FavoritesComponent} from './theme/components/favorites/favorites.component';


@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,

    // Include Material UI interface,pipes
    SharedModule,
    PipesModule,

    // 3rd interface
    PerfectScrollbarModule,

    // routes setting
    AdminModule,
    AppRoutingModule,


  ],
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    LoginComponent,
    DialogOverviewComponent,

    AppComponent,
    PagesComponent,
    BlankComponent,
    SearchComponent,
    NotFoundComponent,
    ErrorComponent,
    TopInfoContentComponent,
    SidenavComponent,
    VerticalMenuComponent,
    HorizontalMenuComponent,
    FlagsMenuComponent,
    FullScreenComponent,
    ApplicationsComponent,
    MessagesComponent,
    UserMenuComponent,
    FavoritesComponent,
  ],
  entryComponents: [
    DialogOverviewComponent
  ],
  providers: [
    AppSettings,
    {provide: PERFECT_SCROLLBAR_CONFIG, useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG},
    {provide: OverlayContainer, useClass: CustomOverlayContainer}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

