
var range = +prompt("enter a number");
var num1 = 0;
var num2 = 1;
var res;
for (i = 0; i <= range; i++) {
  res = num1 + num2;
  num1 = num2;
  num2 = res;
  console.log(res);
}


// var a = 12346;
// var b = a.toString().split("");
// console.log(b);
// b.map((e) => {
//   console.log(e);
// })


// var range = +prompt("enter ");
// var num1 = 0;
// var num2 = 1;
// var res;
// for(i=0;i<=range;i++){
// res = num1+num2;
// num1 = num2;
// num2 = res;
// console.log(+res + " ");
// }

