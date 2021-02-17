/*
LOOPS
*/

//Loops allow you to repeat code for x number of times all at once while functions let you repeat code on demand (when you order a reuse of code you have already written)

/*
Loops offer a quick and easy way to do something repeatedly. 

Many kinds of loops, but they all do roughly the same thing:
    -For statement
    -do while
    -while
    -labeled
    -break
    -continue
    -for in
    -for of
    -.forEach (just for arrays)
    -.map (just for arrays)
*/

//loop structure: a)creation on an indexing variable.  b) a run condition.  c)change to the indexing variable

//count to ten from 0 and log the numbers: 
for (let i = 0; i <= 10; i++) {
    console.log(i);
}

//loops can run infinitely
// for (let i = 0; ; i++){
//     console.log(i);
// }

//counts to -25 by -3, staring from 2, logs the numbers
for (let i = 2; i >= -25; i -= 3) {
    console.log(i);
}

//display letters in a name individually
let name = 'Kinkade';

for (let i = 0; i < name.length; i++) {
    console.log(name[i]);
}

//for loops can use lots of variables:
let start = 2; //start is where our index variable 'i' begins
let stop = Math.floor(Math.random() * 30); //how many times we're going to stop using index variable
let increment = 3;

for (let i = start; i <= stop; i += increment){
    console.log(i);
} //output changes each time because our stop is random

/* Math
    -built in js object with a random method
    -'random' gives us back a number b/t 0 and 1 (so it can be a decimal)
    -'floor' shaves off the decimal of the number after it is multiplied by 30. So we can only get back whole numbers.
*/
