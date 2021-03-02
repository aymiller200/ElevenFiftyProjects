/*
TERNARIES
*/
//Ternaries are a sleak and elegant way to do this conditional logic that we'v seen for if/else statements and switches


//let x = 6;
let x = -6;

x > 0 ? console.log('x is positive') : console.log('x is negative');
//'?' divides the conditional from the code we want to run if that conditional is true. Tells you that you havecan expression to check before it and code to run after it.
// ':' = else. Next conditional or block of code divided by colon

/*This is doing what an if/else conditional would do
EX:*/
if (x > 0) {
    console.log('x is positive');
} else {
    console.log('x is negative');
}

// EX 2
let greeting = 'salutations!';

if (greeting.length > 10) {
    console.log('that is a long greeting!');
} else if (greeting.length == 10) {
    console.log('the greeting is exactly 10 characters!');
} else {
    console.log('what a normal greeting');
}

greeting.length > 10 ? console.log('that is a long greeting!') :
greeting.length == 10 ? console.log('the greeting is exactly 10 characters!') :
console.log('what a normal greeting');


