(self.webpackChunktravel_site=self.webpackChunktravel_site||[]).push([[222],{222:(e,s,n)=>{"use strict";function i(e,s){for(var n=0;n<s.length;n++){var i=s[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}n.r(s),n.d(s,{default:()=>a});const a=function(){function e(){!function(e,s){if(!(e instanceof s))throw new TypeError("Cannot call a class as a function")}(this,e),this.injectHTML(),this.modal=document.querySelector(".modal"),this.close=document.querySelector(".modal__close"),this.events()}var s,n;return s=e,(n=[{key:"events",value:function(){var e=this;this.close.addEventListener("click",(function(){return e.closeTheModal()})),document.addEventListener("keyup",(function(s){return e.keyPressHandler(s)}))}},{key:"openTheModal",value:function(){this.modal.classList.add("modal--is-visible")}},{key:"closeTheModal",value:function(){this.modal.classList.remove("modal--is-visible")}},{key:"keyPressHandler",value:function(e){27===e.keyCode&&this.closeTheModal()}},{key:"injectHTML",value:function(){document.body.insertAdjacentHTML("beforeend",'\n      <div class="modal">\n      <div class="modal__inner">\n        <h2\n          class="section-title section-title--blue section-title--less-margin"\n        >\n          <img src="assets/images/icons/mail.svg" class="section-title__icon" />\n          Get in <strong>Touch</strong>\n        </h2>\n        <div class="wrapper wrapper--narrow">\n          <p class="modal__description">\n            We will have an online order system in place soon. Until then,\n            connect with us on any of the platforms below!\n          </p>\n        </div>\n\n        <div class="social-icons">\n          <a href="#" class="social-icons__icon"\n            ><img src="assets/images/icons/facebook.svg" alt="Facebook"\n          /></a>\n          <a href="#" class="social-icons__icon"\n            ><img src="assets/images/icons/twitter.svg" alt="Twitter"\n          /></a>\n          <a href="#" class="social-icons__icon"\n            ><img src="assets/images/icons/instagram.svg" alt="Instagram"\n          /></a>\n          <a href="#" class="social-icons__icon"\n            ><img src="assets/images/icons/youtube.svg" alt="YouTube"\n          /></a>\n        </div>\n      </div>\n      <div class="modal__close">X</div>\n    </div>\n    ')}}])&&i(s.prototype,n),e}()}}]);