/*
ARRAYS
*/

/* What is an array? 
    -has [] brackets
    -can hold multiple datatypes
    -arrays can list datatypes in an ordered, numbered way
*/

let students = ['Tony', 'Marshall', 'Rhys', 'Rays', 23, true, ['Ryan', 'Iesha']];
//hidden keys:    0       1           2        3     4    5      6
//these are basically key value pairs, but the keys are hidden. The console.log 
//comes back as an 'object' because of this.
console.log(typeof students); //typeof doesn't tell me my variable is an array -> object
console.log(students instanceof Array); //instanceof tells me my array is an array
console.log(students[2]);
console.log(students[1]);
console.log(students[6]);

let name = students[6][1];
console.log(`Hello ${name} you look nice today`);

//recall for-of loop -> Gives the values of the array
let food = ['Pecan Pie', 'Shrimp', 'Quesadilla', 'Cheese Cake', 'Hotdog'];

for (f of food){
    console.log(f+' is amazing!');
}

//Array methods (methods are built in functions to JS that we can use as long as we have the appopiate type)
food.push('Pizza');
console.log(food);
//push lets us add elements to the end of an array that already exists.

food.splice(1, 1, 'Bananas');
console.log(food);
//splice let's us take an array, remove some stuff, and add elements in its place.
/*Splice takes three arguments:
    1) Where we want to do the insertion. 
    2) What we want to remove. In the example above, we are inserting at the first position and taking out 'Shrimp'.
    3) Last argument is what we want to replace 'shrimp' with. 
*/
food.splice(2, 0, 'Sweet Potato Pie');
console.log(food);
//splice asks for an insertion point, how many things to remove, then the item or items to add

food.pop(); 
console.log(food);
//pop removes the last element of the array

food = food.slice(2,5);
console.log(food); //2nd item of the food array is 'SweetPotato Pie' and we STOPPED and the 4th item, 
                   //so the console.log gives us 'Sweet Potato Pie' and 'Quesadilla'
//Slice: First argument is first element to slice from the array, while the second argument is the stop
//position (not to be included)


//forEach allows us to iterate with loops specifically, and we can directly grab both the elements 
//and their index numbers.
//callback function: a function that runs when some other code has already been processed.
let food = ['Pecan Pie', 'Shrimp', 'Quesadilla', 'Cheese Cake', 'Hotdog'];

food.forEach((f) => console.log(f));
//forEach is looping through the elements of the array without us using forIn, forOf, or traditional for loop

food.forEach((food, index) => { //the code to be repeated is an arrow function grabbing the food and the index numbers.
    console.log(food);
    console.log(index);
})

food.forEach((food, index) => { 
    console.log(`The ${food} food in our array is at position ${index}.`)
})

let movies = ['300', 'Snow White', 'The Phantom Menace', 'The Watchmen', 'The Sound of Music'];

movies.push('The Force Awakens');
console.log(movies);

movies.splice(3, 1, 'The League of Extraordinary Gentlemen');
console.log(movies);

movies.forEach(movie=>console.log(movie));
console.log(movies.length);
//The dot notation in Javascript lets us grab methods(like built in functions), properties (like key value pairs) for all different types of things

/*let's do the following with an array:
    1)Chack if we are working with an array.
    2)Flip the values within the array (what was in index 4 is now in 0, 3 to 1, etc)
    3)Using a method only let's print the values of a newly arranged array. 
*/

let arr = new Array(1,2,3,4,5);
console.log(arr);

if (arr instanceof Array) {
    let revArr = arr.reverse();
    revArr.forEach(numbers => console.log(numbers));
}

//When we use forEach we take a callback function where the first argument is an element of the array
//and the second argument is the number of that element.

