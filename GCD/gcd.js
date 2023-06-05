var a=+prompt("enter the value of a ");
var b=+prompt("enter the value of b ");
// var num;
// for(var i=1;i<=a && i<=b;i++)
// {
//     if(a%i==0 && b%i==0){
//     num=i;
// }
// }
// alert("the value is : "+num);

while(a!=b){
    if(a>b){
        a=a-b;
    }
    else{
        b=b-a;
    }
}
alert("the value is : "+b);