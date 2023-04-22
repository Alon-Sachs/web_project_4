import Card from "./components/Card.js";
import Section from "./components/Section.js";
import FormValidator from "./components/FormValidator.js";
import PopupWithForm from "./components/PopupWithForm.js";
import PopupWithImage from "./components/PopupWithImage.js";
import UserInfo from "./components/UserInfo.js";
import { initialCards , validationConfig} from "./utils/constants.js";

//profile edit form elements
const editProfileButton = document.querySelector(".profile__info-btn");
const newCardPopupButton = document.querySelector(".profile__add-btn");
const cardsContainer = document.querySelector(".cards");
const initalForms = Array.from(document.querySelectorAll(validationConfig.formSelector));


//initiate objects
const profile = new UserInfo({ nameSelector: ".profile__info-name", jobSelector: ".profile__info-job" });

const imagePopup = new PopupWithImage(".img-popup");
imagePopup.setEventListeners();

const editProfilePopup = new PopupWithForm(".profile-popup", (data) => {
  profile.setUserInfo(data);
});
editProfilePopup.setEventListeners();

const addCardPopup = new PopupWithForm(".card-popup", (data) => {
  const card = new Card(data , "#card-template", handleImageClick);
  cards.addItem(card.generateCard());
});
addCardPopup.setEventListeners();

const cards = new Section({
  items: initialCards, renderer: (item) => {
    const newCard = new Card(item, "#card-template", handleImageClick);
    renderCard(newCard);
  }
}, ".cards");

cards.renderItems();

//profile popup open and prepopulate
function openProfilePopup() {
  editProfilePopup.prePopulateFields(profile.getUserInfo());
  editProfilePopup.open();
}


//Functions 

//card functions
function handleImageClick() {
  imagePopup.open(this);
}

//card rendering function
function renderCard(data) {
  data.generateCard();
  cardsContainer.prepend(data.generateCard());
}


//set button event listeners
newCardPopupButton.addEventListener("click", () => addCardPopup.open());
editProfileButton.addEventListener("click", openProfilePopup);


//initiate forms validation
initalForms.forEach(form => {
  const newFormValidator = new FormValidator(validationConfig, form);
  newFormValidator.enableValidation();
});
