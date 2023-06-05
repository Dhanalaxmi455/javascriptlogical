var num=+prompt("enter the number");
var result=0;
while(num>0){
    a=num%10;
    result=result*10 + a;
    num=Math.floor(num/10);
  
}
console.log(result);