import "./index.css";
import Card from "../components/Card.js";
import Section from "../components/Section.js";
import FormValidator from "../components/FormValidator.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import UserInfo from "../components/UserInfo.js";
import { initialCards, validationConfig, editProfileButton, newCardPopupButton, cardsContainer, initalForms } from "../utils/constants.js";

const formsValidators = {};

//card functions
const renderCard = (card) => {
  const newCard = new Card(card, "#card-template", handleImageClick);
  cards.addItem(newCard.generateCard());
}

function handleImageClick(name, link) {
  imagePopup.open(name, link);
}


//initiate objects
const profile = new UserInfo({ nameSelector: ".profile__info-name", jobSelector: ".profile__info-job" });

const imagePopup = new PopupWithImage(".img-popup");

const editProfilePopup = new PopupWithForm(".profile-popup", (data) => {
  profile.setUserInfo(data);
  editProfilePopup.close();
});

const addCardPopup = new PopupWithForm(".card-popup", (data) => {
  renderCard(data);
  addCardPopup.close();
});

const cards = new Section({
  items: initialCards, renderer: renderCard
}, ".cards");

cards.renderItems();

//profile popup open and prepopulate
function openProfilePopup() {
  editProfilePopup.prePopulateFields(profile.getUserInfo());
  editProfilePopup.open();
  formsValidators["popup__form"].resetValidation();
}

//set button event listeners
newCardPopupButton.addEventListener("click", () => {
  addCardPopup.open();
  formsValidators["card-popup__form"].resetValidation();
});
editProfileButton.addEventListener("click", openProfilePopup);


//initiate forms validation
initalForms.forEach(form => {
  const newFormValidator = new FormValidator(validationConfig, form);
  newFormValidator.enableValidation();
  formsValidators[form.id] = newFormValidator;
});
