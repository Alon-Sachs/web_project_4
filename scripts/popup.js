const popupOpenBtn = document.querySelector(".profile__info-btn");
const popupCloseBtn = document.querySelector(".popup__close-btn");
const popupContainer = document.querySelector(".popup");
const formElement = document.querySelector(".popup__form");
const job = document.querySelector(".profile__info-job");
const nameInput = document.querySelector(".popup__field_type_name");
const jobInput = document.querySelector(".popup__field_type_job");
const fName = document.querySelector(".profile__info-name");

function toggleOpenPopup() {
    nameInput.value = fName.textContent;
    jobInput.value = job.textContent;
    popupContainer.classList.toggle("popup_opened");
}

function toggleClosePopup() {
    popupContainer.classList.toggle("popup_opened");
}

function handleProfileFormSubmit(e) {
    e.preventDefault();
    fName.textContent = nameInput.value;
    job.textContent = jobInput.value;
    popupContainer.classList.toggle("popup_opened");
}

formElement.addEventListener('submit', handleProfileFormSubmit);
popupOpenBtn.addEventListener('click', toggleOpenPopup); 
popupCloseBtn.addEventListener('click', toggleClosePopup); 