// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalClose = document.querySelector(".close");
const editNavBar = document.querySelector(".icon");
const validateModal = document.querySelector('[name="reserve"]');
const textControl = document.querySelectorAll(".text-control");
const checkBoxInput = document.querySelectorAll(".checkbox-input");

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

const textControlLastName = document.querySelector("#last");
const textControlFirstName = document.querySelector("#first");
const textControlBirthdate = document.querySelector("#birthdate");
const textControlEmail = document.querySelector("#birthdate");
const textControlQuantity = document.querySelector("#quantity");
const firstError = document.querySelector(".first-error");
const lastError = document.querySelector(".last-error");
const birthdateError = document.querySelector(".birthdate-error");
const emailError = document.querySelector(".email-error");
const quantityError = document.querySelector(".quantity-error");
const checkboxError = document.querySelector(".checkbox-error");
const cguError = document.querySelector(".cgu-error");

const reEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const reName = /^[a-zA-Z]+$/;

let resultEvent = "";

// Events
editNavBar.addEventListener("click", editNav); // edit nav bar event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal)); // launch modal event
modalClose.addEventListener("click", closeModal); // close modal event
validateModal.addEventListener("submit", validate);// validate modal event
textControl.forEach((input) => input.addEventListener("change",validateInput));
// textControlLastName.addEventListener("change",validateInput);
// textControlFirstName.addEventListener("change",validateInput);
checkBoxInput.forEach((checkbox) => checkbox.addEventListener("change",validateCheckbox));
// checkboxIcon.addEventListener("change",validateCheckbox);
validateModal.addEventListener("submit", confirmModal);
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
function controlName(name) {
  return reName.test(name.value);
}
function controlEmail(email) {// control email form 
  return reEmail.test(email.value);
}
function validateFirstName(dataError){

  if (firstName.value == "") {
    dataError.dataset.errorVisible = "false";
    dataError.dataset.error = "";
    dataError.dataset.correct ="false";
    resultEvent ="false";
  }
  else if (controlName(firstName) == false) {
    dataError.dataset.errorVisible = "true";
    dataError.dataset.error = "Le prénom doit contenir que des lettres.";
    dataError.dataset.correct ="false";
    resultEvent ="false";
  }
  else if (firstName.value.length < 3) {
    dataError.dataset.errorVisible = "true";
    dataError.dataset.error = "Veuillez entrer 2 caractères ou plus pour le champ du prénom.";
    dataError.dataset.correct ="false";
    resultEvent ="false";
  }
  else {
    dataError.dataset.errorVisible = "false";
    dataError.dataset.error = "";
    dataError.dataset.correct ="true";
    resultEvent ="true";
  }
  return resultEvent;
}
function validateLastName(dataError) {

  if (lastName.value == "") {
    dataError.dataset.errorVisible = "false";
    dataError.dataset.error = "";
    dataError.dataset.correct ="false";
    resultEvent ="false"; 
  }
  else if (controlName(lastName) == false) {
    dataError.dataset.errorVisible = "true";
    dataError.dataset.error = "Le nom doit contenir que des lettres.";
    dataError.dataset.correct ="false";
    resultEvent ="false";
  }
  else if (lastName.value.length < 3) {
    dataError.dataset.errorVisible = "true";
    dataError.dataset.error = "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
    dataError.dataset.correct ="false";
    resultEvent ="false";
  }
  else {
    dataError.dataset.errorVisible = "false";
    dataError.dataset.error = "";
    dataError.dataset.correct ="true";
    resultEvent ="true";
  }
  return resultEvent;

}
function validateEmail(dataError) {

  if (email.value == "") {
    dataError.dataset.errorVisible = "false";
    dataError.dataset.error = "";
    dataError.dataset.correct ="false";
    resultEvent ="false"; 
  }

  else if (controlEmail(email) == false) {
    dataError.dataset.errorVisible = "true";
    dataError.dataset.error = "Email non valide.";
    dataError.dataset.correct ="false";
    resultEvent ="false"; 

  }
  else {
    dataError.dataset.errorVisible = "false";
    dataError.dataset.error = "";
    dataError.dataset.correct ="true";
    resultEvent ="true";
  }
  return resultEvent;
}
function validateBirthdate(dataError) {

  const birthdateUser = new Date(birthdate.value);
  const timeDate = new Date(Date.now() - birthdateUser.getTime());
  const yearTimeDate = timeDate.getFullYear();
  const ageUser = Math.abs(yearTimeDate - 1970);

  if (birthdate.value == "") {
    dataError.dataset.errorVisible = "false";
    dataError.dataset.error = "";
    dataError.dataset.correct ="false";
    resultEvent ="false";
  }
  else if (birthdateUser.getTime() > Date.now()){
    dataError.dataset.errorVisible = "true";
    dataError.dataset.error = "Date de naissance incorrecte.";
    dataError.dataset.correct ="false";
    resultEvent ="false";
  }
  else if (ageUser < 18) {
    dataError.dataset.errorVisible = "true";
    dataError.dataset.error = "L'incription est interdit aux moins de 18 ans.";
    dataError.dataset.correct ="false";
    resultEvent ="false";
  }
  else if (ageUser > 120) {
    dataError.dataset.errorVisible = "true";
    dataError.dataset.error = "L'incription est interdit aux plus de 120 ans.";
    dataError.dataset.correct ="false";
    resultEvent ="false";
  }
  else {
    dataError.dataset.errorVisible = "false";
    dataError.dataset.error = "";
    dataError.dataset.correct ="true";
    resultEvent ="true";
  }
  return resultEvent;
}
function validateQuantity(dataError) {

  const number = parseFloat(quantity.value);

  if (quantity.value == "") {
    dataError.dataset.errorVisible = "false";
    dataError.dataset.error = "";
    dataError.dataset.correct ="false";
    resultEvent ="false";
  }
  else if (isNaN(quantity.value)) {
    dataError.dataset.errorVisible = "true";
    dataError.dataset.error = "Veuillez saisir uniquement des chiffres.";
    dataError.dataset.correct ="false";
    resultEvent ="false";
  }
  else if (quantity.value < 0 || quantity.value > 99) {
    dataError.dataset.errorVisible = "true";
    dataError.dataset.error = "Veuillez saisir un nombre compris entre 0 et 99.";
    dataError.dataset.correct ="false";
    resultEvent ="false";
  }
  else if (Number.isInteger(number) == false) {
    dataError.dataset.errorVisible = "true";
    dataError.dataset.error = "Veuillez saisir un nombre entier.";
    dataError.dataset.correct ="false";
    resultEvent ="false";
  }
  else {
    dataError.dataset.errorVisible = "false";
    dataError.dataset.error = "";
    dataError.dataset.correct ="true";
    resultEvent ="true";
  }
  return resultEvent;
}
function validateLocation(dataError) {

  if (location1.checked == false & location2.checked == false & location3.checked == false
    & location4.checked == false & location5.checked == false & location6.checked == false) {
    
      dataError.dataset.errorVisible = "true";
      dataError.dataset.error = "Vous devez choisir une option.";
      dataError.dataset.correct ="false";
      resultEvent ="false";
  }
  else {
    dataError.dataset.errorVisible = "false";
    dataError.dataset.error = "";
    dataError.dataset.correct ="true";
    resultEvent ="true";
  }
  return resultEvent;
}
function validateCgu(dataError){

  if (checkbox1.checked == false) {

    dataError.dataset.errorVisible = "true";
      dataError.dataset.error = "Vous devez vérifier que vous acceptez les termes et conditions.";
      dataError.dataset.correct ="false";
      resultEvent ="false";
  }
  else {
    dataError.dataset.errorVisible = "false";
    dataError.dataset.error = "";
    dataError.dataset.correct ="true";
    resultEvent ="true";
  }
  return resultEvent;
}
function emptyFieldsModal(){

  if (firstName.value == "") {
    formData[0].dataset.errorVisible = "true";
    formData[0].dataset.error = "Champ vide.";
  }
  if (lastName.value == "") {
    formData[1].dataset.errorVisible = "true";
    formData[1].dataset.error = "Champ vide.";
  }
  if (email.value == "") {

    formData[2].dataset.errorVisible = "true";
    formData[2].dataset.error = "Champ vide.";

  }
  if (birthdate.value == "") {

    formData[3].dataset.errorVisible = "true";
    formData[3].dataset.error = "Champ vide.";
  }
  if (quantity.value == "") {

    formData[4].dataset.errorVisible = "true";
    formData[4].dataset.error = "Champ vide.";
  }
  if (location1.checked == false & location2.checked == false & location3.checked == false
    & location4.checked == false & location5.checked == false & location6.checked == false) {

      formData[5].dataset.errorVisible = "true";
      formData[5].dataset.error = "Vous devez choisir une option.";
  }
  if (checkbox1.checked == false) {

    formData[6].dataset.errorVisible = "true";
    formData[6].dataset.error = "Vous devez vérifier que vous acceptez les termes et conditions.";
  }

}
function validateInput() {

  validateFirstName(formData[0]);
  validateLastName(formData[1]);
  validateEmail(formData[2]);
  validateBirthdate(formData[3]);
  validateQuantity(formData[4]);
  
}
function validateCheckbox(){
  validateLocation(formData[5]);
  validateCgu(formData[6]);
}
function validate(event) {// validate modal form

  event.preventDefault();
  emptyFieldsModal()

  //first name
  // if (firstName.value.length < 3) {

  //   // textControlFirstName.style.border = '2px solid #e54858';
  //   // firstError.style.opacity = '1';

  // }
  // if (firstName.value == "") {

  //   // textControlFirstName.style.border = '2px solid #e54858';
  //   // firstError.innerHTML = "Champ vide.";
  //   // firstError.style.opacity = '1';

  // }
  // //last name
  // if (lastName.value.length < 3) {

  //   // textControlLastName.style.border = '2px solid #e54858';
  //   // lastError.innerHTML = "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
  //   // lastError.style.opacity = '1';

  // }
  // if (lastName.value == "") {

  //   // textControlLastName.style.border = '2px solid #e54858';
  //   // lastError.innerHTML = "Champ vide.";
  //   // lastError.style.opacity = '1';

  // }
  // email
  // if (controlEmail(email) == false) {

  //   textControlEmail.style.border = '2px solid #e54858';
  //   emailError.innerHTML = "Email non valide.";
  //   emailError.style.opacity = '1';

  // }
  // if (email.value == "") {

  //   textControlEmail.style.border = '2px solid #e54858';
  //   emailError.innerHTML = "Champ vide.";
  //   emailError.style.opacity = '1';

  // }
  //birthdate
  //   if (newDate.getFullYear( spt[2]) && newDate.getMonth(spt[1])+1 && newDate.getDate() == spt[0])
  // {
  //   textControlBirthdate.style.border = '2px solid #e54858';
  //   birthdateError.innerHTML = "Vous devez entrer votre date de naissance.";
  //   birthdateError.style.opacity = '1';
  // }
  // if (birthdate.value == "") {

  //   textControlBirthdate.style.border = '2px solid #e54858';
  //   birthdateError.innerHTML = "Champ vide";
  //   birthdateError.style.opacity = '1';
  // }
  //quantity
  // if (Number.isInteger(quantity.value) == false) {

  //   textControlQuantity.style.border = '2px solid #e54858';
  //   quantityError.innerHTML = "Veuillez saisir un nombre entier.";
  //   quantityError.style.opacity = '1';
  // }
  // if (quantity.value == "") {

  //   textControlQuantity.style.border = '2px solid #e54858';
  //   quantityError.innerHTML = "Champ vide";
  //   quantityError.style.opacity = '1';
  // }
  //location
  // if (location1.checked == false & location2.checked == false & location3.checked == false
  //   & location4.checked == false & location5.checked == false & location6.checked == false) {

  //   locationError.forEach((span) => span.style.border = '2px solid #e54858');
  //   checkboxError.innerHTML = "Vous devez choisir une option.";
  //   checkboxError.style.opacity = '1';
  // }

  //CGU
  // if (checkbox1.checked == false) {

  //   cguError.innerHTML = "Vous devez vérifier que vous acceptez les termes et conditions.";
  //   cguError.style.opacity = '1';
  // }

}
function confirmModal(){

  // if (validateCgu(formData[6]) == "true"){
  //   closeModal();
  // }
}
