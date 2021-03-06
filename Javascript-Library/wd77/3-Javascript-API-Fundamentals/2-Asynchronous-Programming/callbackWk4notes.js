// function callbackFunction(){
//     const data = {
//         name: 'Ralf Machio',
//         age: 66, 
//         occupation: 'kickboxing'
//     }
//     return data;
// }

// function showGreeting(dataFromFunction){
//     return 'hello ' + dataFromFunction.name + ', I hear you are the coolest'
// }

// console.log(showGreeting(callbackFunction()));

function callbackFunction(){
    for(let i = 0; i < 100; i++){
        console.log(i)
    }

    const data = {
        name: 'Ralf Machio',
        age: 66,
        occupation: 'kickboxing'
    }
    return data;
}

function showData(dataFromFunction){
    return 'hello' + dataFromFunction.name
}

console.log(showData(callbackFunction()));

//Promises:
var amIGood = true;
var iCanHaveGift = new Promise(
    function(resolve,reject){
        if(amIGood){
            var gift = {
                brand:'HasMattelbro',
                item: 'Turbo-Man action figure'
            };
            resolve(gift);//fulfilled
        } else {
            var naughty = "You've made Santa's naughty list; enjoy your coal!";
            reject(naughty); //rejected
        }
    }
); 
var playDate = function(gift) {
    return new Promise(
        function(resolve, reject) {
            var message = "Salutations fellow child I enjoy interacting with! I notice you received a posable plastic Batman figurine during the Yultide season. What do you think of my new " + gift.brand + ' ' + gift.item + '?';

            resolve(message);
        }
    );
};

//Promise Call 
var checkTwice = function() {
    console.log('before Christmas');// log before
    iCanHaveGift
        .then(playDate)
        .then(function(fulfilled){
            console.log(fulfilled);
        })
        .catch(function(error){
            console.log(error)
        });
        console.log('after opening gifts'); //log after
}

checkTwice()

//Promise call, chaining
var checkTwice = function(){
    iCanHasGift
    .then(playDate) //chain here
    .then(function(fulfilled){
        console.log(fulfilled);
        // output: "Salutations fellow child I enjoy interacting with! I notice you received a posable plastic Batman figurine during the Yultide season. What do you think of my new HasMattelbro Turbo-Man action figure?"
    })
    .catch(function(error){
        //lump of coal
        console.log(error)
         // output: "You've made Santa's naughty list; enjoy your coal!"
    });
};

var playDate = function(gift){
    return new Promise(
        function(resolve,reject){
            var message = "Salutations fellow child I enjoy interacting with! I notice you received a posable plastic Batman figurine during the Yultide season. What do you think of my new " + gift.brand + ' ' + gift.item + '?';

            resolve(message);
        }
    );
};

