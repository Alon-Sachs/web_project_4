import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
    constructor(popup) {
        super(popup);
        this._title = this._popup.querySelector(".img-popup__title");
        this._image = this._popup.querySelector(".img-popup__img");
    }

    open(card) {
        super.open();
        this._image.src = card._link;
        this._image.alt = card._title;
        this._title.textContent = card._title;
    }
}