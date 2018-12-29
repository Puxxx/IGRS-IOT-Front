import {Routes, RouterModule, PreloadAllModules} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';

import {PagesComponent} from './pages/pages.component';
import {BlankComponent} from './pages/blank/blank.component';
import {SearchComponent} from './pages/search/search.component';
import {ErrorComponent} from './pages/errors/error/error.component';
// import {NotFoundComponent} from './pages/errors/not-found/not-found.component';
import {PageNotFoundComponent} from './pages/errors/page-not-found/page-not-found.component';

export const approutes: Routes = [
  {
    path: '',
    component: PagesComponent, children: [
      {path: '', loadChildren: './pages/auto-control/auto-control.module#AutoControlModule', data: {breadcrumb: 'AutoControl'}},
      {path: 'dashboard', loadChildren: './pages/dashboard/dashboard.module#DashboardModule', data: {breadcrumb: 'Dashboard'}},
      {path: 'users', loadChildren: './pages/users/users.module#UsersModule', data: {breadcrumb: 'Users'}},
      {
        path: 'dynamic-menu',
        loadChildren: './pages/dynamic-menu/dynamic-menu.module#DynamicMenuModule',
        data: {breadcrumb: 'Dynamic Menu'}
      },
      {path: 'ui', loadChildren: './pages/ui/ui.module#UiModule', data: {breadcrumb: 'UI'}},
      {path: 'mailbox', loadChildren: './pages/mailbox/mailbox.module#MailboxModule', data: {breadcrumb: 'Mailbox'}},
      {path: 'chat', loadChildren: './pages/chat/chat.module#ChatModule', data: {breadcrumb: 'Chat'}},
      {
        path: 'form-controls',
        loadChildren: './pages/form-controls/form-controls.module#FormControlsModule',
        data: {breadcrumb: 'Form Controls'}
      },
      {path: 'tables', loadChildren: './pages/tables/tables.module#TablesModule', data: {breadcrumb: 'Tables'}},
      {path: 'charts', loadChildren: './pages/charts/charts.module#ChartsModule', data: {breadcrumb: 'Charts'}},
      {path: 'drag-drop', loadChildren: './pages/drag-drop/drag-drop.module#DragDropModule', data: {breadcrumb: 'Drag & Drop'}},
      {path: 'icons', loadChildren: './pages/icons/icons.module#IconsModule', data: {breadcrumb: 'Material Icons'}},
      {path: 'blank', component: BlankComponent, data: {breadcrumb: 'Blank page'}},
      {path: 'search', component: SearchComponent, data: {breadcrumb: 'Search'}},
      {path: 'search/:name', component: SearchComponent, data: {breadcrumb: 'Search'}}
    ]
  },
  {path: 'login', loadChildren: './pages/login/login.module#LoginModule'},
  {path: 'register', loadChildren: './pages/register/register.module#RegisterModule'},
  {path: 'error', component: ErrorComponent, data: {breadcrumb: 'Error'}},
  // {path: '**', component: NotFoundComponent},
  {path: '**', component: PageNotFoundComponent},
];

export const AppRoutingModule: ModuleWithProviders = RouterModule.forRoot(approutes, {
  preloadingStrategy: PreloadAllModules,  // <- comment this line for activate lazy load
  // useHash: true
});
