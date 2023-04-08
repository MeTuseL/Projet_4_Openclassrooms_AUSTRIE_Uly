// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalClose = document.querySelector(".close");
const editNavBar = document.querySelector(".icon");
const validateModal = document.querySelector('[name="reserve"]');

// Events
editNavBar.addEventListener("click", editNav); // edit nav bar event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal)); // launch modal event
modalClose.addEventListener("click", closeModal); // close modal event
validateModal.addEventListener("submit", validate);// validate modal event

// functions
function editNav() { // edit nav bar

  const x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
function launchModal() {// launch modal form
  modalbg.style.display = "block";
}
function closeModal() { // close modal form
  modalbg.style.display = "none";
}
function validateEmail() {// validate email form 
  const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const email = document.getElementById("email").value;
  return re.test(email);
}
function validate() {// validate modal form

  const firstName = document.getElementById("first");
  const lastName = document.getElementById("last");
  const email = document.getElementById("email");
  const birthdate = document.getElementById("birthdate");
  const quantity = document.getElementById("quantity");

  const location1 = document.getElementById("location1");
  const location2 = document.getElementById("location2");
  const location3 = document.getElementById("location3");
  const location4 = document.getElementById("location4");
  const location5 = document.getElementById("location5");
  const location6 = document.getElementById("location6");

  const checkbox1 = document.getElementById("checkbox1");

   if (firstName.value.length < 3 & firstName.value !== "" ) {

     alert('Votre prénom est trop court');

   }
   if (lastName.value.length < 3 & lastName.value !== "" ) {

     alert('Votre nom est trop court');

   }

  if (firstName.value == "" || lastName.value == "" || email.value == ""
  || birthdate.value == "" || quantity.value == "") {

   alert('Un ou plusieurs champ est vide');

  }

   if (validateEmail() == false & email.value !== "") {

     alert('E-mail non valide');

   }

   if (Number.isInteger(quantity.value) == false & quantity.value !== "") {

    alert('Veuillez saisir un nombre entier');
   }

   if (location1.checked == false & location2.checked == false & location3.checked == false
    & location4.checked == false & location5.checked == false & location6.checked == false)

    alert('Veuillez saisir un tournoi');

    if (checkbox1.checked == false) {
      alert("Veuillez lire et accepter les conditions d'utilisations");
    }
    return validate(this);

}
