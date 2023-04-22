!function(){"use strict";class t{constructor(t,e,s){this._title=t.title,this._link=t.link,this._templateSelector=e,this._handleCardClick=s}_getTemplate(){return document.querySelector(this._templateSelector).content.querySelector(".card").cloneNode(!0)}_setEventListeners(){this._element.querySelector(".card__icon-bin").addEventListener("click",(()=>{this._deleteCard()})),this._element.querySelector(".card__icon").addEventListener("click",(t=>{this._toggleLike(t)})),this._element.querySelector(".card__img").addEventListener("click",(t=>{this._handleCardClick()}))}_toggleLike(t){t.target.classList.toggle("card__icon_active")}_deleteCard(){this._element.remove(),this._element=null}generateCard(){this._element=this._getTemplate();const t=this._element.querySelector(".card__img"),e=this._element.querySelector(".card__title");return t.src=this._link,t.alt=`Photo of ${this._title}`,e.textContent=this._title,this._setEventListeners(),this._element}}class e{constructor(t,e){this._settings=t,this._formElement=e}_showInputError(t,e){const s=this._formElement.querySelector(`.${t.id}-error`);t.classList.add(this._settings.inputErrorClass),s.textContent=e,s.classList.add(this._settings.errorClass)}_hasInvalidInput(){return this._inputList.some((t=>!t.validity.valid))}_hideInputError(t){const e=this._formElement.querySelector(`.${t.id}-error`);t.classList.remove(this._settings.inputErrorClass),e.classList.remove(this._settings.errorClass),e.textContent="."}_checkInputValidity(t){t.validity.valid?this._hideInputError(t):this._showInputError(t,t.validationMessage)}_toggleButtonState(){this._hasInvalidInput()?this._disableButton():(this._buttonElement.classList.remove(this._settings.inactiveButtonClass),this._buttonElement.disabled=!1)}_disableButton(){this._buttonElement.classList.add(this._settings.inactiveButtonClass),this._buttonElement.disabled=!0}_setEventListeners(){this._formElement.addEventListener("reset",(()=>{this._disableFormAfterSubmit()})),this._inputList.forEach((t=>{t.addEventListener("input",(e=>{this._checkInputValidity(t),this._toggleButtonState()}))}))}_disableFormAfterSubmit(){this._disableButton()}enableValidation(){this._inputList=[...this._formElement.querySelectorAll(this._settings.inputSelector)],this._buttonElement=this._formElement.querySelector(this._settings.submitButtonSelector),this._disableButton(),this._setEventListeners()}}class s{constructor(t){this._popup=document.querySelector(t),this._closeButton=this._popup.querySelector(".popup__close-btn")}open(){this._popup.classList.add("popup_opened")}close=()=>{this._popup.classList.remove("popup_opened")};_handleEscClose=t=>{"Escape"===t.key&&this.close()};_handleMouseClickClose=t=>{t.target.classList.contains("popup_opened")&&this.close()};setEventListeners(){document.addEventListener("keydown",this._handleEscClose),document.addEventListener("mousedown",this._handleMouseClickClose),this._closeButton.addEventListener("click",this.close)}}class i extends s{constructor(t,e){super(t),this._submitCallbackFunction=e,this._inputSelector=".form__input",this._form=this._popup.querySelector(".form"),this._inputs=Array.from(this._form.querySelectorAll(this._inputSelector))}_getInputValues(){const t={};return this._inputs.forEach((e=>{t[e.name]=e.value})),t}_formSubmit(t){t.preventDefault(),this._submitCallbackFunction(this._getInputValues()),this.close(),this._form.reset()}setEventListeners(){this._form.addEventListener("submit",(t=>this._formSubmit(t))),super.setEventListeners()}prePopulateFields(t){this._inputs.forEach((e=>{e.value=t[e.name]}))}}const n={formSelector:".form",inputSelector:".form__input",submitButtonSelector:".form__submit",inactiveButtonClass:"popup__field-submit_inactive",inputErrorClass:"form__input-error",errorClass:"popup__input-error_active"},o=document.querySelector(".profile__info-btn"),r=document.querySelector(".profile__add-btn"),l=document.querySelector(".cards"),a=Array.from(document.querySelectorAll(n.formSelector)),c=new class{constructor(t){let{nameSelector:e,jobSelector:s}=t;this._name=document.querySelector(e),this._job=document.querySelector(s)}getUserInfo(){return{name:this._name.textContent,job:this._job.textContent}}setUserInfo(t){let{name:e,job:s}=t;this._name.textContent=e,this._job.textContent=s}}({nameSelector:".profile__info-name",jobSelector:".profile__info-job"}),_=new class extends s{constructor(t){super(t),this._title=this._popup.querySelector(".img-popup__title"),this._image=this._popup.querySelector(".img-popup__img")}open(t){super.open(),this._image.src=t._link,this._image.alt=t._title,this._title.textContent=t._title}}(".img-popup");_.setEventListeners();const u=new i(".profile-popup",(t=>{c.setUserInfo(t)}));u.setEventListeners();const d=new i(".card-popup",(e=>{const s=new t(e,"#card-template",p);m.addItem(s.generateCard())}));d.setEventListeners();const m=new class{constructor(t,e){let{items:s,renderer:i}=t;this._renderedItems=s,this._renderer=i,this._container=document.querySelector(e)}addItem(t){this._container.prepend(t)}renderItems(){this._renderedItems.forEach((t=>this._renderer(t)))}}({items:[{title:"Yosemite Valley",link:"https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg"},{title:"Lake Louise",link:"https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg"},{title:"Bald Mountains",link:"https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_bald-mountains.jpg"},{title:"Latemar",link:"https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_latemar.jpg"},{title:"Vanoise National Park",link:"https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_vanoise.jpg"},{title:"Lago di Braies",link:"https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lago.jpg"}],renderer:e=>{var s;(s=new t(e,"#card-template",p)).generateCard(),l.prepend(s.generateCard())}},".cards");function p(){_.open(this)}m.renderItems(),r.addEventListener("click",(()=>d.open())),o.addEventListener("click",(function(){u.prePopulateFields(c.getUserInfo()),u.open()})),a.forEach((t=>{new e(n,t).enableValidation()}))}();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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S0FBTSxtRkFFUixDQUNFRixNQUFPLGlCQUNQRSxLQUFNLGlGQ01hZ0gsU0FBV08sSUF1QmxDLElBQW9COUgsS0F0QkEsSUFBSUYsRUFBS2dJLEVBQU0saUJBQWtCWixJQXVCOUN6RixlQUNMd0UsRUFBZTJCLFFBQVE1SCxFQUFLeUIsZUF2QlAsR0FFcEIsVUFjSCxTQUFTeUYsSUFDUEwsRUFBVzFDLEtBQUtoRSxLQUNsQixDQWRBZ0gsRUFBTVUsY0F3Qk43QixFQUFtQi9FLGlCQUFpQixTQUFTLElBQU1nRyxFQUFhOUMsU0FDaEU0QixFQUFrQjlFLGlCQUFpQixTQXRCbkMsV0FDRStGLEVBQWlCcEIsa0JBQWtCTyxFQUFRTSxlQUMzQ08sRUFBaUI3QyxNQUNuQixJQXVCQStCLEVBQVl4QyxTQUFRekIsSUFDTyxJQUFJRixFQUFjOEQsRUFBa0I1RCxHQUM1QzBCLGtCQUFrQixHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2ViX3Byb2plY3RfNC8uL3NyYy9jb21wb25lbnRzL0NhcmQuanMiLCJ3ZWJwYWNrOi8vd2ViX3Byb2plY3RfNC8uL3NyYy9jb21wb25lbnRzL0Zvcm1WYWxpZGF0b3IuanMiLCJ3ZWJwYWNrOi8vd2ViX3Byb2plY3RfNC8uL3NyYy9jb21wb25lbnRzL1BvcHVwLmpzIiwid2VicGFjazovL3dlYl9wcm9qZWN0XzQvLi9zcmMvY29tcG9uZW50cy9Qb3B1cFdpdGhGb3JtLmpzIiwid2VicGFjazovL3dlYl9wcm9qZWN0XzQvLi9zcmMvdXRpbHMvY29uc3RhbnRzLmpzIiwid2VicGFjazovL3dlYl9wcm9qZWN0XzQvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2ViX3Byb2plY3RfNC8uL3NyYy9jb21wb25lbnRzL1VzZXJJbmZvLmpzIiwid2VicGFjazovL3dlYl9wcm9qZWN0XzQvLi9zcmMvY29tcG9uZW50cy9Qb3B1cFdpdGhJbWFnZS5qcyIsIndlYnBhY2s6Ly93ZWJfcHJvamVjdF80Ly4vc3JjL2NvbXBvbmVudHMvU2VjdGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBDYXJkIHtcclxuICAgIGNvbnN0cnVjdG9yKGRhdGEsIHRlbXBsYXRlU2VsZWN0b3IsIGhhbmRsZUNhcmRDbGljaykge1xyXG4gICAgICAgIHRoaXMuX3RpdGxlID0gZGF0YS50aXRsZTtcclxuICAgICAgICB0aGlzLl9saW5rID0gZGF0YS5saW5rO1xyXG4gICAgICAgIHRoaXMuX3RlbXBsYXRlU2VsZWN0b3IgPSB0ZW1wbGF0ZVNlbGVjdG9yO1xyXG4gICAgICAgIHRoaXMuX2hhbmRsZUNhcmRDbGljayA9IGhhbmRsZUNhcmRDbGljaztcclxuICAgIH1cclxuXHJcbiAgICBfZ2V0VGVtcGxhdGUoKSB7XHJcbiAgICAgICAgY29uc3QgY2FyZFRlbXBsYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLl90ZW1wbGF0ZVNlbGVjdG9yKS5jb250ZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2FyZFwiKS5jbG9uZU5vZGUodHJ1ZSk7XHJcbiAgICAgICAgcmV0dXJuIGNhcmRUZW1wbGF0ZTtcclxuICAgIH1cclxuXHJcbiAgICBfc2V0RXZlbnRMaXN0ZW5lcnMoKSB7XHJcbiAgICAgICAgY29uc3QgZGVsZXRlQnV0dG9uID0gdGhpcy5fZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmNhcmRfX2ljb24tYmluXCIpO1xyXG4gICAgICAgIGRlbGV0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLl9kZWxldGVDYXJkKCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuX2VsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYXJkX19pY29uXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLl90b2dnbGVMaWtlKGUpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLl9lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2FyZF9faW1nXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLl9oYW5kbGVDYXJkQ2xpY2soKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgX3RvZ2dsZUxpa2UoZSkge1xyXG4gICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC50b2dnbGUoXCJjYXJkX19pY29uX2FjdGl2ZVwiKTtcclxuICAgIH1cclxuXHJcbiAgICBfZGVsZXRlQ2FyZCgpIHtcclxuICAgICAgICB0aGlzLl9lbGVtZW50LnJlbW92ZSgpO1xyXG4gICAgICAgIHRoaXMuX2VsZW1lbnQgPSBudWxsO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBnZW5lcmF0ZUNhcmQoKSB7XHJcbiAgICAgICAgdGhpcy5fZWxlbWVudCA9IHRoaXMuX2dldFRlbXBsYXRlKCk7XHJcblxyXG4gICAgICAgIGNvbnN0IGNhcmRJbWcgPSB0aGlzLl9lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2FyZF9faW1nXCIpO1xyXG4gICAgICAgIGNvbnN0IGNhcmRUaXRsZSA9IHRoaXMuX2VsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYXJkX190aXRsZVwiKTtcclxuXHJcbiAgICAgICAgY2FyZEltZy5zcmMgPSB0aGlzLl9saW5rO1xyXG4gICAgICAgIGNhcmRJbWcuYWx0ID0gYFBob3RvIG9mICR7dGhpcy5fdGl0bGV9YDtcclxuICAgICAgICBjYXJkVGl0bGUudGV4dENvbnRlbnQgPSB0aGlzLl90aXRsZTtcclxuXHJcbiAgICAgICAgdGhpcy5fc2V0RXZlbnRMaXN0ZW5lcnMoKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2VsZW1lbnQ7XHJcblxyXG4gICAgfVxyXG5cclxuXHJcbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBGb3JtVmFsaWRhdG9yIHtcclxuICBjb25zdHJ1Y3RvcihzZXR0aW5ncywgZm9ybSkge1xyXG4gICAgdGhpcy5fc2V0dGluZ3MgPSBzZXR0aW5ncztcclxuICAgIHRoaXMuX2Zvcm1FbGVtZW50ID0gZm9ybTtcclxuICB9XHJcblxyXG4gIF9zaG93SW5wdXRFcnJvcihpbnB1dEVsZW1lbnQsIGVycm9yTWVzc2FnZSkge1xyXG4gICAgY29uc3QgZXJyb3JFbGVtZW50ID0gdGhpcy5fZm9ybUVsZW1lbnQucXVlcnlTZWxlY3RvcihgLiR7aW5wdXRFbGVtZW50LmlkfS1lcnJvcmApO1xyXG4gICAgaW5wdXRFbGVtZW50LmNsYXNzTGlzdC5hZGQodGhpcy5fc2V0dGluZ3MuaW5wdXRFcnJvckNsYXNzKTtcclxuICAgIGVycm9yRWxlbWVudC50ZXh0Q29udGVudCA9IGVycm9yTWVzc2FnZTtcclxuICAgIGVycm9yRWxlbWVudC5jbGFzc0xpc3QuYWRkKHRoaXMuX3NldHRpbmdzLmVycm9yQ2xhc3MpO1xyXG5cclxuICB9XHJcblxyXG4gIF9oYXNJbnZhbGlkSW5wdXQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5faW5wdXRMaXN0LnNvbWUoKGlucHV0RWxlbWVudCkgPT4gIWlucHV0RWxlbWVudC52YWxpZGl0eS52YWxpZCk7XHJcbiAgfTtcclxuXHJcbiAgX2hpZGVJbnB1dEVycm9yKGlucHV0RWxlbWVudCkge1xyXG4gICAgY29uc3QgZXJyb3JFbGVtZW50ID0gdGhpcy5fZm9ybUVsZW1lbnQucXVlcnlTZWxlY3RvcihgLiR7aW5wdXRFbGVtZW50LmlkfS1lcnJvcmApO1xyXG4gICAgaW5wdXRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5fc2V0dGluZ3MuaW5wdXRFcnJvckNsYXNzKTtcclxuICAgIGVycm9yRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuX3NldHRpbmdzLmVycm9yQ2xhc3MpO1xyXG4gICAgZXJyb3JFbGVtZW50LnRleHRDb250ZW50ID0gXCIuXCI7XHJcbiAgfTtcclxuXHJcbiAgX2NoZWNrSW5wdXRWYWxpZGl0eShpbnB1dEVsZW1lbnQpIHtcclxuICAgIGlmIChpbnB1dEVsZW1lbnQudmFsaWRpdHkudmFsaWQpIHtcclxuICAgICAgdGhpcy5faGlkZUlucHV0RXJyb3IoaW5wdXRFbGVtZW50KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuX3Nob3dJbnB1dEVycm9yKGlucHV0RWxlbWVudCwgaW5wdXRFbGVtZW50LnZhbGlkYXRpb25NZXNzYWdlKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBfdG9nZ2xlQnV0dG9uU3RhdGUoKSB7XHJcbiAgICBpZiAodGhpcy5faGFzSW52YWxpZElucHV0KCkpIHtcclxuICAgICAgdGhpcy5fZGlzYWJsZUJ1dHRvbigpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5fYnV0dG9uRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuX3NldHRpbmdzLmluYWN0aXZlQnV0dG9uQ2xhc3MpO1xyXG4gICAgICB0aGlzLl9idXR0b25FbGVtZW50LmRpc2FibGVkID0gZmFsc2U7XHJcblxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgX2Rpc2FibGVCdXR0b24oKSB7XHJcbiAgICB0aGlzLl9idXR0b25FbGVtZW50LmNsYXNzTGlzdC5hZGQodGhpcy5fc2V0dGluZ3MuaW5hY3RpdmVCdXR0b25DbGFzcyk7XHJcbiAgICB0aGlzLl9idXR0b25FbGVtZW50LmRpc2FibGVkID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIF9zZXRFdmVudExpc3RlbmVycygpIHtcclxuICAgIHRoaXMuX2Zvcm1FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNldFwiLCAoKSA9PiB7IHRoaXMuIF9kaXNhYmxlRm9ybUFmdGVyU3VibWl0KCkgfSk7XHJcbiAgICB0aGlzLl9pbnB1dExpc3QuZm9yRWFjaCgoaW5wdXRFbGVtZW50KSA9PiB7XHJcbiAgICAgIGlucHV0RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKGUpID0+IHtcclxuICAgICAgICB0aGlzLl9jaGVja0lucHV0VmFsaWRpdHkoaW5wdXRFbGVtZW50KTtcclxuICAgICAgICB0aGlzLl90b2dnbGVCdXR0b25TdGF0ZSgpO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgX2Rpc2FibGVGb3JtQWZ0ZXJTdWJtaXQoKSB7XHJcbiAgICAgIHRoaXMuX2Rpc2FibGVCdXR0b24oKTtcclxuICB9XHJcblxyXG4gIGVuYWJsZVZhbGlkYXRpb24oKSB7XHJcbiAgICB0aGlzLl9pbnB1dExpc3QgPSBbLi4udGhpcy5fZm9ybUVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCh0aGlzLl9zZXR0aW5ncy5pbnB1dFNlbGVjdG9yKV07XHJcbiAgICB0aGlzLl9idXR0b25FbGVtZW50ID0gdGhpcy5fZm9ybUVsZW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLl9zZXR0aW5ncy5zdWJtaXRCdXR0b25TZWxlY3Rvcik7XHJcbiAgICB0aGlzLl9kaXNhYmxlQnV0dG9uKCk7XHJcbiAgICB0aGlzLl9zZXRFdmVudExpc3RlbmVycygpO1xyXG4gIH1cclxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvcHVwIHtcclxuICAgIGNvbnN0cnVjdG9yKHBvcHVwKSB7XHJcbiAgICAgICAgdGhpcy5fcG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHBvcHVwKTtcclxuICAgICAgICB0aGlzLl9jbG9zZUJ1dHRvbiA9IHRoaXMuX3BvcHVwLnF1ZXJ5U2VsZWN0b3IoXCIucG9wdXBfX2Nsb3NlLWJ0blwiKTtcclxuICAgIH1cclxuXHJcbiAgICBvcGVuKCkge1xyXG4gICAgICAgIHRoaXMuX3BvcHVwLmNsYXNzTGlzdC5hZGQoXCJwb3B1cF9vcGVuZWRcIik7XHJcbiAgICB9XHJcblxyXG4gICAgY2xvc2UgPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5fcG9wdXAuY2xhc3NMaXN0LnJlbW92ZShcInBvcHVwX29wZW5lZFwiKTtcclxuICAgIH1cclxuXHJcbiAgICBfaGFuZGxlRXNjQ2xvc2UgPSAoZXZ0KSA9PiB7XHJcbiAgICAgICAgaWYgKGV2dC5rZXkgPT09IFwiRXNjYXBlXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5jbG9zZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBfaGFuZGxlTW91c2VDbGlja0Nsb3NlID0gKGV2dCkgPT4ge1xyXG4gICAgICAgIGlmIChldnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcInBvcHVwX29wZW5lZFwiKSkge1xyXG4gICAgICAgICAgICB0aGlzLmNsb3NlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNldEV2ZW50TGlzdGVuZXJzKCkge1xyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIHRoaXMuX2hhbmRsZUVzY0Nsb3NlKTtcclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIHRoaXMuX2hhbmRsZU1vdXNlQ2xpY2tDbG9zZSk7XHJcbiAgICAgICAgdGhpcy5fY2xvc2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuY2xvc2UpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IFBvcHVwIGZyb20gJy4vUG9wdXAuanMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9wdXBXaXRoRm9ybSBleHRlbmRzIFBvcHVwIHtcclxuICAgIGNvbnN0cnVjdG9yKHBvcHVwLCBzdWJtaXRDYWxsYmFja0Z1bmN0aW9uKSB7XHJcbiAgICAgICAgc3VwZXIocG9wdXApO1xyXG4gICAgICAgIHRoaXMuX3N1Ym1pdENhbGxiYWNrRnVuY3Rpb24gPSBzdWJtaXRDYWxsYmFja0Z1bmN0aW9uO1xyXG4gICAgICAgIHRoaXMuX2lucHV0U2VsZWN0b3IgPSBcIi5mb3JtX19pbnB1dFwiO1xyXG4gICAgICAgIHRoaXMuX2Zvcm0gPSB0aGlzLl9wb3B1cC5xdWVyeVNlbGVjdG9yKFwiLmZvcm1cIik7XHJcbiAgICAgICAgdGhpcy5faW5wdXRzID0gQXJyYXkuZnJvbSh0aGlzLl9mb3JtLnF1ZXJ5U2VsZWN0b3JBbGwodGhpcy5faW5wdXRTZWxlY3RvcikpO1xyXG4gICAgfVxyXG5cclxuICAgIF9nZXRJbnB1dFZhbHVlcygpIHtcclxuICAgICAgICBjb25zdCB2YWx1ZXMgPSB7fTtcclxuICAgICAgICB0aGlzLl9pbnB1dHMuZm9yRWFjaCgoaW5wdXQpID0+IHtcclxuICAgICAgICAgICAgICAgIHZhbHVlc1tpbnB1dC5uYW1lXSA9IGlucHV0LnZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgICAgICByZXR1cm4gdmFsdWVzO1xyXG4gICAgfVxyXG5cclxuICAgIF9mb3JtU3VibWl0KGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgdGhpcy5fc3VibWl0Q2FsbGJhY2tGdW5jdGlvbih0aGlzLl9nZXRJbnB1dFZhbHVlcygpKTtcclxuICAgICAgICB0aGlzLmNsb3NlKCk7XHJcbiAgICAgICAgdGhpcy5fZm9ybS5yZXNldCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldEV2ZW50TGlzdGVuZXJzKCkge1xyXG4gICAgICAgIHRoaXMuX2Zvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZSkgPT4gdGhpcy5fZm9ybVN1Ym1pdChlKSk7XHJcbiAgICAgICAgc3VwZXIuc2V0RXZlbnRMaXN0ZW5lcnMoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcmVQb3B1bGF0ZUZpZWxkcyhkYXRhKXtcclxuICAgICAgICB0aGlzLl9pbnB1dHMuZm9yRWFjaCgoaW5wdXQpID0+IHtcclxuICAgICAgICAgICAgICAgIGlucHV0LnZhbHVlID0gZGF0YVtpbnB1dC5uYW1lXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgY29uc3QgaW5pdGlhbENhcmRzID0gW1xyXG4gIHtcclxuICAgIHRpdGxlOiBcIllvc2VtaXRlIFZhbGxleVwiLFxyXG4gICAgbGluazogXCJodHRwczovL3ByYWN0aWN1bS1jb250ZW50LnMzLnVzLXdlc3QtMS5hbWF6b25hd3MuY29tL3dlYi1jb2RlL21vdmVkX3lvc2VtaXRlLmpwZ1wiXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogXCJMYWtlIExvdWlzZVwiLFxyXG4gICAgbGluazogXCJodHRwczovL3ByYWN0aWN1bS1jb250ZW50LnMzLnVzLXdlc3QtMS5hbWF6b25hd3MuY29tL3dlYi1jb2RlL21vdmVkX2xha2UtbG91aXNlLmpwZ1wiXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogXCJCYWxkIE1vdW50YWluc1wiLFxyXG4gICAgbGluazogXCJodHRwczovL3ByYWN0aWN1bS1jb250ZW50LnMzLnVzLXdlc3QtMS5hbWF6b25hd3MuY29tL3dlYi1jb2RlL21vdmVkX2JhbGQtbW91bnRhaW5zLmpwZ1wiXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogXCJMYXRlbWFyXCIsXHJcbiAgICBsaW5rOiBcImh0dHBzOi8vcHJhY3RpY3VtLWNvbnRlbnQuczMudXMtd2VzdC0xLmFtYXpvbmF3cy5jb20vd2ViLWNvZGUvbW92ZWRfbGF0ZW1hci5qcGdcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6IFwiVmFub2lzZSBOYXRpb25hbCBQYXJrXCIsXHJcbiAgICBsaW5rOiBcImh0dHBzOi8vcHJhY3RpY3VtLWNvbnRlbnQuczMudXMtd2VzdC0xLmFtYXpvbmF3cy5jb20vd2ViLWNvZGUvbW92ZWRfdmFub2lzZS5qcGdcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6IFwiTGFnbyBkaSBCcmFpZXNcIixcclxuICAgIGxpbms6IFwiaHR0cHM6Ly9wcmFjdGljdW0tY29udGVudC5zMy51cy13ZXN0LTEuYW1hem9uYXdzLmNvbS93ZWItY29kZS9tb3ZlZF9sYWdvLmpwZ1wiXHJcbiAgfVxyXG5dO1xyXG5cclxuLy92YWxpZGF0aW9uIGNvbmZpZ1xyXG5leHBvcnQgY29uc3QgdmFsaWRhdGlvbkNvbmZpZyA9IHtcclxuICBmb3JtU2VsZWN0b3I6IFwiLmZvcm1cIixcclxuICBpbnB1dFNlbGVjdG9yOiBcIi5mb3JtX19pbnB1dFwiLFxyXG4gIHN1Ym1pdEJ1dHRvblNlbGVjdG9yOiBcIi5mb3JtX19zdWJtaXRcIixcclxuICBpbmFjdGl2ZUJ1dHRvbkNsYXNzOiBcInBvcHVwX19maWVsZC1zdWJtaXRfaW5hY3RpdmVcIixcclxuICBpbnB1dEVycm9yQ2xhc3M6IFwiZm9ybV9faW5wdXQtZXJyb3JcIixcclxuICBlcnJvckNsYXNzOiBcInBvcHVwX19pbnB1dC1lcnJvcl9hY3RpdmVcIlxyXG59XHJcblxyXG4vL3Byb2ZpbGUgZWRpdCBmb3JtIGVsZW1lbnRzXHJcbmV4cG9ydCBjb25zdCBlZGl0UHJvZmlsZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvZmlsZV9faW5mby1idG5cIik7XHJcbmV4cG9ydCBjb25zdCBuZXdDYXJkUG9wdXBCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2ZpbGVfX2FkZC1idG5cIik7XHJcbmV4cG9ydCBjb25zdCBjYXJkc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2FyZHNcIik7XHJcbmV4cG9ydCBjb25zdCBpbml0YWxGb3JtcyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCh2YWxpZGF0aW9uQ29uZmlnLmZvcm1TZWxlY3RvcikpOyIsImltcG9ydCBcIi4vcGFnZXMvaW5kZXguY3NzXCI7XHJcbmltcG9ydCBDYXJkIGZyb20gXCIuL2NvbXBvbmVudHMvQ2FyZC5qc1wiO1xyXG5pbXBvcnQgU2VjdGlvbiBmcm9tIFwiLi9jb21wb25lbnRzL1NlY3Rpb24uanNcIjtcclxuaW1wb3J0IEZvcm1WYWxpZGF0b3IgZnJvbSBcIi4vY29tcG9uZW50cy9Gb3JtVmFsaWRhdG9yLmpzXCI7XHJcbmltcG9ydCBQb3B1cFdpdGhGb3JtIGZyb20gXCIuL2NvbXBvbmVudHMvUG9wdXBXaXRoRm9ybS5qc1wiO1xyXG5pbXBvcnQgUG9wdXBXaXRoSW1hZ2UgZnJvbSBcIi4vY29tcG9uZW50cy9Qb3B1cFdpdGhJbWFnZS5qc1wiO1xyXG5pbXBvcnQgVXNlckluZm8gZnJvbSBcIi4vY29tcG9uZW50cy9Vc2VySW5mby5qc1wiO1xyXG5pbXBvcnQgeyBpbml0aWFsQ2FyZHMsIHZhbGlkYXRpb25Db25maWcsIGVkaXRQcm9maWxlQnV0dG9uLCBuZXdDYXJkUG9wdXBCdXR0b24sIGNhcmRzQ29udGFpbmVyLCBpbml0YWxGb3JtcyB9IGZyb20gXCIuL3V0aWxzL2NvbnN0YW50cy5qc1wiO1xyXG5cclxuXHJcblxyXG4vL2luaXRpYXRlIG9iamVjdHNcclxuY29uc3QgcHJvZmlsZSA9IG5ldyBVc2VySW5mbyh7IG5hbWVTZWxlY3RvcjogXCIucHJvZmlsZV9faW5mby1uYW1lXCIsIGpvYlNlbGVjdG9yOiBcIi5wcm9maWxlX19pbmZvLWpvYlwiIH0pO1xyXG5cclxuY29uc3QgaW1hZ2VQb3B1cCA9IG5ldyBQb3B1cFdpdGhJbWFnZShcIi5pbWctcG9wdXBcIik7XHJcbmltYWdlUG9wdXAuc2V0RXZlbnRMaXN0ZW5lcnMoKTtcclxuXHJcbmNvbnN0IGVkaXRQcm9maWxlUG9wdXAgPSBuZXcgUG9wdXBXaXRoRm9ybShcIi5wcm9maWxlLXBvcHVwXCIsIChkYXRhKSA9PiB7XHJcbiAgcHJvZmlsZS5zZXRVc2VySW5mbyhkYXRhKTtcclxufSk7XHJcbmVkaXRQcm9maWxlUG9wdXAuc2V0RXZlbnRMaXN0ZW5lcnMoKTtcclxuXHJcbmNvbnN0IGFkZENhcmRQb3B1cCA9IG5ldyBQb3B1cFdpdGhGb3JtKFwiLmNhcmQtcG9wdXBcIiwgKGRhdGEpID0+IHtcclxuICBjb25zdCBjYXJkID0gbmV3IENhcmQoZGF0YSwgXCIjY2FyZC10ZW1wbGF0ZVwiLCBoYW5kbGVJbWFnZUNsaWNrKTtcclxuICBjYXJkcy5hZGRJdGVtKGNhcmQuZ2VuZXJhdGVDYXJkKCkpO1xyXG59KTtcclxuYWRkQ2FyZFBvcHVwLnNldEV2ZW50TGlzdGVuZXJzKCk7XHJcblxyXG5jb25zdCBjYXJkcyA9IG5ldyBTZWN0aW9uKHtcclxuICBpdGVtczogaW5pdGlhbENhcmRzLCByZW5kZXJlcjogKGl0ZW0pID0+IHtcclxuICAgIGNvbnN0IG5ld0NhcmQgPSBuZXcgQ2FyZChpdGVtLCBcIiNjYXJkLXRlbXBsYXRlXCIsIGhhbmRsZUltYWdlQ2xpY2spO1xyXG4gICAgcmVuZGVyQ2FyZChuZXdDYXJkKTtcclxuICB9XHJcbn0sIFwiLmNhcmRzXCIpO1xyXG5cclxuY2FyZHMucmVuZGVySXRlbXMoKTtcclxuXHJcbi8vcHJvZmlsZSBwb3B1cCBvcGVuIGFuZCBwcmVwb3B1bGF0ZVxyXG5mdW5jdGlvbiBvcGVuUHJvZmlsZVBvcHVwKCkge1xyXG4gIGVkaXRQcm9maWxlUG9wdXAucHJlUG9wdWxhdGVGaWVsZHMocHJvZmlsZS5nZXRVc2VySW5mbygpKTtcclxuICBlZGl0UHJvZmlsZVBvcHVwLm9wZW4oKTtcclxufVxyXG5cclxuXHJcbi8vRnVuY3Rpb25zIFxyXG5cclxuLy9jYXJkIGZ1bmN0aW9uc1xyXG5mdW5jdGlvbiBoYW5kbGVJbWFnZUNsaWNrKCkge1xyXG4gIGltYWdlUG9wdXAub3Blbih0aGlzKTtcclxufVxyXG5cclxuLy9jYXJkIHJlbmRlcmluZyBmdW5jdGlvblxyXG5mdW5jdGlvbiByZW5kZXJDYXJkKGRhdGEpIHtcclxuICBkYXRhLmdlbmVyYXRlQ2FyZCgpO1xyXG4gIGNhcmRzQ29udGFpbmVyLnByZXBlbmQoZGF0YS5nZW5lcmF0ZUNhcmQoKSk7XHJcbn1cclxuXHJcblxyXG4vL3NldCBidXR0b24gZXZlbnQgbGlzdGVuZXJzXHJcbm5ld0NhcmRQb3B1cEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gYWRkQ2FyZFBvcHVwLm9wZW4oKSk7XHJcbmVkaXRQcm9maWxlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBvcGVuUHJvZmlsZVBvcHVwKTtcclxuXHJcblxyXG4vL2luaXRpYXRlIGZvcm1zIHZhbGlkYXRpb25cclxuaW5pdGFsRm9ybXMuZm9yRWFjaChmb3JtID0+IHtcclxuICBjb25zdCBuZXdGb3JtVmFsaWRhdG9yID0gbmV3IEZvcm1WYWxpZGF0b3IodmFsaWRhdGlvbkNvbmZpZywgZm9ybSk7XHJcbiAgbmV3Rm9ybVZhbGlkYXRvci5lbmFibGVWYWxpZGF0aW9uKCk7XHJcbn0pO1xyXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBVc2VySW5mbyB7XHJcbiAgICBjb25zdHJ1Y3Rvcih7IG5hbWVTZWxlY3Rvciwgam9iU2VsZWN0b3IgfSkge1xyXG4gICAgICAgIHRoaXMuX25hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKG5hbWVTZWxlY3Rvcik7XHJcbiAgICAgICAgdGhpcy5fam9iID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihqb2JTZWxlY3Rvcik7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VXNlckluZm8oKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgbmFtZTogdGhpcy5fbmFtZS50ZXh0Q29udGVudCxcclxuICAgICAgICAgICAgICAgIGpvYiA6IHRoaXMuX2pvYi50ZXh0Q29udGVudH1cclxuICAgIH1cclxuXHJcbiAgICBzZXRVc2VySW5mbyh7bmFtZSwgam9ifSl7XHJcbiAgICAgICAgdGhpcy5fbmFtZS50ZXh0Q29udGVudCA9IG5hbWU7XHJcbiAgICAgICAgdGhpcy5fam9iLnRleHRDb250ZW50ID0gam9iO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IFBvcHVwIGZyb20gJy4vUG9wdXAuanMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9wdXBXaXRoSW1hZ2UgZXh0ZW5kcyBQb3B1cCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwb3B1cCkge1xyXG4gICAgICAgIHN1cGVyKHBvcHVwKTtcclxuICAgICAgICB0aGlzLl90aXRsZSA9IHRoaXMuX3BvcHVwLnF1ZXJ5U2VsZWN0b3IoXCIuaW1nLXBvcHVwX190aXRsZVwiKTtcclxuICAgICAgICB0aGlzLl9pbWFnZSA9IHRoaXMuX3BvcHVwLnF1ZXJ5U2VsZWN0b3IoXCIuaW1nLXBvcHVwX19pbWdcIik7XHJcbiAgICB9XHJcblxyXG4gICAgb3BlbihjYXJkKSB7XHJcbiAgICAgICAgc3VwZXIub3BlbigpO1xyXG4gICAgICAgIHRoaXMuX2ltYWdlLnNyYyA9IGNhcmQuX2xpbms7XHJcbiAgICAgICAgdGhpcy5faW1hZ2UuYWx0ID0gY2FyZC5fdGl0bGU7XHJcbiAgICAgICAgdGhpcy5fdGl0bGUudGV4dENvbnRlbnQgPSBjYXJkLl90aXRsZTtcclxuICAgIH1cclxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlY3Rpb24ge1xyXG4gICAgY29uc3RydWN0b3IoeyBpdGVtcywgcmVuZGVyZXIgfSwgY29udGFpbmVyU2VsZWN0b3IpIHtcclxuICAgICAgICB0aGlzLl9yZW5kZXJlZEl0ZW1zID0gaXRlbXM7XHJcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIgPSByZW5kZXJlcjtcclxuICAgICAgICB0aGlzLl9jb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGNvbnRhaW5lclNlbGVjdG9yKTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRJdGVtKGVsZW1lbnQpIHtcclxuICAgICAgICB0aGlzLl9jb250YWluZXIucHJlcGVuZChlbGVtZW50KTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXJJdGVtcygpIHtcclxuICAgICAgICB0aGlzLl9yZW5kZXJlZEl0ZW1zLmZvckVhY2goaXRlbSA9PlxyXG4gICAgICAgICAgICB0aGlzLl9yZW5kZXJlcihpdGVtKVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn0iXSwibmFtZXMiOlsiQ2FyZCIsImNvbnN0cnVjdG9yIiwiZGF0YSIsInRlbXBsYXRlU2VsZWN0b3IiLCJoYW5kbGVDYXJkQ2xpY2siLCJ0aGlzIiwiX3RpdGxlIiwidGl0bGUiLCJfbGluayIsImxpbmsiLCJfdGVtcGxhdGVTZWxlY3RvciIsIl9oYW5kbGVDYXJkQ2xpY2siLCJfZ2V0VGVtcGxhdGUiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJjb250ZW50IiwiY2xvbmVOb2RlIiwiX3NldEV2ZW50TGlzdGVuZXJzIiwiX2VsZW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiX2RlbGV0ZUNhcmQiLCJlIiwiX3RvZ2dsZUxpa2UiLCJ0YXJnZXQiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJyZW1vdmUiLCJnZW5lcmF0ZUNhcmQiLCJjYXJkSW1nIiwiY2FyZFRpdGxlIiwic3JjIiwiYWx0IiwidGV4dENvbnRlbnQiLCJGb3JtVmFsaWRhdG9yIiwic2V0dGluZ3MiLCJmb3JtIiwiX3NldHRpbmdzIiwiX2Zvcm1FbGVtZW50IiwiX3Nob3dJbnB1dEVycm9yIiwiaW5wdXRFbGVtZW50IiwiZXJyb3JNZXNzYWdlIiwiZXJyb3JFbGVtZW50IiwiaWQiLCJhZGQiLCJpbnB1dEVycm9yQ2xhc3MiLCJlcnJvckNsYXNzIiwiX2hhc0ludmFsaWRJbnB1dCIsIl9pbnB1dExpc3QiLCJzb21lIiwidmFsaWRpdHkiLCJ2YWxpZCIsIl9oaWRlSW5wdXRFcnJvciIsIl9jaGVja0lucHV0VmFsaWRpdHkiLCJ2YWxpZGF0aW9uTWVzc2FnZSIsIl90b2dnbGVCdXR0b25TdGF0ZSIsIl9kaXNhYmxlQnV0dG9uIiwiX2J1dHRvbkVsZW1lbnQiLCJpbmFjdGl2ZUJ1dHRvbkNsYXNzIiwiZGlzYWJsZWQiLCJfZGlzYWJsZUZvcm1BZnRlclN1Ym1pdCIsImZvckVhY2giLCJlbmFibGVWYWxpZGF0aW9uIiwicXVlcnlTZWxlY3RvckFsbCIsImlucHV0U2VsZWN0b3IiLCJzdWJtaXRCdXR0b25TZWxlY3RvciIsIlBvcHVwIiwicG9wdXAiLCJfcG9wdXAiLCJfY2xvc2VCdXR0b24iLCJvcGVuIiwiY2xvc2UiLCJfaGFuZGxlRXNjQ2xvc2UiLCJldnQiLCJrZXkiLCJfaGFuZGxlTW91c2VDbGlja0Nsb3NlIiwiY29udGFpbnMiLCJzZXRFdmVudExpc3RlbmVycyIsIlBvcHVwV2l0aEZvcm0iLCJzdWJtaXRDYWxsYmFja0Z1bmN0aW9uIiwic3VwZXIiLCJfc3VibWl0Q2FsbGJhY2tGdW5jdGlvbiIsIl9pbnB1dFNlbGVjdG9yIiwiX2Zvcm0iLCJfaW5wdXRzIiwiQXJyYXkiLCJmcm9tIiwiX2dldElucHV0VmFsdWVzIiwidmFsdWVzIiwiaW5wdXQiLCJuYW1lIiwidmFsdWUiLCJfZm9ybVN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwicmVzZXQiLCJwcmVQb3B1bGF0ZUZpZWxkcyIsInZhbGlkYXRpb25Db25maWciLCJmb3JtU2VsZWN0b3IiLCJlZGl0UHJvZmlsZUJ1dHRvbiIsIm5ld0NhcmRQb3B1cEJ1dHRvbiIsImNhcmRzQ29udGFpbmVyIiwiaW5pdGFsRm9ybXMiLCJwcm9maWxlIiwiX3JlZiIsIm5hbWVTZWxlY3RvciIsImpvYlNlbGVjdG9yIiwiX25hbWUiLCJfam9iIiwiZ2V0VXNlckluZm8iLCJqb2IiLCJzZXRVc2VySW5mbyIsIl9yZWYyIiwiaW1hZ2VQb3B1cCIsIl9pbWFnZSIsImNhcmQiLCJlZGl0UHJvZmlsZVBvcHVwIiwiYWRkQ2FyZFBvcHVwIiwiaGFuZGxlSW1hZ2VDbGljayIsImNhcmRzIiwiYWRkSXRlbSIsImNvbnRhaW5lclNlbGVjdG9yIiwiaXRlbXMiLCJyZW5kZXJlciIsIl9yZW5kZXJlZEl0ZW1zIiwiX3JlbmRlcmVyIiwiX2NvbnRhaW5lciIsImVsZW1lbnQiLCJwcmVwZW5kIiwicmVuZGVySXRlbXMiLCJpdGVtIl0sInNvdXJjZVJvb3QiOiIifQ==