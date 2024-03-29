// 1. Write a program that takes a positive integer from user &
// display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number

var input = prompt("Enter a Positive Integer:");
if (input > 0) {
  document.write("<h2>Number : " + input + "</h2>");

  var roundoff = Math.round(input);
  document.write("Round Off Value Of The Number :" + roundoff + "<br/>");

  var floorfunc = Math.floor(input);
  document.write("Floor Value Of The Number :" + floorfunc + "<br/>");

  var ceilfunc = Math.ceil(input);
  document.write("Ceil Value Of The Number :" + ceilfunc + "<br/>");
} else {
  alert("Please Enter A Positive Integer");
}

// 2. Write a program that takes a negative floating point
// number from user & display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number

var input = prompt("Enter a Negative Integer:");
if (input < 0) {
  document.write("<h2>Number : " + input + "</h2>");

  var roundoff = Math.round(input);
  document.write("Round Off Value Of The Number :" + roundoff + "<br/>");

  var floorfunc = Math.floor(input);
  document.write("Floor Value Of The Number :" + floorfunc + "<br/>");

  var ceilfunc = Math.ceil(input);
  document.write("Ceil Value Of The Number :" + ceilfunc + "<br/>");
} else {
  alert("Please Enter A negative Integer");
}

// 3. Write a program that displays the absolute value of a
// number.
// E.g. absolute value of -4 is 4 & absolute value of 5 is 5

var num = prompt("Enter Any Number : ");
document.write("<br> Absolute Value Of The Given Number Is : " + Math.abs(num));

// 4. Write a program that simulates a dice using random()
// method of JS Math class. Display the value of dice in your
// browser.:
var dice = Math.random();
dice = dice * 6 + 1;
var roundofff = Math.round(dice);
document.write("<br> <h5> Value Of Dice : " + roundofff + "</h5>");
