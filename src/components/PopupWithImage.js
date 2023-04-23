import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
    constructor(popup) {
        super(popup);
        this._title = this._popup.querySelector(".img-popup__title");
        this._image = this._popup.querySelector(".img-popup__img");
    }

    open(name, link) {
        super.open();
        this._image.src = link;
        this._image.alt = name;
        this._title.textContent = name;
    }
}