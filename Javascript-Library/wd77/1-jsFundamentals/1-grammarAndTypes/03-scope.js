/*
SCOPE
*/

/*
What is scope? 

JS has both LOCAL and GLOBAL scope
*/

//example 1: 
var x = 12; //this is in the global scope, it exists ANYWHERE

function scope() {
    // var x = 33;
    //var y =10;
    console.log(y);
} //anything between these brackets within this function is a local scope because it only exists 'local' to this 'power tool'

scope();//logs 33 (this is calling the function)
//console.log(y); //y is not defined because it does not exist outside of the function.
console.log(x);//logs 12


//any variables you write inside the function only exist in that function

//EXAMPLE 2
var x = 12;

function scope() {
    x = 33; //we don't define a new variable we just reassign x's value from 12 to 33.
    console.log(x);
}

scope() //33 (our function/power tool is called scope. This runs what is inside the function
console.log(x) //33
//Both are 33 and here's why:
//x is globaly scoped because it's outside of the function, but it can be accessed in and outside of the function. 
//then inside of the function we reassign x's value to 33 (x is still globaly scoped though)
//so the console.log outside of the function still says 33 because x is global

//EXAMPLE 3
var x =1; 

function scope(){
    var x = 2;
    function scopeInner (){
        var x = 3; 
        console.log(x); //first console.log to run = 3
    }
    scopeInner();
    console.log(x); // second console. log to run = 2 because it's outside that inner most function so var x = 3 is not longer available.
}
scope();
console.log(x); //last console.log to run = 1 because we are now in the global scope so everything in the brackets is unavailable. 
                //only thing we can run is that var x = 1

//EXAMPLE 4 CONTRASTS WITH 5:
var x = 12

function scope(){
   var x = 33; 
   if (true){
      let x = 45;
      console.log(x); //45
   } 
   console.log(x); //33
}
scope();
console.log(x); //12

//EXAMPLE 5 CONTRASTS WITH 4:
var x = 12;

function scope(){ //function scope
    var x = 33;
    if (true){ //block scope
        var x = 45;
        console.log(x); //45
    } //block scope
    console.log(x); //45 -> 'var' doesn't obey 'block' scope
} //function scope
//var only cares about the curly braces of a function scope

scope();
console.log(x); //12



