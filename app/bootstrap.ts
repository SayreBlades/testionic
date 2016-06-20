import { ionicBootstrap } from 'ionic-angular';
import { provide, enableProdMode } from '@angular/core';
import { MyApp } from './app'
import { HttpClient } from 'marix';
import { JwtService } from './providers/jwt-service';

//enableProdMode();

const httpClient = new HttpClient('https://dev.getmarix.com');

const providers = [
	JwtService,
  provide(HttpClient,{useValue:httpClient})
];

// http://ionicframework.com/docs/v2/api/config/Config/
// http://ionicframework.com/docs/v2/theming/platform-specific-styles/
const config = {
  backButtonText:'',
  backButtonIcon:"ios-arrow-back"
};

ionicBootstrap(MyApp, providers, config);
