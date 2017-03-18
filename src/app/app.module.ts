import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';

import { RouterModule, Routes } from '@angular/router';
import { ChartsModule } from 'ng2-charts';
import { LoginPageComponent } from './login-page/login-page.component';


export const routes: Routes = [
  { path: '',  redirectTo: '/login',  pathMatch: 'full'},
  { path: 'login', component: LoginPageComponent },
  { path: 'home', component: HomePageComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    LoginPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ChartsModule,
    RouterModule.forRoot(routes)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
