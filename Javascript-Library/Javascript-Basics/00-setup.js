
/*multi-line comment

function hello() {
    console.log('Hello world!');
}

hello() */

var num = 5; //in-line comment

/* Data types:
undefined, null, boolean, string, symbol, number, and object

undefined = not defined. i.e. a variable that has not been defined
null = nothing. Set a variable to be something, and that thing is nothing.
boolean = true or false.
strings = any sort of text in single or double quotes. 
symbol= an immutable primitive value that is unique.
number = a number not in quotes. 
object = can store different key value pairs.

*/

//Variables 

var myName = "Ayanna";

myName = 6;

let fullName = "Ayanna Miller";

//const lastName = "Miller";

/*three different ways to declare a variable:

var: Can be used throughout entire program (global)

let: Can only be used in the scope in which it is declared(local)

const: a variable that can never change.

*/

// declaring a variable: var a;

//declaring and assigning (assignment opperator "=") a variable: var b = 2;

//EX:
var a;
var b = 2;
console.log(a)

a = 7;
b = a;
console.log(a)

//EX declaring and initializing variable in same line. 
var a = 9 // a is declaring, assignment operator is initializing 

//more examples:

var a = 5;
var b = 10;
var c = "I am a ";

a = a + 1;
console.log(a);
b = b + 5;
console.log(b);
c = c + "String!";
console.log(c);

//Remeber to use proper camelCasing! Letter case matters in JavaScript! 

//adding numbers EX: 
var sum = 10 + 10;
console.log(sum);

//subtracting numbers EX:
var difference = 44 - 33;
console.log(difference);

//multipliying numbers EX:
var product = 11 * 11;
console.log(product);

//dividing numbers EX:
var quotient = 22 / 2;
console.log(quotient);

//incrementing (adding 1) a number EX:
var myVar = 12;
myVar++;
console.log(myVar);

//Decrementing (subtracting 1) a number EX:
var minusOne = 8;
minusOne--;
console.log(minusOne);

//Decimal Number (floating point numbers/ floats) EX:
var myDecimal = 5.7;

//Multipying decimal point/floating point numbers EX:
var productDecimal = 2.0 * 2.5;
console.log(productDecimal);

//Divide decimal point/floating point numbers EX:
var quotientDecimal = 4.4 / 2.2;
console.log(quotientDecimal);

//Finding a Remainder EX:
var remainder;
remainder = 11 % 3;
console.log(remainder);
//remainder operator is often used to find out whether a number is even or odd. 

//Compound assignment with augmented addition. Works for subtraction, division, multiplication.
var a = 3;
var b = 17;
var c = 12;

a += 12
b += 9
c += 7
console.log(a);
console.log(b);
console.log(c);

//Declaring String Variables EX:
//var firstName = "Ayanna";
//var lastName = "Miller";

//Escaping literal quotes in strings:
var myStr = "I am a \"double quoted\" string inside \"double quotes\".";
//back-slash before each quotation mark escapes the quote and JS no longer thinks it's the last character of the string. 
console.log(myStr);

//Quoting strings with single quotes:
//having a string start with a single quote often times will negate the need to escape a quote with a backslash. 
var myString = '<a href="https://www.example.com" target="_blank">Link</a>'
console.log(myString)

/* CODE OUTPUT 
\' single quote
\" double quote
\\ backslash
\n newline
\r carriage return
\t tab
\b backspace
\f form feed
*/

//escaping sequences in strings
var myString = "FirstLine\n\t\\SecondLine\nThirdLine";
console.log(myString);

//concatenating strings with plus operator
var ourStr = "I come first. " + "I come second.";
console.log(ourStr);

//concatenating strings with plus equals operator
var ourStr = "I come first. ";
ourStr += "I come second.";
console.log(ourStr);

//constructing strings with variables
var myName = "Ayanna";
var myStr = "My name is " + myName + ", how are you?";
console.log(myStr);

//Appending Variables to Strings with plus equal operator
var adjective = "worthwhile.";
var str = "Learning to code is ";
str += adjective;
console.log(str);

//Finding length of a string
var firstNameLength = 0;
var firstName = "Ayanna";

firstNameLength = firstName.length;
console.log(firstNameLength)

//Bracket Notation to find first character in string
//Bracket Notation is a way to get at a character within a specific index in a string.
//Starts counting at zero, known as zero based indexing or z-index
var firstLetterOfFirstName = "";
var firstName = "Hank";

firstLetterOfFirstName = firstName[0];
console.log(firstLetterOfFirstName);

//String Immutability
/*Strings are immutable meaning that they cannot be altered once created. This does not mean they cannot be changed
just that the individual characters of a string literal cannot be changed.*/
var myStr = "Jello World";
myStr[0] = "H"; //cannot do this because of string immunability. 
//instead it would be:
var myStr = "Jello World";
myStr ="Hello World";
console.log(myStr);

//Bracket notation to find the Nth character in a string
var lastName = "Hill";
console.log(lastName[2]);

//Bracket notation to find last character in string
//length minus 1 is going to be the last index of the string. 
var lastName = "Lovelace";
var lastLetterOfLastName = lastName[lastName.length - 1];
console.log(lastLetterOfLastName);

//Bracket notation to find the Nth-to-last character in string
//subract however much you want from the length of the string:
var firstName = "Ayanna";
var thirdToLastLetterOfFirstName = firstName[firstName.length - 3];
console.log(thirdToLastLetterOfFirstName)

var lastName = "Miller";
var secondToLastLetterOfLastName = lastName[lastName.length - 2];
console.log(secondToLastLetterOfLastName);

//Store multiple values with arrays
//arrays allow you store several pieces of data in one place.
var ourArray = ["John", 23]
var myArray = ["Ayanna", 1]

//Nested arrays
//when one of the elements in an array is another array that is called a "nested array" or a "multi-deminsional array"
var ourArray = [["the universe", 42], ["everything", 101010]];
var myArray = [["Bulls", 23], ["White Sox", 50]];

//Access array data with indexes
//can also use bracket notation to achieve this
var ourArray = [50,60,70];
var ourData = ourArray[0];
console.log(ourData);

var myArray = [50,60,70];
var myData = myArray [2];
console.log(myData);

