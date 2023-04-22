(()=>{"use strict";function e(e){"Escape"===e.key&&n(document.querySelector(".popup_opened"))}function t(e){e.target.classList.contains("popup_opened")&&n(e.target)}function o(o){o.classList.add("popup_opened"),document.addEventListener("keydown",e),document.addEventListener("mousedown",t)}function n(o){o.classList.remove("popup_opened"),document.removeEventListener("keydown",e),document.removeEventListener("mousedown",t)}class i{constructor(e,t,o){this._title=e.title,this._link=e.link,this._templateSelector=t,this._openPopupHandler=o}_getTemplate(){return document.querySelector(this._templateSelector).content.querySelector(".card").cloneNode(!0)}_setEventListeners(){this._element.querySelector(".card__icon-bin").addEventListener("click",(()=>{this._deleteCard()})),this._element.querySelector(".card__icon").addEventListener("click",(e=>{this._toggleLike(e)})),this._element.querySelector(".card__img").addEventListener("click",(e=>{this._openPopupHandler()}))}_toggleLike(e){e.target.classList.toggle("card__icon_active")}_deleteCard(){this._element.remove(),this._element=null}generateCard(){this._element=this._getTemplate();const e=this._element.querySelector(".card__img"),t=this._element.querySelector(".card__title");return e.src=this._link,e.alt=`Photo of ${this._title}`,t.textContent=this._title,this._setEventListeners(),this._element}}class s{constructor(e,t){this._settings=e,this._formElement=t}_showInputError(e,t){const o=this._formElement.querySelector(`.${e.id}-error`);e.classList.add(this._settings.inputErrorClass),o.textContent=t,o.classList.add(this._settings.errorClass)}_hasInvalidInput(){return this._inputList.some((e=>!e.validity.valid))}_hideInputError(e){const t=this._formElement.querySelector(`.${e.id}-error`);e.classList.remove(this._settings.inputErrorClass),t.classList.remove(this._settings.errorClass),t.textContent="."}_checkInputValidity(e){e.validity.valid?this._hideInputError(e):this._showInputError(e,e.validationMessage)}_toggleButtonState(){this._hasInvalidInput()?this._disableButton():(this._buttonElement.classList.remove(this._settings.inactiveButtonClass),this._buttonElement.disabled=!1)}_disableButton(){this._buttonElement.classList.add(this._settings.inactiveButtonClass),this._buttonElement.disabled=!0}_setEventListeners(){this._formElement.addEventListener("reset",(()=>{this._disableFormAfterSubmit()})),this._inputList.forEach((e=>{e.addEventListener("input",(t=>{this._checkInputValidity(e),this._toggleButtonState()}))}))}_disableFormAfterSubmit(){this._disableButton()}enableValidation(){this._inputList=[...this._formElement.querySelectorAll(this._settings.inputSelector)],this._buttonElement=this._formElement.querySelector(this._settings.submitButtonSelector),this._disableButton(),this._setEventListeners()}}const r=document.querySelector(".profile__info-btn"),l=document.querySelector(".profile-popup__close-btn"),c=document.querySelector(".profile-popup"),a=c.querySelector(".popup__form"),u=document.querySelector(".profile__info-job"),_=document.querySelector(".popup__form-name"),d=document.querySelector(".popup__form-job"),p=document.querySelector(".profile__info-name"),m=document.querySelector(".card-popup"),h=document.querySelector(".profile__add-btn"),v=document.querySelector(".card-popup__close-btn"),f=m.querySelector(".card-popup__form"),S=m.querySelector(".card-popup__form-title"),g=m.querySelector(".card-popup__form-link"),y=document.querySelector(".cards"),E=document.querySelector(".img-popup__close-btn"),L=document.querySelector(".img-popup"),b={formSelector:".form",inputSelector:".form__input",submitButtonSelector:".form__submit",inactiveButtonClass:"popup__field-submit_inactive",inputErrorClass:"form__input-error",errorClass:"popup__input-error_active"},q=Array.from(document.querySelectorAll(b.formSelector));function k(){const e=document.querySelector(".img-popup__title"),t=document.querySelector(".img-popup__img"),n=document.querySelector(".img-popup");t.src=this._link,t.alt=this._title,e.textContent=this._title,o(n)}function w(e){const t=new i(e,"#card-template",k);y.prepend(t.generateCard())}a.addEventListener("submit",(function(e){e.preventDefault(),p.textContent=_.value,u.textContent=d.value,n(c)})),r.addEventListener("click",(function(){_.value=p.textContent,d.value=u.textContent,o(c)})),l.addEventListener("click",(()=>n(c))),f.addEventListener("submit",(function(e){e.preventDefault(),w({link:g.value,title:S.value}),n(m),e.target.reset()})),h.addEventListener("click",(()=>o(m))),v.addEventListener("click",(()=>n(m))),E.addEventListener("click",(()=>n(L))),[{title:"Yosemite Valley",link:"https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg"},{title:"Lake Louise",link:"https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg"},{title:"Bald Mountains",link:"https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_bald-mountains.jpg"},{title:"Latemar",link:"https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_latemar.jpg"},{title:"Vanoise National Park",link:"https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_vanoise.jpg"},{title:"Lago di Braies",link:"https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lago.jpg"}].forEach((e=>{w(e)})),q.forEach((e=>{new s(b,e).enableValidation()}))})();