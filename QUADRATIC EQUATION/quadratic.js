var a = prompt("enter X square co-efficient");
var b = prompt("enter X  co-efficient");
var c = prompt("enter constant");

var root1 = Math.floor(((-b)+Math.sqrt(b*b-4*a*c))/2*a);
var root2 = Math.floor(((-b)-Math.sqrt(b*b-4*a*c))/2*a);

alert("the value of root1 is : "+root1);
alert("the value of root1 is : "+root2);