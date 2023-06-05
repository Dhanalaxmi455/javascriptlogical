var lnum=parseInt(prompt("enter the first value")) 
var num=parseInt(prompt("enter the last value")) 
var i=lnum;
for(i=lnum;i<num;i++)
{
    var flag=0;
    for(j=2;j<i;j++)
    {
        if(i%j==0){
            flag=1;
            break;
        }

    }
    if(i>1 && flag==0){
        console.log(i);
    }
}