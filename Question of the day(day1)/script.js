//problem of the day (day1)
//Write a programe that comparing three numbers and get the largest number (user should enter the number)

var num1 = prompt("Enter number 1");
var num2 = prompt("Enter number 2");
var num3 = prompt("Enter number 3");



if (num1 > num2 && num1 > num3) {
  console.log(num1 + " is the largest number.");
} else if (num2 > num1 && num2 > num3) {
  console.log(num2 + " is the largest number.");
} else {
  console.log(num3 + " is the largest number.");
}





