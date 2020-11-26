// const arr = [1,2,3]

// let iter = arr[Symbol.iterator]()

// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());


// class Counter{
//   constructor(limit){
//     this.limit = limit;
//   }
 
//   [Symbol.iterator](){
//     let count = 1;
//     let limit = this.limit
//     return {
//       next(){
//         if(count <= limit){
//           return {done:false,value:count++}
//         }else {
//           return {done:true,value:undefined}
//         }
//       },
//       return(){
//         console.log('Exiting early');
//         return {done:true}
//       }
    
//     };
//   }
// }

// try {
//   let counter = new Counter(3);
// for (const iterator of counter) {
//   if(iterator>2)throw 'err'
//   console.log('iterator',iterator);
// }
// } catch (error) {
  
// }


// class ObjectIterable{
//   *[Symbol.iterator](){
//     for (const key in this) {
//       if (this.hasOwnProperty(key)) {
//         yield key;
        
//       }
//     }
//   }
// }

// class  Data extends ObjectIterable{
//   constructor(name,age){
//     super()
//     this.name = name;
//     this.age = age;
//   }
// }

// const data = new Data('name',123)

// for (const iterator of data) {
//   console.log(iterator);
// }



// let a = [1, 2, 3, 4, 5];
// let iter = a[Symbol.iterator]();
// iter.return = function() {
//   console.log('Exiting early');
//   return { done: true };
//   };

// for (let i of iter) {
//   console.log(i);
//   if (i > 2) {
//   break
//   }
// }
// for (let i of iter) {
//   console.log(i);
//   }

function* generatorFn(initial) {
  console.log('initial',initial);
  console.log(yield);
  console.log(yield);
  }
  
  let generatorObject = generatorFn('foo');
generatorObject.next('bar'); // foo
generatorObject.next('baz'); // ba?
generatorObject.next('qux'); // qux