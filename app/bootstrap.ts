import { ionicBootstrap } from 'ionic-angular';
import { provide, enableProdMode } from '@angular/core';
import { MyApp } from './app'
import { HttpClient } from 'marix';
import { JwtService } from './providers/jwt-service';
import * as config from './config';

//enableProdMode();

const httpClient = new HttpClient('https://dev.getmarix.com');
const jwtService = new JwtService(config.localStorageJwtKey);

const providers = [
  provide(JwtService,{useValue:jwtService}),
  provide(HttpClient,{useValue:httpClient})
];

// http://ionicframework.com/docs/v2/api/config/Config/
// http://ionicframework.com/docs/v2/theming/platform-specific-styles/
const ionicConfig = {
  backButtonText:'',
  backButtonIcon:"ios-arrow-back"
};

ionicBootstrap(MyApp, providers, ionicConfig);
