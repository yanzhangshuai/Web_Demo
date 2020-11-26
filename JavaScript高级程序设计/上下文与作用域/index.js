

function aFunc(){
  var d = '123'

  function cFunc(str){
    console.log('d',d)
    var b= 'c内部创建的参数'
    if(b === str){
      console.log('1')
    }
  }

  function bFunc(str){
    console.log('d',d)
    cFunc();
    var b= '内部创建的参数'
    if(b === str){
      console.log('1')
    }
  }
  debugger
  bFunc('第一个参数','第二个参数')
}

aFunc()