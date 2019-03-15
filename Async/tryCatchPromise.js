async function  f() {
  
  try {
    await Promise.reject("123")  
  } catch (error) {
    
  }
  return await Promise.resolve("789");
  
}
f().then(
  (data)=>{console.log("data: "+data)},
  (error)=>{console.log("error: "+error)}
)