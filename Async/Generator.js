var fs = require("fs")

var readFile = function(fileName){
  return new Promise(function(resolve,reject){
    fs.readFile(fileName,function(error,data){
      if(error) reject(error);
      resolve(data)
    })
  })
}

var gen = function*(){
  var f1 = yield readFile("test1.txt").then(function(data){
    console.log(data.toString())
  })
  var f2 = yield readFile("test2.txt").then(function(data){
    console.log(data.toString())
  })
  console.log(f1.toString())
  console.log(f2.toString())
}

var g = gen()
g.next()
g.next()
