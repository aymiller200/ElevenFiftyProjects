/*
TYPES

1-grammarAndTypes
  05-types.js
*/

//Boolean
var on = true; //dark blue is a reserved word that hase special meaning in js. 
console.log(on);

let off = false;
console.log(off);

//Boolean can represent: true/false, yes/no, on/off, 0/1

//Undefined
/* 
Undefined usually means a variable has been declared but it has not
 been assigned a value. A bucket we have forgotten to fill.
*/

let grass;
console.log(grass);

var undef = undefined;
console.log(undef);

//Null
/* 
Null means a variable has been declared and assigned a value of null. A bucket made empty on purpose.
*/
var empty = null;
console.log(empty);

/* 
Null and undefined both represent variables with no value indside. Think of it this way:
Null values are for gag gifts that are boxes intentionally given with nothing inside
(because that's the gag).

Undefined values are gifts given when the person giving the gift has forgotten to 
put the gift inside (oops!).
*/

//Numbers
let myLiteralAge = 90;
console.log(myLiteralAge);

let precise = 999999999999999;
console.log(precise);

let rounded = 9999999999999999; //numbers do break down at a certain point in js
console.log(rounded);

let notQuite = 0.2 + 0.1;
console.log(notQuite);

let numbersAreHard = (0.2 * 10 + 0.1 * 10) / 10;
console.log(numbersAreHard);

//Strings
//String is any value within quotes; JS spits out the value within the quotes. 
let stringOne = "Double quotes";
let stringTwo = 'Single quotes';
console.log(stringOne, stringTwo);

//String concatentation vs. addition
let first = 1050 + 100;
let second = '1050' + '100';

console.log(first);
console.log(second);

let third = 1050 + '100';//treats number as a string through type coercion 
console.log(third);
console.log(typeof third);//gives you the data type of variable

//Interpolation
//lets you use strings with dynamic content (they require backticks `)

//Example 1:
let age = 32;
let string = `my age is: ${age}`;//what's in curly braces is referred to dynamic content
console.log(string);

//Objects
/*  
What is an object?

An object is a container that stores property names and their values.
(it can hold multiple data types)

Denoted by {}
Have keys and values--color (key): 'blue' (value). 
Separated with a colon, each key--value pair is separated with a comma.
*/

let hulk = {
    color: 'green',
    age: 42,
    isStrong: true,
}

console.log(hulk);
console.log(hulk.age);//use dot notation to get at a specific part of the object.
console.log(typeof hulk);

//Arrays
/*
Arrays store multiple values in an ordered way(main difference between 
    an object and an array). They, too, hold multiple data types.

Denoted by []
Has Values ('blue', 'yellow'), separated by commas
*/
//array indexing           0                    1                     2
var stepsToBrushTeeth = ['uncap toothpaste', 'squeeze toothpaste', 'rinse brush',
//    3        4
    'brush', 'clean toothbrush']
console.log(stepsToBrushTeeth);
console.log(stepsToBrushTeeth[4]);//use square bracket notation to get at items within an array
console.log(typeof stepsToBrushTeeth);//the reason it outputs object is objects are like a template which arrays use to be built behind the scenes
                                      //object=parent of array
