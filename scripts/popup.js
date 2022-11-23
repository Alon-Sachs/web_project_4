const popupOpenBtn = document.querySelector(".profile__info-btn");
const popupCloseBtn = document.querySelector(".popup__close-btn");
const popupContainer = document.querySelector(".popup");
const formElement = document.querySelector(".popup__form");
const job = document.querySelector(".profile__info-job");
const nameInput = document.querySelector(".popup__field_type_name");
const jobInput = document.querySelector(".popup__field_type_job");
const fName = document.querySelector(".profile__info-name");

function togglePopup() {
    popupContainer.classList.toggle("popup_opened");
}

function toggleOpenPopup() {
    nameInput.value = fName.textContent;
    jobInput.value = job.textContent;
    togglePopup();
}

function handleProfileFormSubmit(e) {
    e.preventDefault();
    fName.textContent = nameInput.value;
    job.textContent = jobInput.value;
    togglePopup();
}

formElement.addEventListener('submit', handleProfileFormSubmit);
popupOpenBtn.addEventListener('click', toggleOpenPopup); 
popupCloseBtn.addEventListener('click', togglePopup); 