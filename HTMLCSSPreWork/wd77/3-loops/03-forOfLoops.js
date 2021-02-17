/*
FOR OF LOOPS
*/

//depend upon something being true for the object it is trying to work through

//of requires that your 'thing' you're looping thorugh be iterable
// --that means it needs to be numbered

// let student = {name: 'Peter', isAwesome: true, degree: 'javascript', week: 1};  <-----This won't work with a for-of loop

// for (item of student){
//     console.log(item);
// }

let catArray = ['tabby', 'shorthair','burmese', 'mainecoone', 'ragdoll'];

for (cat of catArray) {
    console.log(cat, 'says meow');
}

//for-of grabs the value of the 'thing' not the number or the key for that 'thing'