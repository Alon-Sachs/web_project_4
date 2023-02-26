const cardPopupOpenBtn = document.querySelector(".profile__add-btn");
const cardPopupCloseBtn = document.querySelector(".card-popup__close-btn");
const cardPopupContainer = document.querySelector(".card-popup");
const cardFormElement = document.querySelector(".card-popup__form");
const cardTitle = document.querySelector(".card-popup__field_type_title");
const cardLink = document.querySelector(".card-popup__field_type_link");

function toggleCardPopup() {
    cardPopupContainer.classList.toggle("card-popup_opened");
}

function handleCardFormSubmit(e) {
    e.preventDefault();
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
    cardImg.src = cardLink.value;
    cardImg.alt = cardTitle.value;
    cardElement.querySelector(".card__title").textContent = cardTitle.value;
    cardsContainer.prepend(cardElement);
    toggleCardPopup();
}

cardFormElement.addEventListener('submit', handleCardFormSubmit);
cardPopupOpenBtn.addEventListener('click', toggleCardPopup);
cardPopupCloseBtn.addEventListener('click', toggleCardPopup);
