
const string = prompt('Enter the string: ');
const len = string.length;
for (let i = 0; i < len / 2; i++) {
if (string[i] !== string[len - 1 - i])
 {
    alert('It is not a palindrome');
}
else{
alert('It is a palindrome');  
}
}
// var num=prompt("enter the table");
// var range=prompt("enter the range")
// for(i=1;i<=range;i++){
//     document.write(`${num}*${i}=${num*i}`);
//     document.write("<br>");
// }

