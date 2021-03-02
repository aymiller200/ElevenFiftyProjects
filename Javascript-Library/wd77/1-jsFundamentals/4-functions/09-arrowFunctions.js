/*
ARROW FUNCTIONS
*/

//normal function declaration (usually for named functions)
function coffee(){
    return 'coffee is good';
}

//normal functions expression (usually for unnamed functions)
let tea = function(){
    return 'tea is healthy'
}

console.log(coffee());
console.log(tea());

//arrow functions are always anonymous (unnamed).
//arrow function expression
let hotChocolate = () => {  //rather than using the keyword 'function' it uses and arrow b/t curly braces and parans for the function definition. 
    return 'hot chocolate is king';
}

console.log(hotChocolate())

let animals = (kittens, puppies) => {
    return `I have ${kittens} cat(s) and ${puppies} dog(s)`;
}

console.log(animals(20, 50));
console.log(animals(0, 0));

//arrow functions do NOT get hoisted. 


//concise vs. block body:
//concise:
let apples = x => `there are ${x} apples`; //can exclude parenthesis if there is only one argument. 
                                           //If you have something quick you want to return right away, you can so do w/o
                                           //the use of the return keyword and w/o the use of curly braces. 

console.log(apples(10))

//block body:
let bananas = (x) => {
    return `there are ${x} bananas`;
}

console.log(bananas(5));

//in a block body arrow function you must use the return keyword. Return must be explicitly written. 


let func = () => 'hi';

console.log(func());

let secondFunc = ()
=>
'hi';
console.log(secondFunc()); //this returns an error because the arrow must directly follow the parenthesis or the argument. 