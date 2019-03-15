var fs = require("fs")

var readFile = function(fileName){
  return new Promise(function(resolve,reject){
    fs.readFile(fileName,function(error,data){
      if(error) reject(error);
      resolve(data)
    })
  })
}

var gen = async function(){
  var f1 = await readFile("test1.txt").then(function(data){
    console.log(data.toString())
  })
  var f2 = await readFile("test2.txt").then(function(data){
    console.log(data.toString())
  })
  console.log(f1.toString())
  console.log(f2.toString())
}

var g = gen()

