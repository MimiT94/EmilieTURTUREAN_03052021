 document.querySelector('.form input[type="button"]').addEventListener("click",function(){
    let valid = true;
    for(let input of document.querySelectorAll(".form input,.form textarea")){
        valid &= input.reportValidity();
        if(!valid){
            break;
        }
    }
    if(valid){
        alert("Vos informations sont enregistrées");
    }
});

let btnForm = document.querySelector("button");
localStorage.setItem("name", document.querySelector("#nom").value);

localStorage.setItem("surname", document.querySelector("#surname").value);