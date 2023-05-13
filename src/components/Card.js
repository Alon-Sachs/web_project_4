export default class Card {
    constructor(data, templateSelector, handleCardClick, handleDeleteClick, handleLikeClick) {
        this._title = data.name;
        this._link = data.link;
        this._id = data._id;
        this._templateSelector = templateSelector;
        this._handleCardClick = handleCardClick;
        this._handleDeleteClick = handleDeleteClick;
        this._handleLikeClick = handleLikeClick;
        this._likes = data.likes;
        this._ownerId = data.owner._id;
    }

    _getTemplate() {
        const cardTemplate = document.querySelector(this._templateSelector).content.querySelector(".card").cloneNode(true);
        return cardTemplate;
    }

    _setEventListeners() {
        const deleteButton = this._element.querySelector(".card__icon-bin");
        deleteButton.addEventListener("click", () => {
            this._handleDeleteClick(this._id);
        });


        this._element.querySelector(".card__icon").addEventListener("click", (e) => {
            this._handleLikeClick(this);
        });

        this._element.querySelector(".card__img").addEventListener("click", (e) => {
            this._handleCardClick(this._title, this._link);
        });

    }

    _setLikeIconOn() {

        this._element.querySelector(".card__icon").classList.add("card__icon_active");
    }

    _setLikeIconOff() {

        this._element.querySelector(".card__icon").classList.remove("card__icon_active");
    }

    addLike(res) {
        this._setLikeIconOn();
        this.isLiked = true;
        this._likes = res.likes;
        this._editLikeCounter();
    }

    removeLike(res) {
        this._setLikeIconOff();
        this.isLiked = false;
        this._likes = res.likes;
        this._editLikeCounter();
    }

    _deleteCard() {
        this._element.remove();
        this._element = null;
    }


    _handleInitialLikes(id) {
        this._editLikeCounter(id);

        if (this.isLiked) {
            this._setLikeIconOn();
        }
    }

    _editLikeCounter() {
        const cardLikes = this._element.querySelector(".card__likes-counter");
        cardLikes.textContent = this._likes.length;
    }

    getId(){
        return this._id;
    }

    generateCard(id) {
        this._element = this._getTemplate();
        this.isLiked = this._likes.some((like) => like._id === id);

        const cardImg = this._element.querySelector(".card__img");
        const cardTitle = this._element.querySelector(".card__title");

        this._element.id = (`card-${this._id}`);

        cardImg.src = this._link;
        cardImg.alt = `Photo of ${this._title}`;
        cardTitle.textContent = this._title;

        this._handleInitialLikes(id);
        this._setEventListeners();

        if (this._ownerId !== id) {
            const deleteButton = this._element.querySelector(".card__icon-bin");
            deleteButton.remove();
        }


        return this._element;

    }


}