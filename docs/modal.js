// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalClose = document.querySelector(".close");
const btnClose = document.querySelector(".btn-close");
const editNavBar = document.querySelector(".icon");
const modal = document.querySelector('[name="reserve"]');
const modalRegistValid = document.querySelector(".modal-registration-validated");
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

const x = document.getElementById("myTopnav");

const reEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const reName = /^[a-zA-Z]+$/;

let resultEvent = "";

// Events
editNavBar.addEventListener("click", editNav); // edit nav bar event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));// launch modal event
modalClose.addEventListener("click", closeModal); // close modal event
btnClose.addEventListener("click", closeModal);// button close modal event
modal.addEventListener("submit", validate);// validate modal event
textControl.forEach((input) => input.addEventListener("change", validateInput));// text constrol input event
checkBoxInput.forEach((checkbox) => checkbox.addEventListener("change", validateCheckbox));// checkbox input event

// functions
function editNav() { // edit nav bar

  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
function launchModal() {// launch modal form
  modalbg.style.display = "block";
  modal.style.display = "block";
}
function closeModal() { // close modal form

  modal.reset();
  formData.forEach((data) => {
    delete data.dataset.error;
    delete data.dataset.correct;
    delete data.dataset.errorVisible;
  });
  modalbg.style.display = "none";
  modal.style.display = "none";
  modalRegistValid.style.display = "none";
}
function controlName(name) {// control name form
  return reName.test(name.value);
}
function controlEmail(email) {// control email form 
  return reEmail.test(email.value);
}
function validateFirstName(dataError) {// check value first name

  if (firstName.value == "" && formData[0].dataset.error == "Champ vide.") {
    dataError.dataset.correct = "false";
    resultEvent = "false";
  }
  else if (firstName.value == "") {
    dataError.dataset.errorVisible = "false";
    dataError.dataset.error = "";
    dataError.dataset.correct = "false";
    resultEvent = "false";
  }
  else if (controlName(firstName) == false) {
    dataError.dataset.errorVisible = "true";
    dataError.dataset.error = "Le prénom doit contenir que des lettres.";
    dataError.dataset.correct = "false";
    resultEvent = "false";
  }
  else if (firstName.value.length < 3) {
    dataError.dataset.errorVisible = "true";
    dataError.dataset.error = "Veuillez entrer 2 caractères ou plus pour le champ du prénom.";
    dataError.dataset.correct = "false";
    resultEvent = "false";
  }
  else {
    dataError.dataset.errorVisible = "false";
    dataError.dataset.error = "";
    dataError.dataset.correct = "true";
    resultEvent = "true";
  }
  return resultEvent;
}
function validateLastName(dataError) {// check value last name

  if (lastName.value == "" && formData[1].dataset.error == "Champ vide.") {
    dataError.dataset.correct = "false";
    resultEvent = "false";
  }
  else if (lastName.value == "") {
    dataError.dataset.errorVisible = "false";
    dataError.dataset.error = "";
    dataError.dataset.correct = "false";
    resultEvent = "false";
  }
  else if (controlName(lastName) == false) {
    dataError.dataset.errorVisible = "true";
    dataError.dataset.error = "Le nom doit contenir que des lettres.";
    dataError.dataset.correct = "false";
    resultEvent = "false";
  }
  else if (lastName.value.length < 3) {
    dataError.dataset.errorVisible = "true";
    dataError.dataset.error = "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
    dataError.dataset.correct = "false";
    resultEvent = "false";
  }
  else {
    dataError.dataset.errorVisible = "false";
    dataError.dataset.error = "";
    dataError.dataset.correct = "true";
    resultEvent = "true";
  }
  return resultEvent;

}
function validateEmail(dataError) {// check value email

  if (email.value == "" && formData[2].dataset.error == "Champ vide.") {
    dataError.dataset.correct = "false";
    resultEvent = "false";
  }
  else if (email.value == "") {
    dataError.dataset.errorVisible = "false";
    dataError.dataset.error = "";
    dataError.dataset.correct = "false";
    resultEvent = "false";
  }
  else if (controlEmail(email) == false) {
    dataError.dataset.errorVisible = "true";
    dataError.dataset.error = "Email non valide.";
    dataError.dataset.correct = "false";
    resultEvent = "false";

  }
  else {
    dataError.dataset.errorVisible = "false";
    dataError.dataset.error = "";
    dataError.dataset.correct = "true";
    resultEvent = "true";
  }
  return resultEvent;
}
function validateBirthdate(dataError) {// check value birthdate

  const birthdateUser = new Date(birthdate.value);
  const timeDate = new Date(Date.now() - birthdateUser.getTime());
  const yearTimeDate = timeDate.getFullYear();
  const ageUser = Math.abs(yearTimeDate - 1970);

  if (birthdate.value == "" && formData[3].dataset.error == "Champ vide.") {
    dataError.dataset.correct = "false";
    resultEvent = "false";
  }
  else if (birthdate.value == "") {
    dataError.dataset.errorVisible = "false";
    dataError.dataset.error = "";
    dataError.dataset.correct = "false";
    resultEvent = "false";
  }
  else if (birthdateUser.getTime() > Date.now() || isNaN(birthdateUser.getTime())) {
    dataError.dataset.errorVisible = "true";
    dataError.dataset.error = "Date de naissance incorrecte.";
    dataError.dataset.correct = "false";
    resultEvent = "false";
  }
  else if (ageUser < 18) {
    dataError.dataset.errorVisible = "true";
    dataError.dataset.error = "L'incription est interdit aux moins de 18 ans.";
    dataError.dataset.correct = "false";
    resultEvent = "false";
  }
  else if (ageUser > 120) {
    dataError.dataset.errorVisible = "true";
    dataError.dataset.error = "L'incription est interdit aux plus de 120 ans.";
    dataError.dataset.correct = "false";
    resultEvent = "false";
  }
  else {
    dataError.dataset.errorVisible = "false";
    dataError.dataset.error = "";
    dataError.dataset.correct = "true";
    resultEvent = "true";
  }
  return resultEvent;
}
function validateQuantity(dataError) {// check value quantity

  const number = parseFloat(quantity.value);

  if (quantity.value == "" && formData[0].dataset.error == "Champ vide.") {
    dataError.dataset.correct = "false";
    resultEvent = "false";
  }
  else if (quantity.value == "") {
    dataError.dataset.errorVisible = "false";
    dataError.dataset.error = "";
    dataError.dataset.correct = "false";
    resultEvent = "false";
  }
  else if (isNaN(quantity.value)) {
    dataError.dataset.errorVisible = "true";
    dataError.dataset.error = "Veuillez saisir uniquement des chiffres.";
    dataError.dataset.correct = "false";
    resultEvent = "false";
  }
  else if (quantity.value < 0 || quantity.value > 99) {
    dataError.dataset.errorVisible = "true";
    dataError.dataset.error = "Veuillez saisir un nombre compris entre 0 et 99.";
    dataError.dataset.correct = "false";
    resultEvent = "false";
  }
  else if (Number.isInteger(number) == false) {
    dataError.dataset.errorVisible = "true";
    dataError.dataset.error = "Veuillez saisir un nombre entier.";
    dataError.dataset.correct = "false";
    resultEvent = "false";
  }
  else {
    dataError.dataset.errorVisible = "false";
    dataError.dataset.error = "";
    dataError.dataset.correct = "true";
    resultEvent = "true";
  }
  return resultEvent;
}
function validateLocation(dataError) {// check value location

  if (location1.checked == false & location2.checked == false & location3.checked == false
    & location4.checked == false & location5.checked == false & location6.checked == false
    && formData[5].dataset.error == "Vous devez choisir une option.") {
    dataError.dataset.correct = "false";
    resultEvent = "false";
  }
  else if (location1.checked == false & location2.checked == false & location3.checked == false
    & location4.checked == false & location5.checked == false & location6.checked == false) {

    dataError.dataset.errorVisible = "false";
    dataError.dataset.error = "";
    dataError.dataset.correct = "false";
    resultEvent = "false";
  }
  else {
    dataError.dataset.errorVisible = "false";
    dataError.dataset.error = "";
    dataError.dataset.correct = "true";
    resultEvent = "true";
  }
  return resultEvent;
}
function validateCgu(dataError) {// check value cgu


  if (checkbox1.checked == false && formData[6].dataset.error == "Vous devez vérifier que vous acceptez les termes et conditions.") {
    dataError.dataset.correct = "false";
    resultEvent = "false";
  }
  else if (checkbox1.checked == false) {

    dataError.dataset.errorVisible = "false";
    dataError.dataset.error = "";
    dataError.dataset.correct = "false";
    resultEvent = "false";
  }
  else {
    dataError.dataset.errorVisible = "false";
    dataError.dataset.error = "";
    dataError.dataset.correct = "true";
    resultEvent = "true";
  }
  return resultEvent;
}
function emptyFieldsModal() {// check values empty's

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
function validateInput() {// check values input's

  validateFirstName(formData[0]);
  validateLastName(formData[1]);
  validateEmail(formData[2]);
  validateBirthdate(formData[3]);
  validateQuantity(formData[4]);

}
function validateCheckbox() {// check values checkbox's
  validateLocation(formData[5]);
  validateCgu(formData[6]);
}
function validate(event) {// validate modal form

  event.preventDefault();

  if (validateFirstName(formData[0]) == "true" && validateLastName(formData[1]) == "true" 
  && validateEmail(formData[2]) == "true" && validateBirthdate(formData[3]) == "true" 
  && validateQuantity(formData[4]) == "true" && validateLocation(formData[5]) == "true" 
  && validateCgu(formData[6]) == "true") {

    launchValidateModal();
  }
  else {
    emptyFieldsModal();
  }
}
function launchValidateModal() {// launch confirmation modal
  modal.style.display = "none";
  modalRegistValid.style.display = "block";

}
