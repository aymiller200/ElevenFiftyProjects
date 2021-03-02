//!API - Application Programming Interface
/* Before we can understand APIs better, we first need to understand ...
* ********

!PROMISES
    -A promise is a way that we can handle asynchronous code.

    -Asynchronous code: Doesn't always work top to bottom like the rest of the code we have worked with so far. 

Promises has one of three states: 
    -Pending: When the data has not been processed fully yet. 
    -Success: If the data has been processed and we got the data back. Good data -> resolves
    -Fail: If there's a break along the way. Breaks in data -> rejects

* ********
*/
//      Then we call this function (callback function)  <-  1 second transpires
setTimeout(() => console.log('this is a test of timeouts!'), 1000);   // <--Will run  function after a set number of milliseconds have transpired. 

let promise = new Promise(function(resolve, reject){
    setTimeout(() => {
        if (true){
            resolve('success');
        } else {
            reject('failure');
        }
    }, 3000);
})

promise
    .then(success => console.log(success)) //.then handles resolved promise. No semicolons after .then
    .catch(error => console.log(error)) //error = 'failure'. Runs failure when the if is false instead of true.

//all of the above code is on its own internal clock (3000 miliseconds)
//whereas the console.log below runs immediately because it's not running these asynchronous requests and runs top to bottom

console.log('this code is after our promise and .then chain!')

function playFunc(){
    return 5;
}

console.log(playFunc());