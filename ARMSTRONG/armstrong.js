var num=prompt("Enter any number");
var temp=num;
var sum=0,rem;
while(temp>0)
{
 rem=temp%10;
  sum+=(rem*rem*rem);
  temp=parseInt(temp/10);
} 
if(sum==num)
{
 alert("THE NUMBER IS AMSTRONG");
}
else{
alert("THE NUMBER IS NOT AMSTRONG");
}
