var fetch = require('node-fetch')
function* gen(){
  var url = 'http://127.0.0.1:8888/';
  var result = yield fetch(url);
  console.log("result1:",result)
}
var g = gen();
var result = g.next();
// console.log("result2:",result)  返回promise

result.value.then(function(data){
  console.log("data:",data.json())
  return data.json()
}).then(function(data){
  g.next(data)
})