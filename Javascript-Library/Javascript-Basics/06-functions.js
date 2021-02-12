function hello(){
    console.log("Hello World!");
}
function pacersWon(){
    console.log("Pacers Won!");
}

function numberEntered(num){
    console.log("The number you entered was: ", num);
}

function addAnyTwoNumbers(x, y){
    console.log(x + y);
}

function subtractTwoNumbers(firstNum, secondNum){
    console.log(firstNum - secondNum);
}

function getMyBattingAverage(atBats, numberOfHits){
    let myAverage = numberOfHits / atBats;
    return myAverage
}
console.log(getMyBattingAverage(250, 91));

function twoNumbers(x, y){
    let sum = x + y;
    return sum;
}
console.log(twoNumbers(10, 11));

function firstNameLastName(firstName, lastName){
    let fullName = firstName + lastName;
    return fullName;
    
}
console.log(firstNameLastName("ayanna",  " miller"));

function calculatePriceIndiana(quantity, price){
    let totalPrice = 1.07 * quantity * price;
    return totalPrice; // or return 1.07 * quantity * price;
}
console.log(calculatePriceIndiana(17, 5))

subtractTwoNumbers(5, 7);
addAnyTwoNumbers(4, 6);
addAnyTwoNumbers(3, 5);
addAnyTwoNumbers(7, 2);
numberEntered(5);
numberEntered(4);
numberEntered(3);
pacersWon();
pacersWon();
pacersWon();
pacersWon();
hello();


