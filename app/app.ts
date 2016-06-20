import {Component, ViewChild, provide, OpaqueToken} from '@angular/core';
import {Platform, MenuController, Nav} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {HelloIonicPage} from './pages/hello-ionic/hello-ionic';
import {ListPage} from './pages/list/list';
import {TetPage} from './pages/tet/tet';
import {LandingPage} from './pages/landing';
import {SignInPage} from './pages/sign-in';
import {HttpClient} from 'marix';
import {JwtService} from './providers/jwt-service';


@Component({
  templateUrl: 'build/app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  // make HelloIonicPage the root (or first) page
  rootPage: any = LandingPage;
  pages = [
		{ title: 'Hello Ionic', component: HelloIonicPage },
		{ title: 'My First List', component: ListPage },
		{ title: 'Tet', component: TetPage }
	];


  constructor(
		private jwtService:JwtService,
    private httpClient:HttpClient,
    private platform: Platform,
    private menu: MenuController
  ) {
    this.initializeApp();
    console.info('MyApp constructor');
		if(this.jwtService.token){
			this.rootPage = HelloIonicPage;
		}
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }


  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }

  menuEnabled(){
    // console.info("", this.nav.root, HelloIonicPage, this.nav.root == HelloIonicPage);
		let v = this.nav.root == HelloIonicPage;
		console.info("this.nav.root == HelloIonicPage: ", v);
    return false;
    // let ret = (this.nav.root == HelloIonicPage);
    // console.info('menuEnabled', ret);
    // return ret;
  }
}
