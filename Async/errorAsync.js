async function f() {
  throw new Error('报错')
}
f().then(
  (data)=>{console.log(data)},
  (error)=>{console.log("error: "+error)}
)