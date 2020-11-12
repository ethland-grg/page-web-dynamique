// FORMULAIRE

let formValid = document.getElementById('submit');
let lastName = document.getElementById('last-name');
let firstName = document.getElementById('first-name');
let message = document.getElementById('message');
var nameValid = /^[a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+([-'\s][a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+)?$/;

formValid.addEventListener('click', validation);
            
    function validation(event){
        //Si le champ est vide
        if (lastName.validity.valueMissing || message.validity.valueMissing){
            event.preventDefault();
            message.classList.add('is-invalid');
        //Si le format de données est incorrect
        } else if (nameValid.test(lastName.value) == false || nameValid.test(firstName.value) == false) {
            event.preventDefault();
        } else { 
        }
    }

$( document ).ready(function() {

    $("#contact-about").click(function() {
        $("form").addClass("active");
    });

    $("#submit").click(function() {
        $("form").removeClass("active");
    });
    
});