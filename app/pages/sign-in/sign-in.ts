import { Component } from '@angular/core';
import { FORM_PROVIDERS, FORM_DIRECTIVES } from '@angular/common';
import { NavController, Popover, Loading, Alert } from 'ionic-angular';
import { HelloIonicPage } from '../hello-ionic';
import { JwtService } from '../../providers/jwt-service';
import { EmailValidator } from '../../components/email-validator';
import { HttpClient } from 'marix';
import { fromJQueryPromise, delayPromise } from '../../utils/promise-utils';

interface Login {
	email:string,
	password:string
}

@Component({
  templateUrl: 'build/pages/sign-in/sign-in.html',
  directives: [ FORM_DIRECTIVES, EmailValidator ],
  providers: [ FORM_PROVIDERS ]
})
export class SignInPage {

  constructor(
		private jwt: JwtService,
		private nav: NavController,
    private httpClient: HttpClient
	) {}

	private login:Login = {
		email:null,
		password:null
	};

  active = true;
  displayErrorText = "";

  signIn() {
    console.info('signing in');
		let loading = Loading.create({ content: 'logging into marix...' });
		this.nav.present(loading);

    // kick off login request
    let loginRequest = this.httpClient.login(this.login.email, this.login.password);

    // login promise chain
		delayPromise(500) // make sure the spinner is up for at least 500 millis
			.then(() => fromJQueryPromise(loginRequest))
      .then(() => {
        loading.dismiss();
        this.nav.setRoot(HelloIonicPage);
      })
      .catch((error)=> {
        loading.dismiss();
        if(error.status == 400){
          this.displayErrorText = 'invalid credentials';
        } else {
          this.displayErrorText = 'unknown problem';
        }
        this.active = false;
        setTimeout(() => this.active = true, 0);  // hack in the angular 2 forms documentation
      });
  }

}
