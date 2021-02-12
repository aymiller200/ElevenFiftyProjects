//alert("Hello from app.js");

var pics = [
    "../../../Desktop/cat/blancheone.jpeg",
    "../../../Desktop/cat/neil1.jpeg",
    "../../../Desktop/cat/blanche2.jpeg",
    "../../../Desktop/cat/neil2.jpeg",
    "../../../Desktop/cat/suge2.jpeg",
]

var btn = document.querySelector("button");
var img = document.querySelector("img");
var counter = 1;
btn.addEventListener("click", function(){
    if(counter === 5){
        counter = 0;
    } 
    img.src = pics[counter];
    
    counter = counter + 1;
});

