// function interval(handler, timeout, maximum){
//   if(!handler || timeout<0 || maximum === 0){
//     return
//   }


//   let timeId
 
//   const fn =()=>{
//     if(timeId){
//       clearTimeout(timeId)
//     }

//     //  处理
//     handler()

//     if(maximum===undefined || maximum===null || (--maximum)>0){
//       timeId = setTimeout(fn, timeout);
//     }
    
//   }

//    timeId =setTimeout(fn, timeout);
// }



// interval(()=>console.log('我是',new Date()),2000,5)



let getQueryStringArgs = function(qs) {
  // 取得没有开头问号的查询字符串

  // 保存数据的对象
  args = {};

  let  queryValues=  new Map(qs.split("&").map(kv => kv.split("=")))

  const reg = /\[\w+\]$/
  let  arrQueryNames = new Set()

  // 把每个参数添加到args对象
  for (let key of queryValues.keys()) {
    if(reg.test(key)){
      arrQueryNames.add(key);
      continue
    }
    args[key] = queryValues.get(key);
  }

  console.log('arrQueryNames',arrQueryNames.length);
 



  console.log('====',arrQueryNames.map(key=>key.replace(reg,'')));
  return args;
  }
  


   function formatGetJson(uri, data) {
    let keys = Object.keys(data)
    if (!keys.length) return uri
    let joiner = uri.lastIndexOf('?') == -1 ? '?' : '&'
    return (
      uri +
      joiner +
      keys
        .map(item => {
          if (typeof data[item] === 'undefined') {
            return ''
          } else if (!Array.isArray(data[item])) {
            return `${item}=${data[item]}`
          } else {
            //  如果当前为数组,那么就解析数组参数
            if (!data[item].length) {
              return ''
            }
            // @ts-ignore
            const arrData = data[item]
            return arrData
              .map((d, i) => `${item}[${i}]=${d}`)
              .filter(item => item !== '')
              .join('&')
          }
        })
        .filter(item => item !== '')
        .join('&')
    )
  }
  




let qs = formatGetJson('',{
  name:'foo',
  groupId:[1,2]
})
console.log(qs);
let searchParams = new URLSearchParams(qs);

console.log(getQueryStringArgs(qs));
