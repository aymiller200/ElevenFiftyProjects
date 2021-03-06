//First thing we need to do is be able to put info into the <ul>
//to access <ul> we must use querySelector like this: 
// let starWarsPeopleList = document.querySelector('ul');
//next, we need to somehow GET information from out star wars api, and then format it to be displayed on out HTML page. Let's start w/ GET: This fetch is going to go GET information from the star wars api people endpoint. Since we didn't specify a method, it will perform a GET request to the 'people' endpoint of the API.

// fetch('https://swapi.dev/api/people')
// .then(function(response){
//     console.log(response);
// })

//!Note: This shows up in the console of the inspect tool on the page.

//How to we info back from our fetch? 
/* fetch starts a Promise. 
    -we can use the then() method to return that Promise.
    (then() takes up two arguments: callback functions for success and failure cases of the Promise).
    -the .then after the fetch is just using the success argument and calling it response. If successful we'll get a response from the API, and then can do stuff with it.
*/ 
/*
!AFTER CONSOLE.LOG
    -After console log, should see a bunch of info including a body and more things that we can't currently see.
    -To access this info we can use json()
        -json(): takes a Response stream and reads it to completion. 
        -returns a promise that resolves with the result of parsing the body test as JSON. 
    -json() basically reads the bodsy so we can use it and returns a promise once it's done parsing the body as JSON. 
    -Now, we can call .json() on the response, and then use another ....then() after the Promise resolves, so that we can use the json that we get back. 
*/

// fetch('https://swapi.dev/api/people')
// .then(function(response){
//     return response.json();
// })
// .then(function(json){
// console.log(json)
// })

//gotten our info back and used .json(). After that console.log, we see an object w/ properties like count, nect, previous, and results. 
//the results is an array of 10 objects, and once opened we can see that it contains our people information. We can capture than information in a variable.

// fetch('https://swapi.dev/api/people')
// .then(function(response){
//     return response.json();
// })
// .then(function(json){
//     let people = json.results;

//     for(p of people){
//         let listItem =document.createElement('li');
//     }
// });

/*
Now that we get back an array of objects we need to use a loop. 
    -for of loop will allow us to print the objects in our console.log(for in would just grabs the proptery, which in an array is the index/number)
    -in this for of loop we are going to creat the elements we need to display to the front end. Since we have a ul in our HTML page, we need to create li of all of our data. 
    -can creat list itesm in JS by using document.createElement(), which takes a parameter of the tag to create. 
*/

/*
Next, we create a list item for every object we have in our array. Then, we need to put some text in our list item from our API. 
    -to change text inside of an HTML tag we use .innerHTML()
innerHTML(): A method that can be used to grab the value of the inner HTML value.
    -we're specifically going to a <p> tag with the name inside. 
    -So, in our for of loop we're referring to each object a p to allow us access to the name via p.name.
*/

// fetch('https://swapi.dev/api/people')
// .then(function(response){
//     return response.json();
// })
// .then(function(json){
//     let people = json.results;

//     for(p of people){
//         let listItem = document.createElement('li');
//         listItem.innerHTML = '<p>' + p.name + '</p>';
//         starWarsPeopleList.appendChild(listItem);
//     }
// });

/*
Now that we have our list item with the name inside of it, we just need to place all of these list items inside of the unordered list. 
-we have a variable for that unordered list already called starWarsPeopleList, and we can just use the .appendChild() method, which adds a node to the end of the list of children of a specified parent node.
-To accomplish this we add a child of our list item to our parent unordered list. 
*/

//!All the code put together: 
let starWarsPeopleList = document.querySelector('ul');

fetch('https://swapi.dev/api/people')
.then(function(response){
    return response.json();
})
.then(function(json){
    let people = json.results;

    for(p of people){
        let listItem = document.createElement('li');
        listItem.innerHTML = '<p>' + p.name + '</p>';
        starWarsPeopleList.appendChild(listItem);
    }
});