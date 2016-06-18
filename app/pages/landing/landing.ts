import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SignInPage } from '../sign-in/sign-in';

@Component({
  templateUrl: 'build/pages/landing/landing.html',
})
export class LandingPage {
  constructor(private nav: NavController) {}

  itemTapped() {
    this.nav.push(SignInPage);
  }
}
