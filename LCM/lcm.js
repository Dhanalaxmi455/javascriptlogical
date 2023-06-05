var a=+prompt("enter the value of a");
var b=+prompt("enter the value of b");
var num=a;
if(b>a)
num=b;
while(num>0)
{
if((num%a==0)&&(num%b==0))
{
    alert("the number is : "+num);
    break;
}
num++;
}


