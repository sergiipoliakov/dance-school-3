parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"clu1":[function(require,module,exports) {

},{"./../fonts/Northwell.eot":[["Northwell.26241d4a.eot","I8zL"],"I8zL"],"./../fonts/Northwell.woff":[["Northwell.d01705fd.woff","yPkx"],"yPkx"],"./../fonts/Northwell.ttf":[["Northwell.23b34686.ttf","w9oA"],"w9oA"],"./../fonts/Northwell.svg":[["Northwell.01cbdc2f.svg","o6yf"],"o6yf"],"./../images/main-bg-img.jpg":[["main-bg-img.233e33f8.jpg","qFxE"],"qFxE"],"./../images/service1/mob-Services-and-prices.jpg":[["mob-Services-and-prices.bd995fa6.jpg","RPa4"],"RPa4"],"./../images/service1/tabl-Services-and-prices.jpg":[["tabl-Services-and-prices.261db6ee.jpg","lJbB"],"lJbB"],"./../images/service1/desk-Services-and-prices.jpg":[["desk-Services-and-prices.b01f8c0b.jpg","G27k"],"G27k"],"/Users/poliakovsergii/Documents/GitHub/dance-school-3/src/images/contacts/mob-contacts.jpg":[["mob-contacts.ee394295.jpg","pZQJ"],"pZQJ"],"/Users/poliakovsergii/Documents/GitHub/dance-school-3/src/images/contacts/tabl-contacts.jpg":[["tabl-contacts.58cb5642.jpg","ciTF"],"ciTF"],"/Users/poliakovsergii/Documents/GitHub/dance-school-3/src/images/contacts/desc-contacts.jpg":[["desc-contacts.c61cf9c1.jpg","qoVN"],"qoVN"],"./../images/icon-close.svg":[["icon-close.bb7ed7e5.svg","cAq2"],"cAq2"]}],"k87A":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var p=[{preview:"https://cdn.pixabay.com/photo/2021/07/02/20/35/20-35-32-857_640.jpg",original:"https://cdn.pixabay.com/photo/2021/07/02/20/35/20-35-32-857_1280.jpg",name:"Елена Головань",description:"Hokkaido Flower"},{preview:"https://cdn.pixabay.com/photo/2021/07/02/21/03/21-03-41-635_640.jpg",original:"https://cdn.pixabay.com/photo/2021/07/02/21/03/21-03-41-635_1280.jpg",name:"Елена Головань",description:"Container Haulage Freight"},{preview:"https://cdn.pixabay.com/photo/2021/07/02/21/03/21-03-26-348_640.jpg",original:"https://cdn.pixabay.com/photo/2021/07/02/21/03/21-03-26-348_1280.jpg",name:"Елена Головань",description:"Aerial Beach View"},{preview:"https://cdn.pixabay.com/photo/2021/07/02/21/04/21-04-06-33_640.jpg",original:"https://cdn.pixabay.com/photo/2021/07/02/21/04/21-04-06-33_1280.jpg",name:"Елена Головань",description:"Flower Blooms"},{preview:"https://cdn.pixabay.com/photo/2021/07/02/21/11/21-11-33-619_640.jpg",original:"https://cdn.pixabay.com/photo/2021/07/02/21/11/21-11-33-619_1280.jpg",name:"Елена Головань",description:"Alpine Mountains"},{preview:"https://cdn.pixabay.com/photo/2021/07/02/21/04/21-04-15-976_640.jpg",original:"https://cdn.pixabay.com/photo/2021/07/02/21/04/21-04-15-976_1280.jpg",name:"Елена Головань",description:"Mountain Lake Sailing"},{preview:"https://cdn.pixabay.com/photo/2021/07/02/21/11/21-11-06-816_640.jpg",original:"https://cdn.pixabay.com/photo/2021/07/02/21/11/21-11-06-816_1280.jpg",name:"Елена Головань",description:"Alpine Spring Meadows"},{preview:"https://cdn.pixabay.com/photo/2021/07/02/21/10/21-10-48-249_640.jpg",original:"https://cdn.pixabay.com/photo/2021/07/02/21/10/21-10-48-249_1280.jpg",name:"Елена Головань",description:"Lighthouse Coast Sea"}];exports.default=p;
},{}],"Ef3P":[function(require,module,exports) {
"use strict";var n=e(require("./gallery-items.js"));function e(n){return n&&n.__esModule?n:{default:n}}console.log(n.default);var a=document.querySelector(".js-gallery"),r=l(n.default);function l(n){return n.map(function(n){var e=n.preview,a=n.original,r=n.description;n.name;return'\n    <li class="item gallery__item">\n    \n  <a\n    class="gallery__link"\n   href=\''.concat(a,'\';\n  >\n    <img\n      class="gallery__image"\n      src="').concat(e,'"\n      data-source="').concat(a,'"\n      alt="').concat(r,'"\n    />\n  </a>\n</li>\n')}).join("")}a.insertAdjacentHTML("beforeend",r);
},{"./gallery-items.js":"k87A"}],"hR3q":[function(require,module,exports) {
"use strict";var e=t(require("./gallery-items.js"));function t(e){return e&&e.__esModule?e:{default:e}}var n=document.querySelector(".js-lightbox"),i=document.querySelector(".js-gallery"),r=document.querySelector(".lightbox__image"),o=document.querySelector('button[data-action="close-lightbox"]'),d=document.querySelector(".lightbox__overlay");function a(e){var t=e.target.dataset.source,i=e.target.alt;e.target.classList.contains("gallery__image")&&(e.preventDefault(),n.classList.add("is-open"),window.addEventListener("keydown",s),window.addEventListener("keydown",f),window.addEventListener("keydown",v),c(t,i))}function l(){window.removeEventListener("keydown",s),window.removeEventListener("keydown",f),window.removeEventListener("keydown",v),n.classList.remove("is-open"),g()}function c(e,t){r.src=e,r.alt=t}function u(){l()}function s(e){"Escape"===e.code&&l()}function f(t){var n=e.default.find(function(e){return e.original===r.src});if("ArrowRight"===t.code){var i=e.default.indexOf(n)+1;if(void 0===e.default[i])return r.src=e.default[0].original,void(r.alt=e.default[0].description);r.src=e.default[i].original,r.alt=e.default[i].description}}function v(t){var n=e.default.find(function(e){return e.original===r.src});if("ArrowLeft"===t.code){var i=e.default.indexOf(n)-1;if(void 0===e.default[i])return r.src=e.default[e.default.length-1].original,void(r.alt=e.default[e.default.length-1].description);r.src=e.default[i].original,r.alt=e.default[i].description}}function g(){r.src="",r.alt=""}i.addEventListener("click",a),o.addEventListener("click",l),d.addEventListener("click",u);
},{"./gallery-items.js":"k87A"}],"ZKMY":[function(require,module,exports) {
function t(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=r(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var o=0,a=function(){};return{s:a,n:function(){return o>=t.length?{done:!0}:{done:!1,value:t[o++]}},e:function(t){throw t},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,u=!0,l=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return u=t.done,t},e:function(t){l=!0,i=t},f:function(){try{u||null==n.return||n.return()}finally{if(l)throw i}}}}function r(t,r){if(t){if("string"==typeof t)return e(t,r);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?e(t,r):void 0}}function e(t,r){(null==r||r>t.length)&&(r=t.length);for(var e=0,n=new Array(r);e<r;e++)n[e]=t[e];return n}var n,o=document.querySelectorAll('a[href*="#"]'),a=t(o);try{var i=function(){var t=n.value;t.addEventListener("click",function(r){r.preventDefault();var e=t.getAttribute("href");document.querySelector(""+e).scrollIntoView({behavior:"smooth",block:"start"})})};for(a.s();!(n=a.n()).done;)i()}catch(u){a.e(u)}finally{a.f()}
},{}],"Focm":[function(require,module,exports) {
"use strict";require("./sass/main.scss"),require("./gallery-items"),require("./gallery"),require("./modal"),require("./nav-bar");
},{"./sass/main.scss":"clu1","./gallery-items":"k87A","./gallery":"Ef3P","./modal":"hR3q","./nav-bar":"ZKMY"}]},{},["Focm"], null)
//# sourceMappingURL=/dance-school-3/src.d795aee1.js.map