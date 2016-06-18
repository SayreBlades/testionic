import { Component } from '@angular/core';
import { NavController, Popover } from 'ionic-angular';

@Component({
  template: `This is a popover`
})

export class MyPopover{}


@Component({
  templateUrl: 'build/pages/sign-in/sign-in.html',
})
export class SignInPage {
  constructor(private nav: NavController) {}

  contentClick(ev){
    let popover = Popover.create(MyPopover)
    this.nav.present(popover);
  }
}
