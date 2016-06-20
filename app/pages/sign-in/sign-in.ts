import { Component } from '@angular/core';
import { FORM_PROVIDERS, FORM_DIRECTIVES } from '@angular/common';
import { NavController, Popover, Loading } from 'ionic-angular';
import { HelloIonicPage } from '../hello-ionic';
import { JwtService } from '../../providers/jwt-service';
import { EmailValidator } from '../../components/email-validator';
import { HttpClient } from 'marix';

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

  signIn() {
		let loading = Loading.create({ spinner:'dots', content: 'logging into marix...' });
		this.nav.present(loading);

    this.httpClient.login(this.login.email, this.login.password)
      .then(() => {
        this.nav.setRoot(HelloIonicPage);
      },
       (error)=>alert(error)
      )
      .then(() => {
        loading.dismiss();
      });
  }

}
