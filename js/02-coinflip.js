/*eslint-env browser*/

var coinFlip = Math.floor(Math.random() * 100);
var choice = window.prompt("Please select Heads or Tails:");
var result = coinFlip < 50 ? "heads" : "tails";
var output;

switch(choice.toLowerCase()) {
    case "tails" :
    case "tail" :
    case "t" :
        choice = "tails";
        break;
    case "heads" :
    case "head" :
    case "h" :
        choice = "heads";
        break;
}

output  = "The flip was " + result;
output += " and you chose " + choice;
output += (choice === result) ? "...you win!" : "...you lose!";

window.alert(output);