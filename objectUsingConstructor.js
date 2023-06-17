var obj1={
    Name:"komal",
    sirname:"kurewad",
    age:25,
    class:6
}
console.log(obj1);
var obj2={
    Name:"Dipali",
    sirname:"patil",
    age:26,
    class:8
}
console.log(obj2);

function student(name,sirname,age,){
    this.name=name;
    this.sirname=sirname;
    this.age=age;
    
}
var a=new student("komal","kurewad",32);
var b=new student("Dipali","Patil",62);
console.log(a);
console.log(b);



