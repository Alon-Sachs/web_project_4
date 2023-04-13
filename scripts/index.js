import Card from "./card.js";
import FormValidator from "./FormValidator.js";
import { openPopup , closePopup } from "./utils.js";
import { initialCards } from "./cards.js";

//profile edit form elements
const editProfileButton = document.querySelector(".profile__info-btn");
const editProfileCloseButton = document.querySelector(
  ".profile-popup__close-btn"
);
const editProfilePopup = document.querySelector(".profile-popup");
const editProfileForm = editProfilePopup.querySelector(".popup__form");
const profileJobField = document.querySelector(".profile__info-job");
const profilePopupNameInput = document.querySelector(".popup__form-name");
const profilePopupJobInput = document.querySelector(".popup__form-job");
const profileNameField = document.querySelector(".profile__info-name");

//cards elements
const newCardPopup = document.querySelector(".card-popup");
const newCardPopupButton = document.querySelector(".profile__add-btn");
const newCardPopupCloseButton = document.querySelector(
  ".card-popup__close-btn"
);
const cardFormElement = newCardPopup.querySelector(".card-popup__form");
const cardTitle = newCardPopup.querySelector(".card-popup__form-title");
const cardLink = newCardPopup.querySelector(".card-popup__form-link");
const cardsContainer = document.querySelector(".cards");


//img popup elements
const imgPopupCloseButton = document.querySelector(".img-popup__close-btn");
const imagePopup = document.querySelector(".img-popup");

//validation config
const validationConfig ={
  formSelector: ".form",
  inputSelector: ".form__input",
  submitButtonSelector: ".form__submit",
  inactiveButtonClass: "popup__field-submit_inactive",
  inputErrorClass: "form__input-error",
  errorClass: "popup__input-error_active"
}

export const initalForms = Array.from(document.querySelectorAll(validationConfig.formSelector));

//edit profile functions
function fillProfileForm() {
  profilePopupNameInput.value = profileNameField.textContent;
  profilePopupJobInput.value = profileJobField.textContent;
}

function openProfilePopup() {
  fillProfileForm();
  openPopup(editProfilePopup);
}

function handleProfileFormSubmit(e) {
  e.preventDefault();
  profileNameField.textContent = profilePopupNameInput.value;
  profileJobField.textContent = profilePopupJobInput.value;
  closePopup(editProfilePopup);
}

editProfileForm.addEventListener("submit", handleProfileFormSubmit);
editProfileButton.addEventListener("click", openProfilePopup);
editProfileCloseButton.addEventListener("click", () =>
  closePopup(editProfilePopup)
);

//card functions

function handleCardFormSubmit(e) {
  e.preventDefault();
  const data = {
    link: cardLink.value,
    title: cardTitle.value,
  };
  const newCard = new Card (data , "#card-template");
  cardsContainer.prepend(newCard.generateCard());
  closePopup(newCardPopup);
  e.target.reset();
}

cardFormElement.addEventListener("submit", handleCardFormSubmit);
newCardPopupButton.addEventListener("click", () => openPopup(newCardPopup));
newCardPopupCloseButton.addEventListener("click", () =>
  closePopup(newCardPopup)
);

imgPopupCloseButton.addEventListener("click", () => closePopup(imagePopup));

initialCards.forEach(card => {
  const newCard = new Card (card , "#card-template");
  cardsContainer.prepend(newCard.generateCard());
});

initalForms.forEach(form => {
  const newFormValidator = new FormValidator (validationConfig , form);
  newFormValidator.enableValidation();
});
