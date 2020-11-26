//Symbol.asyncIterator
//  这个属性表示一个方法,这个方法返回对象默认AsyncIterator 由for-await-of语句使用

// class Emitter{
//   constructor(max) {
//     this.max = max;
//     this.asyncIdx = 0;
//     }
    

//   async *[Symbol.asyncIterator](){
//     while(this.asyncIdx<this.max){
//       console.log('我是内部',this.asyncIdx);
//       yield new Promise((res)=>res(this.asyncIdx++))
//     }
//   }
// }

// async function asyncCount(){
//   let  emitter = new Emitter(6)
//   for await(const x of emitter){
//     console.log(x)
//   }
// }

// asyncCount()


//Symbol.hasInstance
//  instanceof操作符是由Symbol.hasInstance决定的,

// class Baz{
 
// }

// class Bar extends Baz{
//   static[Symbol.hasInstance](){
//     return false
//   }
// }
// let b = new Bar();
// console.log('bar:'+ (b instanceof Bar).toString()); 
// console.log('bar:'+ (Bar[Symbol.hasInstance](b)).toString());
// console.log('baz:'+ (b instanceof Baz)); 
// console.log('baz:'+Baz[Symbol.hasInstance](b));

//Symbol.isConcatSpreadable
//  这个符号作为一个属性表示一个布尔值,如果为true,则意味着对象可以应用Array.prototype.concat()打平其数组元素

// let initial = ['foo'];
// let array = ['bar']
// console.log('array[Symbol.IsConcatSpreadable]',array[Symbol.isConcatSpreadable]);
// console.log('initial[Symbol.IsConcatSpreadable]',initial[Symbol.isConcatSpreadable]);

// console.log('initial.concat(array)',initial.concat(array));

// array[Symbol.isConcatSpreadable] = true
// console.log('initial.concat(array)',initial.concat(array));
// array[Symbol.isConcatSpreadable] = false
// console.log('initial.concat(array)',initial.concat(array));

// //  object
// //  length 决定长度
// let arrayLikeObject = { length: 3, 2: 'baz',1:'foo'};
// console.log('arrayLikeObject[Symbol.isConcatSpreadable]',arrayLikeObject[Symbol.isConcatSpreadable]); 
// console.log(initial.concat(arrayLikeObject));
// arrayLikeObject[Symbol.isConcatSpreadable] = true
// console.log(initial.concat(arrayLikeObject));

// // set

// let otherObject = new Set().add('qux');
// console.log('otherObject[Symbol.isConcatSpreadable]:'+otherObject[Symbol.isConcatSpreadable]);
// console.log('initial.concat(otherObject):'+initial.concat(otherObject));
// // ['foo', Set(1)]
// otherObject[Symbol.isConcatSpreadable] = true
// console.log('initial.concat(otherObject):'+initial.concat(otherObject));


//Symbol.iterator

class Foo{
  a:number |undefined
  b:number | undefined
  constructor(a?:number,b?:number){
    this.a = a;
    this.b = b
  }
  *[Symbol.iterator](){
      for (const key in Reflect.defineProperty(Foo)) {
          yield key
          
        }
   }
}


let f = new Foo()
for (const key of f) {
    console.log('key',key);
}
console.log(f[Symbol.iterator]);