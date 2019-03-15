let val = false
let p = new Promise(function(resolve,reject){
  console.log("创建了一个Primise")
  if(val) resolve("成功了")
  else reject("失败了")
  console.log("还没完哦")
})

p.then(function(data){       
  console.log(data)
  // return "成功后再掉一次"
},function(data){
  console.log(data)
  // return "失败后再掉一次"
}).then(function(data){
  console.log(data)
},function(data){
  console.log(data)
})                    


