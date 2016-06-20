import { Component } from '@angular/core';
import { FORM_PROVIDERS, FORM_DIRECTIVES } from '@angular/common';
import { NavController, Popover, Loading, Alert } from 'ionic-angular';
import { HelloIonicPage } from '../hello-ionic';
import { JwtService } from '../../providers/jwt-service';
import { EmailValidator } from '../../components/email-validator';
import { HttpClient } from 'marix';
import { fromJQueryPromise, delayPromise } from '../../utils/promise-wrapper';

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
		let loading = Loading.create({ content: 'logging into marix...' });
		this.nav.present(loading);

    console.info('signing in');
		delayPromise(1000)
			.then(() => fromJQueryPromise(this.httpClient.login(this.login.email, this.login.password)))
      .then((o) => {
        loading.dismiss();
        this.nav.setRoot(HelloIonicPage);
      })
      .catch((error)=> {
        loading.dismiss();
        if(error.status == 400){
          this.displayErrorText = 'invalid credentials';
          this.active = false;
          setTimeout(() => this.active = true, 0);
        }
      });
  }

}
