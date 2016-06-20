import { provide } from '@angular/core';
import { NG_VALIDATORS } from '@angular/common';
import { Directive } from '@angular/core';
import { isEmail } from 'validator';

function validateEmail(emailControl) {
  if (!emailControl.value || isEmail(emailControl.value)){
    return null;
  } else {
    return { 'invalidEmail': true };
  }
}

@Directive({
  selector: '[validate-email]',
  providers: [provide(NG_VALIDATORS, {
    useValue: validateEmail, multi: true
  })]
})
export class EmailValidator { }
