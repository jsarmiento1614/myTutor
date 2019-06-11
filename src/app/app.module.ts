import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { HeaderComponent } from './header/header.component';
import { DetalleTweetComponent } from './detalle-tweet/detalle-tweet.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
// Modulo para el manejo de rutas
import { RouterModule, Routes } from '@angular/router';
import { AllTweetUserComponent } from './all-tweet-user/all-tweet-user.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { ProfileComponent } from './profile/profile.component';

const appRoutes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'tweet/:id',
    component: DetalleTweetComponent
  },
  {
    path: 'tweet/all/:id',
    component: AllTweetUserComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: '**', component: PageNotFoundComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    HeaderComponent,
    DetalleTweetComponent,
    PageNotFoundComponent,
    AllTweetUserComponent,
    LoginComponent,
    RegisterComponent,
    NotificationsComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes
  )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
