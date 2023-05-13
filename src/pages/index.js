import "./index.css";
import Card from "../components/Card.js";
import Api from "../components/Api";
import Section from "../components/Section.js";
import FormValidator from "../components/FormValidator.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithSubmit from "../components/PopupWithSubmit.js";
import UserInfo from "../components/UserInfo.js";
import { editAvatarButton, validationConfig, editProfileButton, newCardPopupButton, initalForms } from "../utils/constants.js";

let cardSection;
const formsValidators = {};
const api = new Api({
  baseUrl: "https://around.nomoreparties.co/v1/cohort-3-en",
  headers: {
    authorization: "3392a7c3-5358-47ee-81fd-62f3278067e5",
    "Content-Type": "application/json"
  }
});

//card functions
const renderCard = (card) => {
  const newCard = createCard(card);
  cardSection.addItem(newCard.generateCard(profile.userId));
}

function handleImageClick(name, link) {
  imagePopup.open(name, link);
}

function handleDeleteClick(id) {
  deleteCardPopup.open(id);
}

function createCard(item) {
  const cardElement = new Card(item, "#card-template", handleImageClick, handleDeleteClick, handleLikeClick);
    return cardElement
}

function handleLikeClick(card) {
  if (card.isLiked === true) {
    api.removeLike(card.getId())
      .then((res) => {
        card.removeLike(res);   
      })
      .catch((err) => console.log(err))

  }
  else {
    api.addLike(card.getId())
      .then((res) => {
        card.addLike(res);
      })
      .catch((err) => console.log(err));
  }

}


//initiate objects


const profile = new UserInfo({ nameSelector: ".profile__info-name", jobSelector: ".profile__info-job", avatarSelector: ".profile__img" });

const imagePopup = new PopupWithImage(".img-popup");


api.fetchInitialData()
  .then(([userInfo, initialCard]) => {
    profile.setUserInfo(userInfo);
    profile.setUserAvatar(userInfo);
    profile.userId = userInfo._id;
    cardSection = new Section({
      items: initialCard, renderer: renderCard
    }, ".cards");

    cardSection.renderItems();
  })
  .catch(err => console.log(err));


const editProfilePopup = new PopupWithForm(".profile-popup", (data) => {
  api.editUserInformation(data)
    .then((res) => {
      profile.setUserInfo(res);
      editProfilePopup.close();
      editProfilePopup.renderLoading(false);
    })
    .catch((err) => console.log(err))
    .finally((res) => editProfilePopup.renderLoading(false))
});

const editAvatarPopup = new PopupWithForm(".avatar-popup", (data) => {
  api.editProfilePicture(data)
    .then((res) => {
      profile.setUserAvatar(res);
      editAvatarPopup.close();
      editAvatarPopup.renderLoading(false);
    })
    .catch((err) => console.log(err))
    .finally((res) => editAvatarPopup.renderLoading(false))
});

const addCardPopup = new PopupWithForm(".card-popup", (data) => {
  api.addNewCard({ name: data.title, link: data.link })
    .then((res) => {
      renderCard(res);
      addCardPopup.close();
    })
    .catch((err) => {
      console.log("err", err);
    })
    .finally((res) => addCardPopup.renderLoading(false))
});

const deleteCardPopup = new PopupWithSubmit(".delete-popup", (data) => {
  api.deleteCard(data)
    .then((res) => {
      const card = document.querySelector(`#card-${data}`);
      card.remove();
      deleteCardPopup.close();
      console.log("card removed");
    })
    .catch((err) => {
      console.log("err", err);
    });
});


//profile popup open and prepopulate
function openProfilePopup() {
  editProfilePopup.prePopulateFields(profile.getUserInfo());
  editProfilePopup.open();
  formsValidators["popup__form"].resetValidation();
}

function openProfileAvatar() {
  editAvatarPopup.prePopulateFields(profile.getUserInfo());
  editAvatarPopup.open();
  formsValidators["avatar__form"].resetValidation();
}
//set button event listeners
newCardPopupButton.addEventListener("click", () => {
  addCardPopup.open();
  formsValidators["card-popup__form"].resetValidation();
});

editProfileButton.addEventListener("click", openProfilePopup);
editAvatarButton.addEventListener("click", openProfileAvatar);


//initiate forms validation
initalForms.forEach(form => {
  const newFormValidator = new FormValidator(validationConfig, form);
  newFormValidator.enableValidation();
  formsValidators[form.id] = newFormValidator;
});
