import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
    constructor(popup, submitCallbackFunction) {
        super(popup);
        this._handleSubmit = submitCallbackFunction;
        const inputSelector = ".form__input";
        this._form = this._popup.querySelector(".form");
        this._inputs = Array.from(this._form.querySelectorAll(inputSelector));
    }

    _getInputValues() {
        const values = {};
        this._inputs.forEach((input) => {
            values[input.name] = input.value;
        });
        return values;
    }

    _onSubmit = (e) => {
        e.preventDefault();
        this._handleSubmit(this._getInputValues());
    };

    _setEventListeners() {
        super._setEventListeners();
        this._form.addEventListener("submit", this._onSubmit);
    }

    _removeEventListeners() {
        super._removeEventListeners();
        this._form.removeEventListener("submit", this._onSubmit);
    }

    close() {
        super.close();
        this._form.reset();
    }

    prePopulateFields(data) {
        this._inputs.forEach((input) => {
            input.value = data[input.name];
        });
    }
}
