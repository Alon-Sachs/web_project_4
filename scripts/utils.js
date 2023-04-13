import { initalForms } from "./index.js";

function closePopupEventEscape(evt) {
    if (evt.key === "Escape") {
        const popup = document.querySelector(".popup_opened");
        closePopup(popup);
    }
}

function closePopupEventClick(evt) {
    if (evt.target.classList.contains("popup_opened")) {
        const popup = document.querySelector(".popup_opened");
        closePopup(popup);
    }
}

function openPopup(popup) {
    popup.classList.add("popup_opened");
    document.addEventListener("keydown", closePopupEventEscape);
    document.addEventListener("mousedown", closePopupEventClick);
}

function closePopup(popup) {
    initalForms.forEach(form => { form.reset(); });
    popup.classList.remove("popup_opened");
    document.removeEventListener("keydown", closePopupEventEscape);
    document.removeEventListener("mousedown", closePopupEventClick);
}

export { openPopup, closePopup };