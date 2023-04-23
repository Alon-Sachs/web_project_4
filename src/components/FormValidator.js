export default class FormValidator {
  constructor(settings, form) {
    this._settings = settings;
    this._formElement = form;
  }

  _showInputError(inputElement, errorMessage) {
    const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(this._settings.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._settings.errorClass);

  }

  _hasInvalidInput() {
    return this._inputList.some((inputElement) => !inputElement.validity.valid);
  };

  _hideInputError(inputElement) {
    const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(this._settings.inputErrorClass);
    errorElement.classList.remove(this._settings.errorClass);
    errorElement.textContent = ".";
  };

  _checkInputValidity(inputElement) {
    if (inputElement.validity.valid) {
      this._hideInputError(inputElement);
    } else {
      this._showInputError(inputElement, inputElement.validationMessage);
    }
  };

  _toggleButtonState() {
    if (this._hasInvalidInput()) {
      this._disableButton();
    } else {
      this._buttonElement.classList.remove(this._settings.inactiveButtonClass);
      this._buttonElement.disabled = false;

    }
  }

  _disableButton() {
    this._buttonElement.classList.add(this._settings.inactiveButtonClass);
    this._buttonElement.disabled = true;
  }

  _setEventListeners() {
    this._formElement.addEventListener("reset", () => { this._disableButton()});
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", (e) => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState();
      });
    });
  }

  resetValidation(){
    this._inputList.forEach(input => {
      this._hideInputError(input);
    })
    this._disableButton();
  }

  enableValidation() {
    this._inputList = [...this._formElement.querySelectorAll(this._settings.inputSelector)];
    this._buttonElement = this._formElement.querySelector(this._settings.submitButtonSelector);
    this._setEventListeners();
  }
}