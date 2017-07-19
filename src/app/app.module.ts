import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { Ng2PageScrollModule } from 'ng2-page-scroll';

import { AppComponent }  from './app.component';
import { MainNavComponent } from './nav/main-nav.component';
import { MainFooterComponent } from './footer/main-footer.component';
import { HomeComponent } from './home/home.component';
import { CesaComponent } from './cesa/cesa.component';
import { ErsComponent } from './ers/ers.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home',  component: HomeComponent, data: {animation: 'homePage'} },
  { path: 'cesa',  component: CesaComponent, data: {animation: 'cesaPage'} },
  { path: 'ers',     component: ErsComponent, data: {animation: 'ersPage'} }
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
    MainFooterComponent,
    HomeComponent,
    CesaComponent,
    ErsComponent
  ],
  bootstrap:    [ 
    AppComponent 
  ]
})
export class AppModule { }
