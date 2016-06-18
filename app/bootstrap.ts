import { ionicBootstrap } from 'ionic-angular';
import { provide, enableProdMode } from '@angular/core';
import { MyApp } from './app'
import { HttpClient } from 'marix';

enableProdMode();
const httpClient = new HttpClient('https://dev.getmarix.com');
ionicBootstrap(MyApp, [
  provide(HttpClient,{useValue:httpClient})
]);
