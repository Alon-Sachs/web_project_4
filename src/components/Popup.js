export default class Popup {
    constructor(popup) {
        this._popup = document.querySelector(popup);
        this._closeButton = this._popup.querySelector(".popup__close-btn");
    }

    open() {
        this._popup.classList.add("popup_opened");
    }

    close = () => {
        this._popup.classList.remove("popup_opened");
    }

    _handleEscClose = (evt) => {
        if (evt.key === "Escape") {
            this.close();
        }
    }

    _handleMouseClickClose = (evt) => {
        if (evt.target.classList.contains("popup_opened")) {
            this.close();
        }
    }

    setEventListeners() {
        document.addEventListener("keydown", this._handleEscClose);
        document.addEventListener("mousedown", this._handleMouseClickClose);
        this._closeButton.addEventListener("click", this.close);
    }
}