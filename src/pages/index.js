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

let cards;
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
  const newCard = new Card(card, "#card-template", handleImageClick, handleDeleteClick, handleLikeClick);
  cards.addItem(newCard.generateCard(profile.userId));
}

function handleImageClick(name, link) {
  imagePopup.open(name, link);
}

function handleDeleteClick(id) {
  deleteCardPopup.open(id);
}

function handleLikeClick() {
  if (this._isLiked === true) {
    api.removeLike(this._id)
      .then((res) => {
        this._setLikeOff();
        this._isLiked = false;
        this._likes = res.likes;
        this._editLikeCounter();
      })
      .catch((err) => console.log(err))

  }
  else {
    api.addLike(this._id)
      .then((res) => {
        this._setLikeOn();
        this._isLiked = true;
        this._likes = res.likes;
        this._editLikeCounter();
      })
      .catch((err) => console.log(err));
  }

}


//initiate objects


const profile = new UserInfo({ nameSelector: ".profile__info-name", jobSelector: ".profile__info-job", avatarSelector: ".profile__img" });

const imagePopup = new PopupWithImage(".img-popup");

// api.fetchInitialData([this.getUserInformation, this.getInitialCards])
// .then(res => console.log(res))
// .catch(err => console.log(err));

api.fetchInitialData()
  .then(([userInfo, initialCard]) => {
    profile.setUserInfo(userInfo);
    profile.setUserAvatar(userInfo);
    profile.userId = userInfo._id;
    cards = new Section({
      items: initialCard, renderer: renderCard
    }, ".cards");

    cards.renderItems();
  })
  .catch(err => console.log(err));


const editProfilePopup = new PopupWithForm(".profile-popup", (data) => {
  api.editUserInformation(data)
    .then((res) => {
      console.log(res);
      profile.setUserInfo(res);
      editProfilePopup.close();
    })
});

const editAvatarPopup = new PopupWithForm(".avatar-popup", (data) => {
  console.log(data);
  api.editProfilePicture(data)
    .then((res) => {
      console.log(res);
      profile.setUserAvatar(res);
      editAvatarPopup.close();
    })
    .catch((err) => console.log(err));
});

const addCardPopup = new PopupWithForm(".card-popup", (data) => {
  api.addNewCard({ name: data.title, link: data.link })
    .then((res) => {
      renderCard(res);
      addCardPopup.close();
    })
    .catch((err) => {
      console.log("err", err);
    });
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

// const cards = new Section({
//   items: initialCards, renderer: renderCard
// }, ".cards");

// cards.renderItems();

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
