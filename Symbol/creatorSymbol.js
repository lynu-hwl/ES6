let obj = {a:"123",b:"456",toString(){return "789"}}

let s1 = Symbol(obj)
console.log(s1)
console.log(s1.toString())
console.log(String(s1))
console.log(Boolean(s1))

let s2 = Symbol()
console.log(Boolean(s2))
