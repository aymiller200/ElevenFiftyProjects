/*
? fetch('http://taco-randomizer.herokuapp.com/random/?full-taco=true')
?    .then(res => res.json())//callback function, concise body(no return required), by default res.json() is returned back
?    .then(json => console.log(json))
*/

/*
? function slowResult(){
?    fetch('http://taco-randomizer.herokuapp.com/random/?full-taco=true')
?    .then(res => res.json())
?    .then(json => console.log(json))
? console.log('this is a message!') //this runs first because fetch and .then return promises which are asynchronous
? }

? slowResult()
*/

/*
* ******
To have the function run before the console log you would use async and await.
* ******
!ASYNC: 
    -A word that you can prepin to a function 

!AWAIT: 
    -A word that you can prepin to anything that returns a promise

* Async returns a promise. Await works with anything that returns a promise. 

*/

//when you prepin async to a function, and you call your function, your function will be in a pending status until the inside of the function resolves or rejects. 
//Await can only be used in conjunction with async. Await says "AWAIT the fetch, the jsonification og the result and the json console.log BEFORE you do anything else". So, it turns our asynchronous process into a linear process.

/*
? async function slowResult(){
?  await fetch('http://taco-randomizer.herokuapp.com/random/?full-taco=true')
?    .then(res => res.json())
?    .then(json => console.log(json))
? console.log('this is a message!') 
? }

? slowResult() 
this will call the function, but not instantaneously (because of async and await)
*/

async function slowResult(){
    await fetch('http://taco-randomizer.herokuapp.com/random/?full-taco=true')
      .then(res => res.json())
      .then(json => {json.lolProperty = 'this is a random property!'; return json;})//adds a key value pair to the taco object
      .then(json => console.log(json))
  console.log('this is a message!') 
  }
  
  slowResult()

  /* 
  * *******
  !FURTHER EXPLANATION
  * *******
  -on line 48 we are using fetch to talk to a server (the link in the paranthesis after the fetch)
  -The server gives us something back on line 49 (the 'res'), and gives it back as something that is not easy to play with, so we turn it a javascript format (res.json())
  -and then we can manipulate our json from there
  */

  /* 
  * ******
  !RESTFUL SERVER
  * ******
  -REST stands for: Representationl State Transfer
    -Allows for the server, database, and client all to function independantly. 
    -Allows you to manage, maintain, and scale those tings individually in a way that is better for the overall design of your app.
  -Client: the user facing side of the software. The visuals, buttons, links, etc. 
  -Servers job is to interperet network requests coming from the client and route those network requests appropiately
  */
