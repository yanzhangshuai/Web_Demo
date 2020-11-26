function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms || 1));
}


function componse(middleware){
  return (context,next?)=>{

    const dispatch(i:number)=>{
      if(i <= index) return Promise.resolve(new Error("next() called multiple times"))
      index = i;
      let fn = middleware[i];
      if(i === middleware.length)fn = next;

      if(!fn) return Promise.resolve();

      try {
        return Promise.resolve(fn(context,dispatch.bind(null,i+1)))
      } catch (error) {
        return Promise.reject(error);
      }

    }
    let index = -1;

    return dispatch(0);


  

  }
}



async function run(){
  const arr = [];
  const stack = [];

// type Middleware<T> = (context: T, next: Koa.Next) => any;
stack.push(async (context, next) => {
  arr.push(1);
  await wait(1);
  await next();
  await wait(1);
  arr.push(6);
});

stack.push(async (context, next) => {
  arr.push(2);
  await wait(1);
  await next();
  await wait(1);
  arr.push(5);
});

stack.push(async (context, next) => {
  arr.push(3);
  await wait(1);
  await next();
  await wait(1);
  arr.push(4);
});

await componse(stack)({});
}

run()