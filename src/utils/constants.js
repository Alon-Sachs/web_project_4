
//validation config
export const validationConfig = {
  formSelector: ".form",
  inputSelector: ".form__input",
  submitButtonSelector: ".form__submit",
  inactiveButtonClass: "popup__field-submit_inactive",
  inputErrorClass: "form__input-error",
  errorClass: "popup__input-error_active"
}

//profile edit form elements
export const editProfileButton = document.querySelector(".profile__info-btn");
export const newCardPopupButton = document.querySelector(".profile__add-btn");
export const editAvatarButton = document.querySelector(".profile__img-overlay");
export const cardsContainer = document.querySelector(".cards");
export const initalForms = Array.from(document.querySelectorAll(validationConfig.formSelector));

//api keys:
export const apiCredentials = {
  token: "3392a7c3-5358-47ee-81fd-62f3278067e5",
  groupID: "cohort-3-en"
};