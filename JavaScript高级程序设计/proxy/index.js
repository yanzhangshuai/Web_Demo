// const target = {
//   id: 'target'
// };
// const handler = {};
// const proxy = new Proxy(target, handler);

// // id属性会访问同一个值
// console.log(target.id); // target
// console.log(proxy.id); // target


// const target = {
//   foo: 'foo'
//   };
//   Object.defineProperty(target, 'bar', {
//     configurable: false,
//     writable: false,
//     value: 'bar'
//     });
//   const handler = {
//   // 捕获器在处理程序对象中以方法名为键
//   get(trapTarget, property, receiver) {
//     return 'qux';
//   }
//   };
//   const proxy = new Proxy(target, handler);


//   console.log(target.foo); 
// console.log(proxy.foo);
// console.log(target.bar);
// console.log(proxy.bar);




// const target = {
//   thisValEqualsProxy() {
//   return  console.log(this);
//   }
//   }
//   const proxy = new Proxy(target, {});
//   target.thisValEqualsProxy()
//   console.log(); //
//   console.log(proxy.thisValEqualsProxy());  

// const arr = [1,23]

// const proxy  = new Proxy(arr,{
//   get(){
//     console.log('我是getter',arguments);
//     return Reflect.get(...arguments)
//   },

//   set(){
//     console.log('我是setter',arguments);
//     Reflect.set(...arguments)
//     return true
//   }
// })

// console.log(proxy[0]
// );



// proxy[1]=12321312




















// --- get()

// const myTarget = {}

// const proxy = new Proxy(myTarget,{
//   get(target,property,receiver){
//     console.log('proxy.get()');
//     return Reflect.get(...arguments)
//   }
// })

// proxy.foo
// proxy['foo']
// Object.create(proxy)['foo']
// Reflect.get(proxy,'foo')


// ---set()

// const myTarget = {}
// const proxy = new Proxy(myTarget,{
//   set(target,proxy,value,receiver){
//     console.log('proxy.set()');
//     return Reflect.set(...arguments)
//   }
// })

// proxy.foo = 'foo';
// proxy['foo'] = 'foo';
// Object.create(proxy).foo = 'foo';
// Reflect.set(proxy,'foo','foo');

// ---has()
// const myTarget = {}
// const proxy = new Proxy(myTarget,{
//   has(target,property){
//     console.log('proxy.has()');
//     return Reflect.has(...arguments)
//   }
// })

// console.log('foo' in proxy);
// console.log('foo' in Object.create(proxy));
// console.log(Reflect.has(proxy,'foo'));

// --- defineProperty()

// const myTarget = {}
// const proxy = new Proxy(myTarget,{
//   defineProperty(target,property,descriptor){
//     console.log('proxy.defineProperty()');
//     return Reflect.defineProperty(...arguments)
//   }
// })
// console.log(Object.defineProperty(proxy, 'foo', { value:
//   'bar' }));
// console.log(Reflect.defineProperty(proxy, 'foo', { value:
//   'bar' }));



//  --- getOwnPropertyDescriptor()

// const myTarget = {};
// const proxy = new Proxy(myTarget,{
//   getOwnPropertyDescriptor(target,property){
//     console.log('proxy.getOwnPropertyDescriptor()');
//     return Reflect.getOwnPropertyDescriptor(...arguments)
//   }
// })

// console.log(Object.getOwnPropertyDescriptor(proxy, 'foo'));;
// console.log(Reflect.getOwnPropertyDescriptor(proxy, 'foo'));

// --- deleteProperty()
// const myTarget = {};
// const proxy = new Proxy(myTarget,{
//   deleteProperty(target,property){
//     console.log('proxy.deleteProperty()');
//     return Reflect.deleteProperty(...arguments)
//   }
// })

// console.log(delete proxy.foo);
// console.log(delete proxy['foo']);
// console.log(Reflect.deleteProperty(proxy,'foo'));


// --- ownKeys()

// const myTarget = {
//   [Symbol('1')]:1,
//   name:'123'
// }
// const proxy = new Proxy(myTarget,{
//   ownKeys(target){
//     console.log('proxy.ownKeys()');
//     return Reflect.ownKeys(...arguments)
//   }
// })

// console.log(Object.keys(proxy));
// console.log(Reflect.ownKeys(proxy));
// console.log(Object.getOwnPropertyNames(proxy));
// console.log(Object.getOwnPropertySymbols(proxy));


//  -- getPrototypeOf()
//  class MyClass{}

// const myTarget = new MyClass()

// const proxy = new Proxy(myTarget,{
//   getPrototypeOf(target){
//     console.log('proxy.getPrototypeOf()');
//     return Reflect.getPrototypeOf(...arguments)
//   }
// })

// console.log(Object.getPrototypeOf(proxy));
// console.log(Reflect.getPrototypeOf(proxy));
// console.log(proxy.__proto__);
// console.log(Object.prototype.isPrototypeOf(proxy));
// console.log(proxy instanceof Object);

// ---setPrototypeOf()

// class MyClass{}
// class MyClass2{}
// const myTarget = new MyClass()
// const proxy = new Proxy(myTarget,{
//   setPrototypeOf(target,prototype){
//     console.log('proxy.setPrototypeOf()');
//     return Object.setPrototypeOf(...arguments);
//   }
// })
// console.log(Object.setPrototypeOf(proxy,MyClass2));
// console.log(Object.getPrototypeOf(proxy));
// console.log(Reflect.setPrototypeOf(proxy,MyClass2));


// --- isExtensible()

// const myTarget = {}
// const proxy = new Proxy(myTarget,{
//   isExtensible(target){
//     console.log('proxy.isExtensible');
//     return Reflect.isExtensible(...arguments)
//   }
// })
// console.log(Object.isExtensible(proxy));
// console.log(Object.isSealed(proxy));
// console.log(Object.isFrozen(proxy));
// console.log(Reflect.isExtensible(proxy));

//  -- preventExtensions()

// const myTarget = {}
// const proxy = new Proxy(myTarget,{
//   preventExtensions(target){
//     console.log('proxy.preventExtensions()');
//     return Reflect.preventExtensions(...arguments);
//   }
// })
// console.log(Object.preventExtensions(proxy));
// console.log(Reflect.preventExtensions(proxy));
// console.log(Object.freeze(proxy));
// console.log(Object.seal(proxy));


// --- apply()
// const myTarget = ()=>{console.log('我是func')};
// const proxy = new Proxy(myTarget,{
//   apply(target,thisArg,... argumentsList){
//     console.log('proxy.Apply()');
//     return Reflect.apply(...arguments)
//   }
// })

// proxy();
// proxy.apply({});
// proxy.call({});


// ---construct()
class MyClass{}
const proxy = new Proxy(MyClass,{
  construct(target,argumentsList,newTarget){
    console.log('proxy.construct');
    return new Object()
  }
})

const a = new proxy('1');
console.log(Object.getPrototypeOf(a));