var first= +prompt("enter first value");
var second= +prompt("enter second value");
var choice=prompt("enter your choice");
var result;
switch(choice)
{
    case "1":result=(first+second);
   alert("THE SUM IS: "+result);
    break;
    case "2":result=(first-second);
   alert("THE DIFFERENCE IS: "+result);
    break;
    case "3":result=(first*second);  
     alert("THE PRODUCT IS: "+result);
    break;
    case "4":result=(first/second);
   alert("THE QUOTIENT IS: "+result);
    break;
    case "5":result=(first%second);
   alert("THE REMAINDER IS: "+result);
    break;
    case "6":result=(first**second);
   alert("THE POWER IS: "+result);
    break;
    default:
    console.log("no data found");
   alert(+result);
}