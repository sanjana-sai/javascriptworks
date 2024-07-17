//lastdigitnum max


var num1=167;

var num2=872;



var lastdigit1=num1%10;

var lastdigit2=num2%10;

if (lastdigit1>lastdigit2){

    console.log(num1);
}
else {

    console.log(num2);
}

// ternary operator

// condition? true expression:false expression

console.log(num1%10 >num2%10 ? num1 :num2);

