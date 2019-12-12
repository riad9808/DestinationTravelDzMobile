import { Component } from '@angular/core';
import * as firebase from 'firebase';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthServiceService } from './service/auth-service.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private auth:AuthServiceService
  ) {
    let firebaseConfig = {
      apiKey: "AIzaSyAhbVbytCt4hVFcaDenSmSRFBy3-Q6bKUY",
      authDomain: "destinationtraveldzmobile.firebaseapp.com",
      databaseURL: "https://destinationtraveldzmobile.firebaseio.com",
      projectId: "destinationtraveldzmobile",
      storageBucket: "destinationtraveldzmobile.appspot.com",
      messagingSenderId: "610039586707",
      appId: "1:610039586707:web:bbab56e69eb14f1a055266",
      measurementId: "G-ZLNL7NC1KX"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
  
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
    //this.auth.createNewUser('riad','123');
  }
}
