export default class Card {
    constructor(data, templateSelector, handleCardClick) {
        this._title = data.title;
        this._link = data.link;
        this._templateSelector = templateSelector;
        this._handleCardClick = handleCardClick;
    }

    _getTemplate() {
        const cardTemplate = document.querySelector(this._templateSelector).content.querySelector(".card").cloneNode(true);
        return cardTemplate;
    }

    _setEventListeners() {
        const deleteButton = this._element.querySelector(".card__icon-bin");
        deleteButton.addEventListener("click", () => {
            this._deleteCard();
        });

        this._element.querySelector(".card__icon").addEventListener("click", (e) => {
            this._toggleLike(e);
        });

        this._element.querySelector(".card__img").addEventListener("click", (e) => {
            this._handleCardClick();
        });

    }

    _toggleLike(e) {
        e.target.classList.toggle("card__icon_active");
    }

    _deleteCard() {
        this._element.remove();
        this._element = null;
    }


    generateCard() {
        this._element = this._getTemplate();

        const cardImg = this._element.querySelector(".card__img");
        const cardTitle = this._element.querySelector(".card__title");

        cardImg.src = this._link;
        cardImg.alt = `Photo of ${this._title}`;
        cardTitle.textContent = this._title;

        this._setEventListeners();

        return this._element;

    }


}