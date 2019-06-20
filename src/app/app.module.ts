import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { MainPage } from '../pages/main/main';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';

import * as firebase from 'firebase';
import { Class1Provider } from '../providers/class1/class1';
import { GymProvider } from '../providers/gym/gym';

const config = {
  apiKey: "AIzaSyBItvwX-hySStrd5RcSFNSj65F93C3lKaU",
  authDomain: "usersapp-ef773.firebaseapp.com",
  databaseURL: "https://usersapp-ef773.firebaseio.com",
  projectId: "usersapp-ef773",
  storageBucket: "usersapp-ef773.appspot.com",
  messagingSenderId: "826990882984"
};
firebase.initializeApp(config);

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    HomePage,
    TabsPage,
    MainPage,
    LoginPage,
    RegisterPage,
    //ClassDetailsPage,
    //GymDetailsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(config),
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    HomePage,
    TabsPage,
    MainPage,
    LoginPage,
    RegisterPage,
    //ClassDetailsPage,
   // GymDetailsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Class1Provider,
    GymProvider
  ]
})
export class AppModule {}
