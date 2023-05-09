import Popup from "./Popup.js";

export default class PopupWithSubmit extends Popup {
    constructor(popup, submitCallbackFunction) {
        super(popup);
        this._handleSubmit = submitCallbackFunction;
        this._form = this._popup.querySelector(".form");
        this._submitButton = this._form.querySelector(".form__submit");
    }

    _onSubmit = (e) => {
        e.preventDefault();
        this._submitButton.textContent = "Saving...";
        this._handleSubmit(this.imgId);
    };

    _setEventListeners() {
        super._setEventListeners();
        this._form.addEventListener("submit", this._onSubmit);
    }

    open(id) {
        this.imgId = id;
        super.open();
    }

    close() {
        super.close();
        this._submitButton.textContent = "Yes";
    }

}