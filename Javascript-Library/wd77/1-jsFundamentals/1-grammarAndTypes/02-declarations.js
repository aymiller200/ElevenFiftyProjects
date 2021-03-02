/*
VARIABLES

1-grammarAndTypes
  02-declarations.js
*/

//What is a variable? 
var a = 1; //bucket is "a" and content is "1"
var b = 2; //contents can be anything from numbers, to strings (quoted text), true/false values (booleans), etc. 
console.log(a + b);

//notes on naming variables
//1) A variable must begin with a letter, underscore, or dollar sign. 
//2) Numbers may follow the above variable but cannot come first. 
//3) Javascript is case sensitive--'hello' and 'Hello' are different variables. 


/*
DECLARATIONS, INITIALIZATIONS, ASSIGNMENT
*/

/*
Declarations refer to when we 'declare' a variable (announcing a variables presence and giving it a name).

Initializations refer to when a variable is assigned a value. 

Assignment refers to giving a variable a value. This can be after initialization. 
*/

var x;
console.log('Declaration 1:', x); //undefined is what you see when you declare a variable but the contents are empty. 

x = 10;
console.log('Initialization 1:', x); //10

x = 33;
console.log('Assignment 1:', x);//33

var y;
console.log(y);

y = 'hello';
console.log(y);

y = 'you are my fren';
console.log(y);

/*
Var, Let, and Const:

Var = 'old' keyword for variables
Let = 'new' keyword for variable (introduced with ES 6)
const = 'new', declares unchangeable variables (constant, bucket with a lid)
*/

let tonight = 'great!'; //let will give you more predictable behavior. 
const elevenFifty = 'Amazing!';
console.log(tonight,elevenFifty);

tonight = 'lovely!';
console.log(tonight, elevenFifty);

//elevenFifty = 'super!';

