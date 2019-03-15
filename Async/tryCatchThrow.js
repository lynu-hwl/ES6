function f(){
  try {
    throw new Error("出错了")
  } catch (error) {
    console.log(error)
  }
}
f()