import { ionicBootstrap } from 'ionic-angular';
import { provide, enableProdMode } from '@angular/core';
import { MyApp } from './app'
import { HttpClient } from 'marix';
import { JwtService } from './providers/jwt-service';

enableProdMode();
const httpClient = new HttpClient('https://dev.getmarix.com');
ionicBootstrap(MyApp, [
	JwtService,
  provide(HttpClient,{useValue:httpClient})
]);
