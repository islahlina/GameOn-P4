function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground"); // héritage du form, grands-parents du formulaire
const modalBtn = document.querySelectorAll(".modal-btn"); // contient le bouton je m'inscris
const formData = document.querySelectorAll(".formData"); // contient toutes les valeurs du form
const closeModalBtn = document.querySelectorAll(".close"); // span close permet de fermer la modale
const formElement = document.querySelectorAll("form"); // contient le formulaire
// recuperer le bouton close et l'assigner a const closeModalBtn = OK ✅
// recupere l'element formulaire et l'assigner a formElement = OK ✅
// Ajouter un evenement au click sur closeModalButton et executer closeModal = OK ✅
// ecrire une close modal, qui passera la propriete display de modal a none = OK ✅
// Ajouter un event au submit de formElement et executer la validation = OK ✅
// ecrire une fonction de validation qui permettra de faire la validation des champs = OK ✅
// a noter, les valeurs des champs sont stockés dans evt.currentTarget[NOM_DU_CHAMPS] = OK ✅


// LAUNCH MODAL EVENT
modalBtn.forEach((btn) => {
  btn.addEventListener("click", launchModal);
})
// LAUNCH MODAL FORM
function launchModal() {
  modalbg.style.display = "block";
}

// CLOSE MODAL EVENT
closeModalBtn.forEach((span) => {
  span.addEventListener('click', closeModal);
})
// CLOSE MODAL FORM
function closeModal() {
  modalbg.style.display = "none";
}

// SUBMIT FORMELEMENT EVENT
formElement.forEach((form) => {
  form.addEventListener('submit', validateForm);
})

// stocker chaque valeur dans une constante (const) = OK ✅
// pour chaque valeur, verifier si elle match avec les attentes = OK ✅
// si elle ne match pas :
// afficher le message d'erreur:
//     modifier la valeur de l'attribut data-error en inserant
//     mettre la valeur de l'attribut data-error-visible a true
// VALEUR STOCKÉES DANS DES CONSTANTES
const formDataAll = document.querySelectorAll('.form-data');
const formDataFirst = document.querySelector("#first");
const formDataLast = document.querySelector("#last");
const formDataEmail = document.querySelector("#email");
const formDataBirthdate = document.querySelector("#birthdate");
const formDataQuantity =document.querySelector("#quantity");
const formDataLocations = document.querySelector("#locations-container");


function validateForm(event){
  event.preventDefault();
  let valid = true;
  // CONSTANTE POUR FIRST NAME (PRÉNOM)
  const form = event.currentTarget;
  const firstName = form.first.value;
  if (firstName === "" || firstName.length < 2) {
    console.error("Chaîne de caractère trop petite");
    formDataFirst.parentNode.setAttribute("data-error-visible", "true");
    formDataFirst.parentNode.setAttribute("data-error", "Chaîne de caractère trop petite")
    valid = false;
  } else {
    formDataFirst.parentNode.setAttribute("data-error-visible", "false");
  }
  // CONSTANTE POUR LAST NAME (NOM)
  const lastName = form.last.value;
  if (lastName === "" || lastName.length < 2) {
    console.error("Chaîne de caractère trop petite");
    formDataLast.parentNode.setAttribute("data-error-visible", "true");
    formDataLast.parentNode.setAttribute("data-error", "Chaîne de caractère trop petite")
    valid = false;
  } else {
    formDataLast.parentNode.setAttribute("data-error-visible", "false");
  }

  // CONSTANTE POUR EMAIL
  let regEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  let res = "false";
  const emailForm = form.email.value;
  if (emailForm === "" || emailForm.length < 2) {
    console.error("Merci de renseigner une adresse email");
    formDataEmail.parentNode.setAttribute("data-error-visible", "true");
    formDataEmail.parentNode.setAttribute("data-error", "Merci de renseigner une adresse email")
    valid = false;
  } else if (!emailForm.match(regEx)) {
    res = "true";
    formDataEmail.parentNode.setAttribute("data-error-visible", "true");
    formDataEmail.parentNode.setAttribute("data-error", "Adresse email non valide")
  } else {
    formDataEmail.parentNode.setAttribute("data-error-visible", "false");
  }
  // CONSTANTE POUR BIRTHDATE (DATE DE NAISSANCE)
  //! ⚠️ POUR UNE DATE MINIMUM (EX : AVANT LA MAJORITÉ) FAUT-IL FAIRE UN NEW DATE ?
  const birthdateForm = form.birthdate.value;
  if (birthdateForm === "" || birthdateForm.length < 8) {
    console.error("Vous n'avez pas saisie votre date de naissance");
    formDataBirthdate.parentNode.setAttribute("data-error-visible", "true");
    formDataBirthdate.parentNode.setAttribute("data-error", "Merci de saisir votre date de naissance")
    valid = false;
  } else {
    formDataBirthdate.parentNode.setAttribute("data-error-visible", "false");
  }
  if (valid === true) {
    closeModal();
  }
// CONSTANTE POUR QUANTITY (NOMBRE TOURNOIS)
    const quantityForm = form.quantity.value;
    if (quantityForm === "" || quantityForm.length < 1) {
      console.error("Chaîne de caractère trop petite");
      formDataQuantity.parentNode.setAttribute("data-error-visible", "true");
      formDataQuantity.parentNode.setAttribute("data-error", "Chaîne de caractère trop petite")
      valid = false;
    } else {
      formDataQuantity.parentNode.setAttribute("data-error-visible", "false");
    }

    // CONSTANTE POUR QUANTITY (QUEL TOURNOIS)
    const locationForm = form.location;
    if (!locationForm.checked) {
      console.error("Pour finaliser votre inscription, merci de cocher un lieu");
      formDataLocations.setAttribute("data-error-visible", "true");
      formDataLocations.setAttribute("data-error", "Pour finaliser votre inscription, merci de cocher un lieu")
      valid = false;
    } else {
      formDataLocations.setAttribute("data-error-visible", "false");
    }

    if (valid === true) {
      closeModal();
    }
}

