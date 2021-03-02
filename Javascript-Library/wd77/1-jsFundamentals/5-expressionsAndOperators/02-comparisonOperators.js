/*
COMPARISON OPERATORS
*/

//Equality comparison operator
console.log('3' == 3);//type coercion (same number different data type)
console.log(4 == 4);
console.log(3 == '4');//can't do type coercion (diff number diff data type)

//strict equality comparison operator
console.log(3 === 3);
console.log('3' === 3);//must be same data type AND same number, '===' cannot perform type coercion

//not equal comparison operator
console.log('3' != 4); //comes back true because 3 is NOT equal to 4
console.log('3' != 3); //comes back false bewcause 3 IS equal to 3

//strict not equal comparison operator
console.log('3' !== 3);//true because strict not equal cares about type
console.log(3 !== 3);//false

//greater than
console.log(3 > 2);//true
console.log(2 > 3);//false

//less than
console.log(2 < 3); //true
console.log(3 < 2); //false

//greater than or equal to
console.log(3 >= 2); //true
console.log(3 >= 2); //true

//less than or equal to
console.log(2 <= 3); //true
console.log(3 <= 2); //false

//And (both expressions on either side of the operator must be true for 'And' to return true)
console.log(1<2 && 3>0); //true (both expressions are true)
console.log(2<1 && 3>0); //false (only one expression is true)

//Or (either expression on one side of the operator must be true for 'Or' to return true)
console.log(1<2 || 3<0); //true
console.log(2<1 || 3<0); //false (both are not true)

let obj = {key: 'test'};
console.log(obj == {key: 'test'});//false they are not the EXACT same item, just duplicates 

console.log(obj == obj);//true because this is the exact same item

let arr = [1,2,3,4];

console.log(arr == [1,2,3,4]);//false because these are two duplicate arrays
console.log(arr == arr);



