/*esline-env browser*/
var num = parseInt(window.prompt("Please enter a number:"));
var i;

for (i = num; i >= 0; i--) {
    console.log(i);
    window.document.write(String(i) + "<br>")
}