let arr = [1,2,3]
let map = arr[Symbol.iterator]()
console.log(map.next())
console.log(map.next())
console.log(map.next())                      