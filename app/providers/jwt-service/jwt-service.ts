import { Injectable } from '@angular/core';

@Injectable()
export class JwtService {
  constructor(private localStorageKey:string){}

  get token():string {
    return localStorage.getItem(this.localStorageKey);
  }
  
  set token(token:string){
    localStorage.setItem(this.localStorageKey, token);
  }

  clear() {
    localStorage.removeItem(this.localStorageKey);
  }
}

