/*
FUNCTIONS
*/

//General Ideas: at their broadest level, functions do the following
//1) They take some input which the function with handle/process. 
//2) They process the input given to them. 
//3) They usually but not always, return some value. 
//4) They can be invoked (used) as many times as we want, cutting down on code repitition

//EXAMPLE 1:
function newFunc(num) {
    return num + 1; 
}

console.log(newFunc(7));
console.log(newFunc(10));
console.log(newFunc(11));
console.log(newFunc(-2));


//EXAMPLE 2:
function sentence(firstName, lastName) {
    return `My first name ${firstName} and my last name is ${lastName}`;
}

console.log(sentence('Ayanna', 'Miller'));
console.log(sentence('Cris', 'Matson'));
let superImportantSentence = sentence('Nick', 'Underwood'); //This variable superImportantSentence is the return string 'My first name is Nick
                                                            // and my last name is Underwood
console.log(superImportantSentence);

//you can pass objects, arrays, and even other functions to functions. 
//EXAMPLE 4: 
//let's build a function that takes a complex type--an array in this case, and console.logs each
// item in the input array. 

let arr = [1, true, {key: 'string'}, [0, false, null], 'heya!'];
let arrTwo = [5,6,7,8,9,10];

function iteratorFunc(inputArr){ //when a function doesn't return anything it has a 'side-effect'. When functions or things have side-effects it means there's some alternative acrtion to a simple return. 
    for (let element of inputArr){
        console.log(element);
    }
}
iteratorFunc(arr);
iteratorFunc(arrTwo);



