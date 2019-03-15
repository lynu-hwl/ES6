function timeout(ms){
  return new Promise((resolve,reject)=>{
    setTimeout(() => {
      resolve(ms)
    }, ms);
  })
}

async function asyncPrint(value,ms){
  await timeout(500).then(function(data){
    console.log(`过${data}秒后执行`)
  })
  console.log(value)
}
asyncPrint("I Love You",500)
