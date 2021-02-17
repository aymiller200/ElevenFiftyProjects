/*
FOR IN LOOPS
*/

//depend upon something being true for the object it is trying to work through
// in does not require that the 'thing' you loop through be numbered

let student = { name: 'Peter', awesome: true, degree: 'javascript', week: 1 };

for (item in student) {
    console.log(item);
    console.log(student[item])
} //this for loop lets item represent the keys in our object

let catArray = ['tabby', 'shorthair', 'burmese', 'main coon', 'ragdoll'];

for (cat in catArray) {
    console.log(cat);
    console.log(catArray[cat]);
}

//write a for-in loop that capitalizes the first letter of a name

let instructor = 'pAul';
let capName;

for (n in instructor) {
    if (n == 0) {
        capName = instructor[n].toUpperCase();
    } else {
        capName += instructor[n].toLowerCase();
    }
}
console.log(capName);

let myName = 'aYaNNa';
let better;

for (cap in myName) {
    if (cap == 0) {
        better= myName[cap].toUpperCase();
    } else {
        better += myName[cap].toLowerCase();
    }
}
console.log(better);



