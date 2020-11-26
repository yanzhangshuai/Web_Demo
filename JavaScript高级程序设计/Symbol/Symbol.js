//Symbol.asyncIterator
// 这个属性表示一个方法,这个方法返回对象默认AsyncIterator 由for-await-of语句使用

// class Emitter{
//   a
//   b
//   async *[Symbol.asyncIterator](){
//     for (const key in this) {
//       if (this.hasOwnProperty(key)) {
//         yield new Promise((res)=>res(key))
        
//       }
//     }
//   }

//   static async *[Symbol.asyncIterator](){
//     for (let index = 0; index < 10; index++) {
//       yield new Promise((res)=>res(index))
      
//     }
//   }
// }

// async function asyncCount(){
//   let  emitter = new Emitter(6)
//   for await(const x of emitter){
//     console.log(x)
//   }

//   for await(const x of Emitter){
//     console.log(x)
//   }
// }

// asyncCount()


//Symbol.hasInstance
//  instanceof操作符是由Symbol.hasInstance决定的,

// class Baz{}

// class Bar extends Baz{
//   static[Symbol.hasInstance](){
//     return false
//   }
// }

// class Foo extends Bar{}


// let foo = new Foo()
// console.log('Baz:'+ (foo instanceof Baz).toString()); 
// console.log('Baz:'+ (Baz[Symbol.hasInstance](foo)).toString());
// console.log('Bar:'+ (foo instanceof Bar)); 
// console.log('Bar:'+Baz[Symbol.hasInstance](Bar));
// console.log('Foo:'+Foo[Symbol.hasInstance](foo));
// console.log('Foo:'+ (foo instanceof Foo)); 
//Symbol.isConcatSpreadable
//  这个符号作为一个属性表示一个布尔值,如果为true,则意味着对象可以应用Array.prototype.concat()打平其数组元素

let initial = ['foo'];
// let array = ['bar']
// // console.log('array[Symbol.IsConcatSpreadable]',array[Symbol.isConcatSpreadable]);
// // console.log('initial[Symbol.IsConcatSpreadable]',initial[Symbol.isConcatSpreadable]);

// console.log('initial.concat(array)',initial.concat(array));

// array[Symbol.isConcatSpreadable] = true
// console.log('initial.concat(array)',initial.concat(array));
// array[Symbol.isConcatSpreadable] = false
// console.log('initial.concat(array)',initial.concat(array));

//  object
//  length 决定长度
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
// 这个符号作为一个属性表示一个方法,该方法返回对象默认的迭代器.,由for-of语句使用
class Foo{
  a
  b
  *[Symbol.iterator](){
      for (const key in this) {
        if (this.hasOwnProperty(key)) {
          yield key
          
        }
      }
  }
}
let f = new Foo()
for (const key of f) {
    console.log('key',key);
}
console.log(f[Symbol.iterator]);


// Symbol.match
//  这个符号作为一个属性表示一个正则表达式方法,该方法用正则表达式去匹配字符串,由String.prototype.match方法使用

// class FooMatter{
//   data
//   constructor(a){
//     this.data = a
//   }

//   static [Symbol.match](target){
//     return target === 'fff'
//   }

//    [Symbol.match](target){
//     return target === this.data
//   }
//   toString(){
//     return this.data
//   }
// }

// let foo = new FooMatter('foo')
// let foo2 = new FooMatter('ff')
// console.log('foo:',foo.toString());
// console.log('foo'.match(foo));
// console.log('foo'.match(foo2));


//Symbol.replace
//  这个符号作为一个属性表示一个正则表达式方法,该方法替换一个字符串中匹配的子串,由String.prototype.replace方法使用  
// class FooReplacer{
//   data
//   constructor(d){
//     this.data =d 
//   }
//   static [Symbol.replace](target,replacement){
//     console.log('target',target);
//     console.log('replacement',replacement);
//      return 'f'
//   }

//   [Symbol.replace](target,replacement){
//     if(this.data === target){
//       return replacement
//     }
//     return this.data
//   }
// }
// console.log('barforbaz'.replace(FooReplacer,'1'));

