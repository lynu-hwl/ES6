class ObjectIterator{
  constructor(start,stop){
    this.value = start;
    this.stop = stop;
  }
  [Symbol.iterator](){return this;}
  next(){
    var value = this.value;
    if(value<this.stop){
      this.value++;
      return {value:value,done:false}
    }                 
    return {value:undefined,done:true}
  }
}
// function generate(start,stop){
//   return new ObjectIterator(start,stop)
// }
let data = new ObjectIterator(0,3)
console.log(data)

for(let item of data){
  console.log(item)
}