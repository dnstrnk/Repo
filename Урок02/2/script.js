let a = parseInt(prompt("First number"));
let b = parseInt(prompt("Second number"));
if ((a>=0 && b<=0)||(a<=0 && b>=0)) {
    alert(a + b);
} 
else if (a>=0 && b>=0) {
    alert(a-b);
} 
else {
    alert(a*b);
} 
