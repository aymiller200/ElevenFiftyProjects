/*
SWITCH STATEMENTS
*/

let friend = 'Kenn';
//Switch statements are just a different more sleak way to build out conditionals
switch (friend) {
    case 'Tom':
        console.log('Hey Tom, where is my bread?');
        break;//without a break all the other code in switch would run as soon one of case conditions is met.
    case 'Kenn':
        console.log('Hey Kenn, why is your dog so big?');
        break;
    case 'Alex':
        console.log('Hey Alex, want to play some magic?');
        break;
    default: //if all other cases don't evaluate to true this will run.
        console.log(`I'm sorry ${friend}, but do I know you?`)
}

let yep = true

switch (typeof yep == 'string' || typeof yep == 'boolean') {
    case true:
        console.log('yep is a string or a boolean');
        break;
    default:
        console.log('yep is not a string or a number');
}