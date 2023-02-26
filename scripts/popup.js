//profile edit form elements
const editProfileButton = document.querySelector(".profile__info-btn");
const editProfileCloseButton = document.querySelector(".popup__close-btn");
const editProfilePopup = document.querySelector(".profile-popup");
const editProfileForm = editProfilePopup.querySelector(".popup__form");
const profileJobField = document.querySelector(".profile__info-job");
const profilePopupNameInput = document.querySelector(".popup__field_type_name");
const profilePopupJobInput = document.querySelector(".popup__field_type_job");
const profileNameField = document.querySelector(".profile__info-name");

//cards elements
const newCardPopup = document.querySelector(".card-popup");
const newCardPopupButton = document.querySelector(".profile__add-btn");
const newCardPopupCloseButton = document.querySelector(".card-popup__close-btn");
const cardFormElement = newCardPopup.querySelector(".card-popup__form");
const cardTitle = newCardPopup.querySelector(".card-popup__field_type_title");
const cardLink = newCardPopup.querySelector(".card-popup__field_type_link");
const cardTemplate = document.querySelector("#card-template").content;
const cardsContainer = document.querySelector(".cards");
const imagePopupImage = document.querySelector(".img-popup__img");
const imagePopupTitle = document.querySelector(".img-popup__title");

//img popup elements
const imgPopupCloseButton = document.querySelector(".img-popup__close-btn");
const imagePopup = document.querySelector(".img-popup");

//general functions
function openPopup(popup) {
    popup.classList.add("popup_opened");
}

function closePopup(popup) {
    popup.classList.remove("popup_opened");
}

function createCard(data) {
    const cardElement = cardTemplate.querySelector(".card").cloneNode(true);
    const cardImg = cardElement.querySelector(".card__img");
    const cardLinkBtn = cardElement.querySelector(".card__icon");
    const cardBinBtn = cardElement.querySelector(".card__icon-bin");
    const cardTitle = cardElement.querySelector(".card__title");
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
        imagePopup.classList.toggle("popup_opened");
    })
    cardImg.src = data.link;
    cardImg.alt = data.name;
    cardTitle.textContent = data.name;
    return cardElement;
}

function renderCard(data) {
    const cardElement = createCard(data);
    cardsContainer.prepend(cardElement);
}

//edit profile functions
function openProfilePopup() {
    profilePopupNameInput.value = profileNameField.textContent;
    profilePopupJobInput.value = profileJobField.textContent;
    openPopup(editProfilePopup);
}

function handleProfileFormSubmit(e) {
    e.preventDefault();
    profileNameField.textContent = profilePopupNameInput.value;
    profileJobField.textContent = profilePopupJobInput.value;
    closePopup(editProfilePopup);
}

editProfileForm.addEventListener('submit', handleProfileFormSubmit);
editProfileButton.addEventListener('click', openProfilePopup);
editProfileCloseButton.addEventListener('click', () => closePopup(editProfilePopup));

//card functions
function handleCardFormSubmit(e) {
    e.preventDefault();
    const data = {
        link: cardLink.value,
        name: cardTitle.value
    }
    renderCard(data)
    closePopup(newCardPopup)
    e.target.reset();
}

cardFormElement.addEventListener('submit', handleCardFormSubmit);
newCardPopupButton.addEventListener('click', () => openPopup(newCardPopup));
newCardPopupCloseButton.addEventListener('click', () => closePopup(newCardPopup));

imgPopupCloseButton.addEventListener('click', () => closePopup(imagePopup));