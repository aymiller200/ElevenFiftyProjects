const baseURL = 'https://api.spacexdata.com/v2/rockets';

const searchForm = document.querySelector('form');
const spaceShips = document.querySelector('ul');

searchForm.addEventListener('submit', fetchSpace); //event listeners need the html you are listening to and the event for that html.

function fetchSpace(e) {
    e.preventDefault();

    fetch(baseURL) //fetch returns a promise which has a delayed response.
        .then(result => result.json()) //also returns a promise
        .then(json => {
            console.log(json);
            displayRockets(json);
        })
        .catch(err => console.log(err));
}

function displayRockets(rockets) {
    rockets.forEach(r => {
        let rocket = document.createElement('li');
        rocket.innerText = r.cost_per_launch;
        spaceShips.appendChild(rocket) //based on whatever html element we have (in this case the ul) appendChild will add a new child node inside.
    })
}

/*

* ******
!EXPLAINED
* ******

-displayRockets gets called on line 15.
    -Then gets defined starting line 19.
    -When displayRockets gets called it gets passed the json array of rocket objects(that we saw in the console with our inspect tool)
    -'rockets' on line 19 is how that rocket object array is defined within the displayRockets function.
-We use the .forEach on line 21 which loops through all 4 rockets
    -Within the .forEach we call each rocket 'r'
    -'r' represents one of the four rockets in the data that we got from Space X (the array of objects in the console of our inspect tool)
-In line 21 we made a new list item (li) and we stored that list item in a variable called rocket.
    -We then set the text of the list item to be the name of the rocket, found in the rockets object.
-That connection between the HTML and Javascript happens on line 22
    -We take 'rocket' which is a Javascript variable but refers to an HTML list item. 
    -We set the innerText which is an HTML attribute that we have access to (lots of these that we have access in JS) to cost_per_launch which is a JS thing that's being put into our HTML.
-FINALLY spaceShips our ul on line 23 gets each of the rocket items one by one with .appendChild.
-If there an issue the fetch will break

* ******* 
Two thing need to happen for fetchSpace to be fired:
    1) Must be interacting with the form (searchForm)
    2) Must commit a submit action within that form
* *******

The only reason we grab the event deatils(e) of the submit action on line 8 was so we would preventDefault action of the posting data (grab something from the user and post to a server)

* ******
!FETCH: 
-is a built in function into Javascript, so we do not need to define that. 
* ******

*/