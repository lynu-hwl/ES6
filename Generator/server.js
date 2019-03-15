const http = require("http");
const fs = require("fs")
const path = require("path")

const server = http.createServer(function(req,res){
  let filePath = path.join(__dirname,`data.json`)
  console.log("filePath: ",filePath)
  res.statusCode = 200;
  res.setHeader("Content-Type","application/json;charset=UTF-8")
  fs.createReadStream(filePath).pipe(res)

})
server.listen(8888,"127.0.0.1")