let value = {
  name:"秋张",
  age:"16",
  live:"Basketball",
  _love:"科比"
}
let mProxy = new Proxy(value,{
  // 拦截对象属性的读取
  get(target,key){
    return target[key].replace('秋','l love you')
  },
  set(target,key,value){
    if(key==="live"){
      target[key] = value
    }else{
      target[key]
    }
  },
  has(target,key){
    if(key==="name") return target[key]
    else return false
  },
  deleteProperty(target,key){
    if(key.indexOf("_")!=-1){
      delete target[key]
      return true;
    }else{
      return target[key]
    }
  },
  ownKeys(target){
    return Object.keys(target).filter(item=>{if(item!=="name")return item})
  }
})

console.log(mProxy.name)
mProxy.live = "钢琴"
console.log(mProxy.live)
mProxy.age = "20"
console.log(mProxy.age)
console.log("name" in mProxy,"age" in mProxy)

console.log(mProxy.age)
delete mProxy.age           
console.log(mProxy.age) 
console.log(Object.keys(mProxy))        