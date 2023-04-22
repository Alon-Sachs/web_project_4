import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
    constructor(popup, submitCallbackFunction) {
        super(popup);
        this._submitCallbackFunction = submitCallbackFunction;
        this._inputSelector = ".form__input";
        this._form = this._popup.querySelector(".form");
        this._inputs = Array.from(this._form.querySelectorAll(this._inputSelector));
    }

    _getInputValues() {
        const values = {};
        this._inputs.forEach((input) => {
                values[input.name] = input.value;
            }
        );
        return values;
    }

    _formSubmit(e) {
        e.preventDefault();
        this._submitCallbackFunction(this._getInputValues());
        this.close();
        this._form.reset();
    }

    setEventListeners() {
        this._form.addEventListener("submit", (e) => this._formSubmit(e));
        super.setEventListeners();
    }

    prePopulateFields(data){
        this._inputs.forEach((input) => {
                input.value = data[input.name];
            }
        );
    }
}