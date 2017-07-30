import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { Ng2PageScrollModule } from 'ng2-page-scroll';

import { AppComponent }  from './app.component';
import { MainNavComponent } from './nav/main-nav.component';
import { SubNavComponent } from './nav//sub-nav.component';
import { MainFooterComponent } from './footer/main-footer.component';
import { HomeComponent } from './home/home.component';
import { CesaComponent } from './cesa/cesa.component';
import { ErsComponent } from './ers/ers.component';
import { SavPerspectiveComponent } from './cesa/sav/sav-perspective.component';
import { CmmPerspectiveComponent } from './ers/cmm/cmm-perspective.component';
import { SaPerspectiveComponent } from './ers/sa/sa-perspective.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, data: {animation: 'homePage'} },
  { path: 'cesa', component: CesaComponent, data: {animation: 'cesaPage'} },
  { path: 'ers', component: ErsComponent, data: {animation: 'ersPage'} },
  { path: 'sav-perspective', component: SavPerspectiveComponent, data: {animation: 'savPerspectivePage'} },
  { path: 'cmm-perspective', component: CmmPerspectiveComponent, data: {animation: 'cmmPerspectivePage'} },
  { path: 'sa-perspective', component: SaPerspectiveComponent, data: {animation: 'saPerspectivePage'} }  
];

@NgModule({
  imports:      [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    Ng2PageScrollModule.forRoot()
  ],
  exports: [ RouterModule ],
  declarations: [
    AppComponent,
    MainNavComponent,
    SubNavComponent,
    MainFooterComponent,
    HomeComponent,
    CesaComponent,
    ErsComponent,
    SavPerspectiveComponent,
    CmmPerspectiveComponent,
    SaPerspectiveComponent
  ],
  bootstrap:    [ 
    AppComponent 
  ]
})
export class AppModule { }
