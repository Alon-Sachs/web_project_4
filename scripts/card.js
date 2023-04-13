import { openPopup } from "./utils.js";
export default class Card {
    constructor(data , templateSelector) {
        this._title = data.title;
        this._link = data.link;
        this._templateSelector = templateSelector;
    }

    _getTemplate() {
        const cardTemplate = document.querySelector(this._templateSelector).content.querySelector(".card").cloneNode(true);
        return cardTemplate;
    }

    _setEventListeners() {
        this._toggleCardIcon();
        this._deleteCard();
        this._openImagePopup();
    }

    _toggleCardIcon() {
        this._element.querySelector(".card__icon").addEventListener("click", (e) => {
            e.target.classList.toggle("card__icon_active");
        });
    }

    _deleteCard() {
        this._element.querySelector(".card__icon-bin").addEventListener("click", (e) => {
            e.target.parentElement.remove();
        });
    }

    _openImagePopup() {
        this._element.querySelector(".card__img").addEventListener("click", (e) => {
            const imagePopupTitle = document.querySelector(".img-popup__title");
            const imagePopupImage = document.querySelector(".img-popup__img");
            const imagePopup = document.querySelector(".img-popup");
            imagePopupImage.src = this._link;
            imagePopupImage.alt = this._title;
            imagePopupTitle.textContent = this._title;
            openPopup(imagePopup);
        });
    }

    generateCard() {
        this._element = this._getTemplate();

        this._element.querySelector(".card__img").src = this._link;
        this._element.querySelector(".card__title").textContent = this._title;

        this._setEventListeners();

        return this._element;

    }


}