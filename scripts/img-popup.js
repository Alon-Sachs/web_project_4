const imgPopupCloseBtn = document.querySelector(".img-popup__close-btn");

imgPopupCloseBtn.addEventListener('click', () => {
    imagePopup.classList.toggle("img-popup_opened");
});