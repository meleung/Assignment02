/*eslint-env browser*/
var num1, num2, output;

num1 = parseInt(window.prompt("Enter the first number:"));
num2 = parseInt(window.prompt("Enter the second number:"));

output = num1 > num2 ? num1 : num2;

window.document.write(output);