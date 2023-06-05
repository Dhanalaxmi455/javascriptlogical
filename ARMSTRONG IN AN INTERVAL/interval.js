var low=prompt("enter the low value");
var high=prompt("enter the high value");
for(let i=low;i<=high;i++){
let num=i.toString().length;
let sum=0;
temp=i;
while (temp>0){
let rem=temp%10;
sum+=rem**num;
temp=parseInt(temp/10);
}
if(sum==i){
  console.log(i);
}
}

