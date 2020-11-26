// function onResolved(id){
//   console.log('resolved');
//   setTimeout(console.log, 0,id,'resolved');
// }

// function onRejected(id){
//   console.log('rejected');
//   setTimeout(console.log, 0,id,'rejected');
// }

// let p1 = new Promise((resolve,reject)=>{
//   setTimeout(resolve, 3000);
// })

// let p2 = new Promise((resolve,reject)=>{
//   setTimeout(reject, 3000);
// })


// p1.then(()=>onResolved('p1'),() => onRejected('p1'))
// p2.then(()=>onResolved('p2'),() => onRejected('p2'))


// let p1 = new Promise((resolve, reject) =>
// reject(Error('foo')));
// p1.catch(res=>console.log(res.message))

// new Promise((resolve, reject) => {
//   throw Error('foo'); }).catch(res=>console.log(res.message))

//   Promise.reject(Error('foo')).catch(res=>console.log(res.message))
//   Promise.reject(Error('foo')).catch((e) =>
// {console.log(e.message);});

//  new Promise((resolve, reject) => {
//   console.log('begin asynchronousexecution');
//   resolve(Error('bar'));
//   }).then((e)=>new Promise((resolve,reject)=>{
//       resolve('111')
//   })).then(e=>{
//     console.log(e.message);
//   })

    
// class CancelToken{
//   constructor(cancelFn){
//     this.promise = new Promise((resolve,reject)=>{
//       cancelFn(resolve)
//     })
//   }
// }




// async function foo() {
//   console.log(1);
//   return 3;
//   }
//   // 给返回的期约添加一个解决处理程序
//   foo().then(console.log);
//   console.log(2)


// async function foo() {
//   console.log(2);
//   console.log(await Promise.resolve(8));
//   console.log(9);
//   }

// async function bar() {
//   console.log(4);
//   console.log(await 6);
//   console.log(7);
//   }

//   console.log(1);
//   foo();
//   console.log(3);
//   bar();
//   console.log(5);

// async function randomDelay(id){
//   //延迟0~1000毫秒
//   const delay = Math.random() * 1000;
//   return new Promise(res=>{
//     setTimeout(() => {
//       console.log(`${id} finished`);
//       res(id);
//     }, delay);
//   })
// }


// async function foo(){
//   const t0 = Date.now();
//   const promises =
//   Array(5).fill(null).map((_, i) =>
//   randomDelay(i));
//   for (const p of promises) {
//     console.log(`awaited ${await p}`);
//   }
// console.log(`${Date.now() - t0}ms
// elapsed`);
// }
// foo();


//  Promise.reject(Promise.reject(7)).then(undefined,(r)=>r.then(undefined,a=>console.log('a',a))).catch(rej=>rej.catch(r=>console.log(r)))

// let p10 =  Promise.resolve('foo').then(() => {  throw 1 });


// let p1 = Promise.reject('1');
// // p1.catch(() => console.log('p1--catch'))
// //   .finally((s)=>console.log('p1--finally'))

// // p1.then(null,() => console.log('p1--then--reject'))
// //   .finally((s)=>console.log('p1--finally'))
// p1.then()
//   .catch((s) => console.log('p1--catch',s))
//   .finally((s)=>console.log('p1--finally'))

// let p2 = Promise.resolve('2');

// let p3 = p2.then((s)=>console.log('p2--then--resolve',s))
//   .finally((s)=>console.log('p2--finally'))




// let p1 = new Promise((resolve, reject) =>
// reject(Error('foo')));

// p1.catch(s=>{
//   console.log(s.message)
// })

// let p = Promise.all([
//   Promise.resolve(3),
//   new Promise((resolve, reject) =>
//   reject(2))
//   ]);
//   p.catch((reason) =>console.log(reason));  // 3

//  Promise.race([
//   Promise.resolve(3),
//   new Promise((resolve, reject) =>
//   setTimeout(reject, 1000))
//   ]).then(res=>console.log('res',res),rej=>console.log('rej',rej));