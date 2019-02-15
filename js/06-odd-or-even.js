var i, output;

for (i = 0; i < 16; i++) {
    output  = String(i);
    output += (i % 2) ? " is odd" : " is even";
    console.log(output);
}