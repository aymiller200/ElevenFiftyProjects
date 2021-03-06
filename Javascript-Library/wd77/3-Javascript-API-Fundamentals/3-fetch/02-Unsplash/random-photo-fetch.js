//start by making a document.querySelector(), this will grab our .random-image class img tag and saving it to the variable randomImage
// var randomImage = document.querySelector('.random-image');
// console.log("randomImage", randomImage)

//Then make a fetch() with our API endpoint that we found in the unsplash API documentation. Since we didn't specify a method, it will perform a GET request to the random endpoint of the Unsplash API. 

// fetch('https://source.unsplash.com/random')

/*To get info back from the fetch: 
    -Since fetch() starts a promise, we can use .then() method to return that promise. 
    -.then() takes two arguments: callback functions for the success and failure cases of the Promise. 
    -Below we are just using the success argument, calling it response. If successful we'll get a response back from the API. 
*/

// fetch('https://source.unsplash.com/random')
// .then(function(response){

// })

/*
If we get something weird back from the API, we don't want to display someting that is incorrect or that could break our application. To make sure we're safe, we need to check and see if the response is okay. If it isn't an okay response(or say anything other 200), then we're going to return an error. Otherwise we're going to return a response. 
-The error constructor creates an error object. Instances of error objects are thrown when runtime errors occur. The error object can also be used as a base object for user-defined exceptions. 
*/

// var randomImage = document.querySelector('.random-image');
//  console.log("randomImage", randomImage)

//  fetch('https://source.unsplash.com/random')
//  .then(function(response){
//     if(!response.ok){
//         console.log(response);
//         return new Error(response);
//     }
//     console.log('Response:', response);
//     return response.blob();
//  })

 /*
 in the Star Wars API, we used response.json. Now, we're using response.blob().
 !BLOB()
    -The blob() method takes a Response stream and reads it to completion. It returns a promise that resolves with a Blob. 
    -A blob object represents a file-like object of immutable, raw data. 
    -Blobs represent data that isn't necessarily in Javascript-native format. The File interface is based on Blob, inheriting blob functionality and expanding it to support files on  the user's system. 
    -A blob is typically an image or some sort of otherwise file-like object.

 */

//     var randomImage = document.querySelector('.random-image');
//  console.log("randomImage", randomImage)

//  fetch('https://source.unsplash.com/random')
//  .then(function(response){
//     if(!response.ok){
//         console.log(response);
//         return new Error(response);
//     }
//     console.log('Response:', response);
//     return response.blob();
//  })
//  .then(function(photoBlob){
//      console.log('My Blob:', photoBlob)
//  })

 //We use a console.log to look at our blob. Notice it says size:
 //and type:. The type should be some sort of image, which is what we want. 

 /*
To use our blob in the HTML file, we get a location for our blob by using URL.createObjectURL() instead of <img> and src, because that refers to a files system or url location. 
-URL.createObjectURL() static method creats a DOMstring containing a URL representing the object given in the parameter. 
-URL lifetime is tied to the document in the window on which it was created. 
-The new object URL represents the specified File object or Blob object. 

In our case, this URL is created to represent the Blob object. 
We can run that and then have a URL for our object to use in an <img>
 */

// var randomImage = document.querySelector('.random-image');
// console.log("randomImage", randomImage)

// fetch('https://source.unsplash.com/random')
// .then(function(response){
//    if(!response.ok){
//        console.log(response);
//        return new Error(response);
//    }
//    console.log('Response:', response);
//    return response.blob();
// })
// .then(function(photoBlob){
//     console.log('My Blob:', photoBlob)
//     var objectURL = URL.createObjectURL(photoBlob);
//     console.log("object URL", objectURL);
// })

/*
With this we can now see our Object URL, so we should be able to use it now. Let's set the src of our randomImage to be this new URL.
*/

// var randomImage = document.querySelector('.random-image');
// console.log("randomImage", randomImage)

// fetch('https://source.unsplash.com/random')
// .then(function(response){
//    if(!response.ok){
//        console.log(response);
//        return new Error(response);
//    }
//    console.log('Response:', response);
//    return response.blob();
// })
// .then(function(photoBlob){
//     console.log('My Blob:', photoBlob)
//     var objectURL = URL.createObjectURL(photoBlob);
//     console.log("object URL", objectURL);
//     randomImage.src = objectURL;

//     console.log('randomImage.src:', randomImage.src);
// })
/*
Next, to prevent any possible errors that may occur, we use catch(). 
-The catch() method returns a Promise and deals with rejected cases only. 
*/

var randomImage = document.querySelector('.random-image');
console.log("randomImage", randomImage)

fetch('https://source.unsplash.com/random')
.then(function(response){
   if(!response.ok){
       console.log(response);
       return new Error(response);
   }
   console.log('Response:', response);
   return response.blob();
})
.then(function(photoBlob){
    console.log('My Blob:', photoBlob)
    var objectURL = URL.createObjectURL(photoBlob);
    console.log("object URL", objectURL);
    randomImage.src = objectURL;

    console.log('randomImage.src:', randomImage.src);
})
.catch(function(err){
    console.log(err);
})