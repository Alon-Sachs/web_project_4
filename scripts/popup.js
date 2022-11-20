let popupOpenBtn = document.querySelector(".profile__info-btn");
let popupCloseBtn = document.querySelector(".popup__close-btn");
let popupContainer = document.querySelector(".popup");
let formElement = document.querySelector(".popup__form");

function toggleOpenPopup(e) {
    // e.preventDefault();
    let name = document.querySelector(".profile__info-name");
    let job = document.querySelector(".profile__info-job");
    let nameInput = document.querySelector(".popup__field-name");
    let jobInput = document.querySelector(".popup__field-job");
    nameInput.value = name.textContent;
    jobInput.value = job.textContent;
    popupContainer.classList.toggle("popup_opened");
}

function toggleClosePopup(e) {
    e.preventDefault();
    popupContainer.classList.toggle("popup_opened");
}

function handleProfileFormSubmit(e) {
    e.preventDefault();
    let name = document.querySelector(".profile__info-name");
    let job = document.querySelector(".profile__info-job");
    let nameInput = document.querySelector(".popup__field-name");
    let jobInput = document.querySelector(".popup__field-job");
    name.textContent = nameInput.value;
    job.textContent = jobInput.value;
    popupContainer.classList.toggle("popup_opened");
}

formElement.addEventListener('submit', handleProfileFormSubmit);
popupOpenBtn.addEventListener('click', toggleOpenPopup); 
popupCloseBtn.addEventListener('click', toggleClosePopup); 