// let foo = new FooReplacer('FooReplacer')
// let foo2 = new FooReplacer('foooo')
// console.log('foooo'.replace(foo,'123'));
// console.log('foooo'.replace(foo2,'123'));


//Symbol.search
//  这个符号作为一个属性表示一个正则表达式方法,该方法返回字符串中匹配正则表达式的索引,由String.prototype.search方法使用
// class FooSearcher{

//   constructor(d){
//     this.data = d
//   }

//   static [Symbol.search](target){
//     return target.indexOf('FooSearcher')
//   }

//   [Symbol.search](target){
//     return target.indexOf(this.data)
//   }
// }

// console.log('FooSearcher'.search(FooSearcher));

// console.log('FooSearcher'.search(new FooSearcher('S')));

//Symbol.species？
// 这个符号作为一个属性表示一个函数值,该函数作为创建派生对象的构造函数(这个属性在内置类型中最常用,用于对内置类型实例方法的返回值暴露示例化派生对象的方法)

// class Bar extends Array{}

// class Baz extends Array{ 

//   static get [Symbol.species](){
//     return Array
//   }
  
//   // static [Symbol.hasInstance](){
//   //   return true
//   // }

// }

// let bar = new Bar()
// let baz = new Baz()
// bar =bar.concat('')
// console.log( bar instanceof Bar);

// console.log('Bar[Symbol.hasInstance]():'+Bar[Symbol.hasInstance]());
// console.log( bar instanceof Array);

// console.log('Baz[Symbol.hasInstance]():'+Baz[Symbol.hasInstance]());

// console.log('Baz[Symbol.hasInstance]():'+Baz[Symbol.hasInstance]());
// console.log( baz instanceof Baz);
// console.log( baz instanceof Array);

//Symbol.split
//这个符号作为一个属性表示一个正则表达式方法,该方法在匹配正则表达式的索引位置拆分字符串.由String.prototype.split方法使用

// class FooSplitter{
//   constructor(d) {
//   this.data = d
    
//   }
  
//   static [Symbol.split](target){
//     return target.split('foo')
//   }

//   [Symbol.split](target){
//     return target.split(this.data)
//   }
// }

// console.log('barfoobaz'.split(FooSplitter));
// console.log('barfoobaz'.split(new FooSplitter('f')));


//Symbol.toPrimitive
// 这个符号作为一个属性表示一个方法,该方法将对象转换为相应的原始值.由ToPrimitive抽象操作使用.
// 很多内置操作都会尝试强制将对象转换为原始值.包括字符串、数值和未定义的原始类型,对于一个自定义对象实例,通过在这个实例的Symbol.toPrimitive属性上定义一个函数可以改变默认行为.

// class FooPrimitive{
 
//   [Symbol.toPrimitive](hint){
//     console.log('hint',hint);
//     return 'asd134a'
//   }
// }

// let foo = new FooPrimitive()
// console.log(3 + foo);
// console.log(3 - foo);
// console.log(parseInt(foo));


//Symbol.toStringTag
//这个符号作为一个属性表示一个字符串,该字符串用于创建对象的默认字符串描述.由内置方法Object.prototype.toString()使用.会检索由Symbol.toStringTag指定的实例标识符,默认为'Object'
// let s = new Set()
// console.log(s);
// console.log(s.toString());
// console.log(s[Symbol.toStringTag]);

// class Foo{}
// let foo = new Foo()
// console.log(foo);
// console.log(foo.toString());
// console.log(foo[Symbol.toStringTag]);

// class Bar{
//   constructor(){

//   }
//   [Symbol.toStringTag] = 'Baz'
// }
// let bar = new Bar()
// console.log(bar);
// console.log(bar.toString());
// console.log(bar[Symbol.toStringTag]);


// class Foo{
//   c
//   [Symbol.unscopables](){
//     return {
//       a:1,
//       b:2
//     }
//   }
// }

// let foo = {foo:''}
// foo.c = 1
// with(foo){
//   console.log('c',c);
// } 