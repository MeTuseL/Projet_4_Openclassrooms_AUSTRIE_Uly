// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalClose = document.querySelector(".close");
const editNavBar = document.querySelector(".icon");
const validateModal = document.querySelector('[name="reserve"]');

const firstName = document.getElementById("first");
const lastName = document.getElementById("last");
const email = document.getElementById("email");
const birthdate = document.getElementById("birthdate");
// const spt = birthdate.value.split('/');
// const newDate = new Date(spt[2],spt[1]-1,spt[0]);
const quantity = document.getElementById("quantity");

const location1 = document.getElementById("location1");
const location2 = document.getElementById("location2");
const location3 = document.getElementById("location3");
const location4 = document.getElementById("location4");
const location5 = document.getElementById("location5");
const location6 = document.getElementById("location6");

const checkbox1 = document.getElementById("checkbox1");

const textControlLastName = document.querySelector("#last");
const textControlFirstName = document.querySelector("#first");
const textControlBirthdate = document.querySelector("#email");
const textControlEmail = document.querySelector("#birthdate");
const textControlQuantity = document.querySelector("#quantity");
const firstError = document.querySelector(".first-error");
const lastError = document.querySelector(".last-error");
const birthdateError = document.querySelector(".birthdate-error");
const emailError = document.querySelector(".email-error");
const quantityError = document.querySelector(".quantity-error");
const locationError = document.querySelectorAll(".checkbox-icon");
const checkboxError = document.querySelector(".checkbox-error");
const cguError = document.querySelector(".cgu-error");

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
function validate(e) {// validate modal form


  //first name
  if (firstName.value.length < 3) {

    textControlFirstName.style.border = '2px solid #e54858';
    firstError.innerHTML = "Veuillez entrer 2 caractères ou plus pour le champ du prénom.";
    firstError.style.opacity = '1';

  }
  if (firstName.value == "") {

    textControlFirstName.style.border = '2px solid #e54858';
    firstError.innerHTML = "Champ vide.";
    firstError.style.opacity = '1';

  }
  //last name
  if (lastName.value.length < 3) {

    textControlLastName.style.border = '2px solid #e54858';
    lastError.innerHTML = "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
    lastError.style.opacity = '1';

  }
  if (lastName.value == "") {

    textControlLastName.style.border = '2px solid #e54858';
    lastError.innerHTML = "Champ vide.";
    lastError.style.opacity = '1';

  }
  // email
  if (validateEmail() == false) {

    textControlEmail.style.border = '2px solid #e54858';
    emailError.innerHTML = "Email non valide.";
    emailError.style.opacity = '1';

  }
  if (email.value == "") {

    textControlEmail.style.border = '2px solid #e54858';
    emailError.innerHTML = "Champ vide.";
    emailError.style.opacity = '1';

  }
  //birthdate
//   if (newDate.getFullYear( spt[2]) && newDate.getMonth(spt[1])+1 && newDate.getDate() == spt[0])
// {
//   textControlBirthdate.style.border = '2px solid #e54858';
//   birthdateError.innerHTML = "Vous devez entrer votre date de naissance.";
//   birthdateError.style.opacity = '1';
// }
  if (birthdate.value == "") {

    textControlBirthdate.style.border = '2px solid #e54858';
    birthdateError.innerHTML = "Champ vide";
    birthdateError.style.opacity = '1';
  }
  //quantity
  if (Number.isInteger(quantity.value) == false) {

    textControlQuantity.style.border = '2px solid #e54858';
    quantityError.innerHTML = "Veuillez saisir un nombre entier.";
    quantityError.style.opacity = '1';
  }
  if (quantity.value == "") {

    textControlQuantity.style.border = '2px solid #e54858';
    quantityError.innerHTML = "Champ vide";
    quantityError.style.opacity = '1';
  }
  //location
  if (location1.checked == false & location2.checked == false & location3.checked == false
    & location4.checked == false & location5.checked == false & location6.checked == false) {

      locationError.forEach((span) => span.style.border = '2px solid #e54858' );
      checkboxError.innerHTML = "Vous devez choisir une option.";
      checkboxError.style.opacity = '1';
    }

    //CGU
    if (checkbox1.checked == false) {
    
      cguError.innerHTML = "Vous devez vérifier que vous acceptez les termes et conditions.";
      cguError.style.opacity = '1';
    }

  e.preventDefault();

}
