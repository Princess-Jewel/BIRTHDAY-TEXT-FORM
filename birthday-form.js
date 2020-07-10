const myForm = document.getElementById('my-form');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e){
    e.preventDefault();

let birthdateInput = new Date().getDate();
let birthmonthInput = new Date().getMonth()+1;
let nameInput = document.getElementById('name').value;
let dateInput = document.getElementById('birthdate').value;
let monthInput = document.getElementById('birthmonth').value;
let msg = document.querySelector('.msg');

    if(dateInput == birthdateInput  && monthInput ==  birthmonthInput ){
        msg.classList.add('success'); 
        msg.innerHTML = `Awww Happy Birthday ${nameInput}!!! I Wish You Long Life And Prosperity...`; 

    } else {
        
        msg.classList.add('error'); 
        msg.innerHTML = "Sorry, Please Wait For Your Day";
        
    }
}



