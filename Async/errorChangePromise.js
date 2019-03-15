async function f() {
  try {
    await new Promise(function(resolve,reject){
      throw new Error("出错")
    })
  } catch (error) {
    console.log(error)
  }
  return await('hello world');
}
f().then(
  (data)=>{console.log(data)},
  (error)=>{console.log(error)}
)