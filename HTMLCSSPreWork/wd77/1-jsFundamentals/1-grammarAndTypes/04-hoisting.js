/*
HOISTING
*/


//EXAMPLE 1:
console.log(scissors);
var scissors = 'blue';

//EXAMPLE 1 BREAKDOWN:
var scissors; //the variable gets hoisted to the top
console.log(scissors)
scissors = 'blue' //but the assignment still happens later even though the variable still got hoisted

// EXAMPLE 2:
function hoistTest(){
    console.log(testVar);
    var testVar = 10;
    console.log(testVar);
}

hoistTest();
//there is hoisting inside of functions just like inside global scope. The first console.log comes back as undefined
// because the variable gets hoisted to the top, but the assignment happens after. console.log(testVar) comes back as 10. 

//EXAMPLE 2 BREAKDOWN: 
function hoistTest(){
    var testVar;
    console.log(testVar);
    testVar = 10;
    console.log(testVar);
}

hoistTest();