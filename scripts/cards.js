const initialCards = [
  {
    name: "Yosemite Valley",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg"
  },
  {
    name: "Lake Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg"
  },
  {
    name: "Bald Mountains",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_bald-mountains.jpg"
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_latemar.jpg"
  },
  {
    name: "Vanoise National Park",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_vanoise.jpg"
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lago.jpg"
  }
];

const cardTemplate = document.querySelector("#card-template").content;
const cardsContainer = document.querySelector(".cards");
const imagePopup = document.querySelector(".img-popup");
const imagePopupImage = document.querySelector(".img-popup__img");
const imagePopupTitle = document.querySelector(".img-popup__title");

initialCards.forEach(card => {
  const cardElement = cardTemplate.querySelector(".card").cloneNode(true);
  const cardImg = cardElement.querySelector(".card__img");
  const cardLinkBtn = cardElement.querySelector(".card__icon");
  const cardBinBtn = cardElement.querySelector(".card__icon-bin");
  cardLinkBtn.addEventListener("click", (e) => {
    e.target.classList.toggle("card__icon_active");
  })
  cardBinBtn.addEventListener("click", (e) => {
    e.target.parentElement.remove();
  })
  cardImg.addEventListener("click", (e) => {
    const imageTitle = e.target.parentElement.querySelector(".card__title").textContent;
    imagePopupImage.src = e.target.src;
    imagePopupImage.alt = imageTitle;
    imagePopupTitle.textContent = imageTitle;
    imagePopup.classList.toggle("img-popup_opened");
  })
  cardImg.src = card.link;
  cardImg.alt = card.name;
  cardElement.querySelector(".card__title").textContent = card.name;
  cardsContainer.append(cardElement);
})
