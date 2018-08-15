let val = [6,"5",11,"11",23,"9"]

function change(v1,v2){
    if(v1<v2){
        return -1;        
    }else if(v1>v2){
        return 1;
    }
}
let data = val.sort(change)
console.log(data)