console.log("=====Inserting elements in the array=====")
var a=[4,5,6,8,9,33,66];
console.log(a);
a.splice(2,0,88);
console.log(a);
//Replacing array
var b=[4,5,6,8,9,33,66];
console.log(b);
b.splice(3,1,22);
console.log(b);
//pop
var c=[4,5,6,8,9,33,];
console.log(c);
c.pop();
console.log(c);
//push
var d=[4,5,6,8,9,33,];
console.log(d);
d.push(25);
console.log(d);
//shift
var d=[4,5,6,8,9,33,];
console.log(d);
d.shift();
console.log(d);
//unshift
var e=[4,5,6,8,9,33,];
console.log(e);
e.unshift(30);
console.log(e);