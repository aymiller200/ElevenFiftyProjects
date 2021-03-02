// const header = document.getElementById('header');
// console.log(header);

// header.style.color = 'green'
// header.innerText= "Hello World"

// const errorList = document.getElementsByClassName('error-list');
// console.log(errorList)

// errorList[1].innerText='I changed error 2'
// Example 1 looping
// for (let i = 0; i < errorList.length; i++) {
//     errorList[i].style.color = 'red';
// }

// Examle 2 looping
// for(error of errorList) {
//     error.style.color = 'green'
// }

// /*Example 3 looping forEach
//  errorList.forEach(error => error.style.color='purple'); <--WILL NOT WORK! errorList is similar to an array, but not an actual 
//                                                          array
// */

// const tags = document.getElementsByTagName('p');
// console.log(tags);

// tags[0].innerText='Anything but lorem ipsum';

// const li = document.getElementsByTagName('li');
// console.log(li);

// li[0].style.fontStyle ="italic";
//  li[1].style.fontStyle ="italic";

// OR 

// for (let i = 0; i < li.length; i++){
//     li[i].style.fontStyle = "italic";
// }

// const header = document.querySelector('h1')
const header = document.querySelector('#header')
console.log(header);

const errorList = document.querySelector('.error-list');
console.log(errorList);

//can grab the second list item by copying the selector from the inspect tool on chrome. 
const errorList2 = document.querySelector('body > div > ul > li:nth-child(2)')
console.log(errorList2)

const headerTags = document.querySelectorAll('h1');
console.log(headerTags);

console.log(headerTags[1]);

headerTags.forEach((h) =>{
    h.style.color = 'blue'
})

const listItems =document.querySelectorAll('.error-list')

listItems.forEach((li) =>{
    li.style.fontStyle = 'Italic'
})
