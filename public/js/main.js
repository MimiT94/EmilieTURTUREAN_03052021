// appeler des classes
let Request = new RequestAjax("http://localhost:3000/api/cameras/");

console.log(Request);
console.log(Request.response);

setTimeout(function () {
    console.log(Request);
    console.log(Request.response);
}, 3000);

/*
let url = "http://localhost:3000/api/cameras/";

fetch(url)
    .then((response) => {
        response.json();
    })
    .then(response => {
        console.log(response);
    })
    .catch(error => {
        console.log(error);
    });

*/

