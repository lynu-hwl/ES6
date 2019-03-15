var p = new Promise(function(resolve,reject){
  resolve("成功了");
  setTimeout(() => {
    reject("1秒后失败")
  }, 1000);
})
p.then(function(data){
  console.log(data)
},function(data){
  console.log(data)
})
