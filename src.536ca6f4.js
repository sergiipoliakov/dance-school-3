parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"clu1":[function(require,module,exports) {

},{"./../fonts/Northwell.eot":[["Northwell.26241d4a.eot","I8zL"],"I8zL"],"./../fonts/Northwell.woff":[["Northwell.d01705fd.woff","yPkx"],"yPkx"],"./../fonts/Northwell.ttf":[["Northwell.23b34686.ttf","w9oA"],"w9oA"],"./../fonts/Northwell.svg":[["Northwell.01cbdc2f.svg","o6yf"],"o6yf"],"./../images/main-bg-img.jpg":[["main-bg-img.233e33f8.jpg","qFxE"],"qFxE"],"./../images/service1/mob-Services-and-prices.jpg":[["mob-Services-and-prices.bd995fa6.jpg","RPa4"],"RPa4"],"./../images/service1/tabl-Services-and-prices.jpg":[["tabl-Services-and-prices.261db6ee.jpg","lJbB"],"lJbB"],"./../images/service1/desk-Services-and-prices.jpg":[["desk-Services-and-prices.b01f8c0b.jpg","G27k"],"G27k"],"./../images/icon-close.svg":[["icon-close.bb7ed7e5.svg","cAq2"],"cAq2"],"/Users/poliakovsergii/Documents/GitHub/dance-school-3/src/images/contacts/mob-contacts.jpg":[["mob-contacts.ee394295.jpg","pZQJ"],"pZQJ"],"/Users/poliakovsergii/Documents/GitHub/dance-school-3/src/images/contacts/tabl-contacts.jpg":[["tabl-contacts.58cb5642.jpg","ciTF"],"ciTF"],"/Users/poliakovsergii/Documents/GitHub/dance-school-3/src/images/contacts/desc-contacts.jpg":[["desc-contacts.c61cf9c1.jpg","qoVN"],"qoVN"]}],"k87A":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var p=[{preview:"https://cdn.pixabay.com/photo/2021/07/02/20/35/eg-6382509__340.jpg",original:"https://cdn.pixabay.com/photo/2021/07/02/20/35/eg-6382509_1280.jpg",name:"Елена Головань",description:"qwe"},{preview:"https://cdn.pixabay.com/photo/2021/07/02/21/03/dance-6382566__340.jpg",original:"https://cdn.pixabay.com/photo/2021/07/02/21/03/dance-6382566_1280.jpg",name:"Елена Головань",description:"qwe"},{preview:"https://cdn.pixabay.com/photo/2021/07/02/21/04/dance-6382569__340.jpg",original:"https://cdn.pixabay.com/photo/2021/07/02/21/04/dance-6382569_1280.jpg",name:"Елена Головань",description:"Container Haulage Freight"},{preview:"https://cdn.pixabay.com/photo/2021/07/02/21/11/balet-6382579__340.jpg",original:"https://cdn.pixabay.com/photo/2021/07/02/21/11/balet-6382579_1280.jpg",name:"Елена Головань",description:"dence school"},{preview:"https://cdn.pixabay.com/photo/2021/07/02/21/11/balet-6382577__340.jpg",original:"https://cdn.pixabay.com/photo/2021/07/02/21/11/balet-6382577_1280.jpg",name:"Елена Головань",description:"Flower Blooms"},{preview:"https://cdn.pixabay.com/photo/2021/07/02/21/03/novaya-6382567__340.jpg",original:"https://cdn.pixabay.com/photo/2021/07/02/21/03/novaya-6382567_1280.jpg",name:"Елена Головань",description:"Alpine Mountains"},{preview:"https://cdn.pixabay.com/photo/2021/07/02/21/04/ballet-dancers-6382568__340.jpg",original:"https://cdn.pixabay.com/photo/2021/07/02/21/04/ballet-dancers-6382568_1280.jpg",name:"Елена Головань",description:"Mountain Lake Sailing"},{preview:"https://cdn.pixabay.com/photo/2021/07/02/21/10/balet-6382576__340.jpg",original:"https://cdn.pixabay.com/photo/2021/07/02/21/10/balet-6382576_1280.jpg",name:"Елена Головань",description:"Alpine Spring Meadows"}];exports.default=p;
},{}],"Ef3P":[function(require,module,exports) {
"use strict";var n=e(require("./gallery-items.js"));function e(n){return n&&n.__esModule?n:{default:n}}var a=document.querySelector(".js-gallery"),r=t(n.default);function t(n){return n.map(function(n){var e=n.preview,a=n.original,r=n.description;n.name;return'\n    <li class="item gallery__item">\n\n  <a\n    class="gallery__link"\n   href=\''.concat(a,'\';\n  >\n    <img\n      class="gallery__image"\n      src="').concat(e,'"\n      data-source="').concat(a,'"\n      alt="').concat(r,'"\n    />\n  </a>\n</li>\n')}).join("")}a.insertAdjacentHTML("beforeend",r);
},{"./gallery-items.js":"k87A"}],"hR3q":[function(require,module,exports) {
"use strict";var e=t(require("./gallery-items.js"));function t(e){return e&&e.__esModule?e:{default:e}}var n=document.querySelector(".js-lightbox"),i=document.querySelector(".js-gallery"),r=document.querySelector(".lightbox__image"),o=document.querySelector('button[data-action="close-lightbox"]'),d=document.querySelector(".lightbox__overlay");function a(e){var t=e.target.dataset.source,i=e.target.alt;console.log(t),e.target.classList.contains("gallery__image")&&(e.preventDefault(),n.classList.add("is-open"),window.addEventListener("keydown",s),window.addEventListener("keydown",f),window.addEventListener("keydown",v),c(t,i))}function l(){window.removeEventListener("keydown",s),window.removeEventListener("keydown",f),window.removeEventListener("keydown",v),n.classList.remove("is-open"),g()}function c(e,t){r.src=e,r.alt=t}function u(){l()}function s(e){"Escape"===e.code&&l()}function f(t){var n=e.default.find(function(e){return e.original===r.src});if("ArrowRight"===t.code){var i=e.default.indexOf(n)+1;if(void 0===e.default[i])return r.src=e.default[0].original,void(r.alt=e.default[0].description);r.src=e.default[i].original,r.alt=e.default[i].description}}function v(t){var n=e.default.find(function(e){return e.original===r.src});if("ArrowLeft"===t.code){var i=e.default.indexOf(n)-1;if(void 0===e.default[i])return r.src=e.default[e.default.length-1].original,void(r.alt=e.default[e.default.length-1].description);r.src=e.default[i].original,r.alt=e.default[i].description}}function g(){r.src="",r.alt=""}i.addEventListener("click",a),o.addEventListener("click",l),d.addEventListener("click",u);
},{"./gallery-items.js":"k87A"}],"ZKMY":[function(require,module,exports) {
function t(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=r(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var o=0,a=function(){};return{s:a,n:function(){return o>=t.length?{done:!0}:{done:!1,value:t[o++]}},e:function(t){throw t},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,u=!0,l=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return u=t.done,t},e:function(t){l=!0,i=t},f:function(){try{u||null==n.return||n.return()}finally{if(l)throw i}}}}function r(t,r){if(t){if("string"==typeof t)return e(t,r);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?e(t,r):void 0}}function e(t,r){(null==r||r>t.length)&&(r=t.length);for(var e=0,n=new Array(r);e<r;e++)n[e]=t[e];return n}var n,o=document.querySelectorAll('a[href*="#"]'),a=t(o);try{var i=function(){var t=n.value;t.addEventListener("click",function(r){r.preventDefault();var e=t.getAttribute("href");document.querySelector(""+e).scrollIntoView({behavior:"smooth",block:"start"})})};for(a.s();!(n=a.n()).done;)i()}catch(u){a.e(u)}finally{a.f()}
},{}],"ROoO":[function(require,module,exports) {
var t={listEl:document.querySelector(".dataTime__list1"),closeModalBtn:document.querySelector('[data-action="close-eventbox"]'),modal:document.querySelector(".js-eventbox"),modalContent:document.querySelector(".eventbox__content")};function e(){t.modal.classList.toggle("is-open"),window.addEventListener("keydown",l)}function n(){t.modal.classList.toggle("is-open"),window.removeEventListener("keydown",l)}function o(t){var n=t.target.dataset.id;"dataTime__link truncate-text-3"===t.target.className&&(e(),c(n))}function c(t){fetch("https://egdanceschool-api.herokuapp.com/api/events/".concat(t),{method:"GET",redirect:"follow"}).then(function(t){return t.json()}).then(function(t){a(t)}).catch(function(t){return console.log("error",t)})}function a(e){var n=e.data;null!=n&&n.event&&(t.modalContent.innerHTML='<h3 class="modal__content-title">'.concat(n.event.title,'</h3>\n\n    <h1 class="modal__content-about-title">О событии</h1>\n      <p class="modal__content-text">').concat(n.event.text,'</p>\n      <span class="modal__content-date">').concat(n.event.time,'</span>\n      <p class="modal__content-date">').concat(n.event.date,"</p>\n      "))}function l(t){"Escape"===t.code&&n()}document.addEventListener("click",o),t.closeModalBtn.addEventListener("click",n);
},{}],"Focm":[function(require,module,exports) {
"use strict";require("./sass/main.scss"),require("./gallery-items"),require("./gallery"),require("./modal"),require("./nav-bar"),require("./event-modal");
},{"./sass/main.scss":"clu1","./gallery-items":"k87A","./gallery":"Ef3P","./modal":"hR3q","./nav-bar":"ZKMY","./event-modal":"ROoO"}]},{},["Focm"], null)
//# sourceMappingURL=/src.536ca6f4.js.map