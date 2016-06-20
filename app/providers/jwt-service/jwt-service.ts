import { Injectable } from '@angular/core';

@Injectable()
export class JwtService {

  get token():string {
    return localStorage.getItem('jwt');
  }
  
  set token(token:string){
    localStorage.setItem('jwt', token);
  }

}

