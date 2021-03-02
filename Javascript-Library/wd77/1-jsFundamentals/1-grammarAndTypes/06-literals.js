/*
LITERALS
*/

let weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
//              0           1         2             3           4
console.log(weekDays.toString());
console.log(weekDays[3]);

let soup = {
    a: 'chicken noodle', //a is a key, 'chicken noodle' is the value (key/value pairs)
    b: 'tomato',
    c: 'beef and barley',
}
console.log(soup.c);

//array and object literals can hold primitive and complex types (arrays, objects, and functions are known as COMPLEX OR DYNAMIC TYPES)
//primitive types = strings, numbers, booleans, undefined, nulls.

let complexArrLiteral = [1, true, 'Acedemy', [1,2,3], {key: 'test'}, function(){return 'yes'}]; //a function without a name is called an annoymous function.
//                       0   1      2          3          4             5
console.log(complexArrLiteral[5]);
console.log(complexArrLiteral[3]);

let complexObjLiteral = {num: 1, boolean: true, string: 'Academy', arr: [1,2,3],
obj: {key: 'test'}, func: function(){return 'yes'}};

console.log(complexObjLiteral.func);
console.log(complexObjLiteral.arr[1]);