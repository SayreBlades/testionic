
export function fromJQueryPromise<T>(p:JQueryPromise<T>):Promise<T> {
  return new Promise<T>((resolve,reject) => {
    p.done((o) => {
      resolve(o);
    });
    p.fail((error) => {
      delete error.then;  // sends promises into infinite loop
      reject(error);
    });
  });
}

export function delayPromise<T>(duration):Promise<T> {
	return new Promise<T>(function(resolve, reject){
		setTimeout(function(){
			resolve();
		}, duration)
	});
}
