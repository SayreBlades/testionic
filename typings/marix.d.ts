declare module "marix" {
  var Bus: {
    publish(topic:string, payload:any):void
  };

  class HttpClient {
    constructor(host:string)
    login(email:string, password:string):JQueryPromise<any>
  }

}
