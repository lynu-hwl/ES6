let a = Symbol("a")
let b = Symbol("b")
let obj = {
  [a]:123,
  [b]:456,
  c:789
}
for(let item in obj){
  console.log(item)
}

let allSymbol = Object.getOwnPropertySymbols(obj)
console.log(allSymbol)