import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/statusbar';
import { Splashscreen } from '@ionic-native/splashscreen';

import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';

import { AngularFire } from 'angularfire2';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any;

  constructor(platform: Platform, public af: AngularFire) {

    af.auth.subscribe( user => {
      if (user) {
        this.rootPage = HomePage;
      } else {
        this.rootPage = LoginPage;
      }
    });

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }
}
