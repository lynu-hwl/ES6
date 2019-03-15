class Person{
  constructor(name="小潘",age=25){
    this._name = name;
    this._age = age;
  }
}
class manPerson extends Person{
  constructor(name,age,x,y){
    super(name,age);
    this.x = x;
    this.y = y;
  }

  static changeName(){
    return "l love you!"
  }
  
  get name(){
    return this._name + " 叫我爸爸"
  }
  set age(value){
    return this._age = value + 1
  }
  get age(){
    return this._age;
  }
}

Person.type = "中国人";
let m = new manPerson("小毛",30,110,119);
console.log(m.name)
m.age = 110
console.log(m.age)
