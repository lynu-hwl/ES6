function makeIterator(array){
  let state = 0;
  return {
    next:function(){
      return state<array.length?{
        value:array[state++],done:false
      }:{value:undefined,done:true}
    }
  }
}

let it = makeIterator([1,2,3])
console.log(it.next())
console.log(it.next())
console.log(it.next())
console.log(it.next())