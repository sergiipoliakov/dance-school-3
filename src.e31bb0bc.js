// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)?\/[^/]+(?:\?.*)?$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"../node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();

  newLink.onload = function () {
    link.remove();
  };

  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;

function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');

    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":"../node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"sass/main.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"./../fonts/Northwell.eot":[["Northwell.7e0027ca.eot","fonts/Northwell.eot"],"fonts/Northwell.eot"],"./../fonts/Northwell.woff":[["Northwell.77d3559d.woff","fonts/Northwell.woff"],"fonts/Northwell.woff"],"./../fonts/Northwell.ttf":[["Northwell.c5c13e30.ttf","fonts/Northwell.ttf"],"fonts/Northwell.ttf"],"./../fonts/Northwell.svg":[["Northwell.2336f004.svg","fonts/Northwell.svg"],"fonts/Northwell.svg"],"./../images/main-bg-img.jpg":[["main-bg-img.e4b0a884.jpg","images/main-bg-img.jpg"],"images/main-bg-img.jpg"],"./../images/baletShus.svg":[["baletShus.f9787d21.svg","images/baletShus.svg"],"images/baletShus.svg"],"./../images/service1/mob-Services-and-prices.jpg":[["mob-Services-and-prices.965409fb.jpg","images/service1/mob-Services-and-prices.jpg"],"images/service1/mob-Services-and-prices.jpg"],"./../images/service1/tabl-Services-and-prices.jpg":[["tabl-Services-and-prices.07a97fec.jpg","images/service1/tabl-Services-and-prices.jpg"],"images/service1/tabl-Services-and-prices.jpg"],"./../images/service1/desk-Services-and-prices.jpg":[["desk-Services-and-prices.de2cfac1.jpg","images/service1/desk-Services-and-prices.jpg"],"images/service1/desk-Services-and-prices.jpg"],"./../images/icon-close.svg":[["icon-close.1add023a.svg","images/icon-close.svg"],"images/icon-close.svg"],"/Users/poliakovsergii/Documents/GitHub/dance-school-3/src/images/contacts/mob-contacts.jpg":[["mob-contacts.a9326e9b.jpg","images/contacts/mob-contacts.jpg"],"images/contacts/mob-contacts.jpg"],"/Users/poliakovsergii/Documents/GitHub/dance-school-3/src/images/contacts/tabl-contacts.jpg":[["tabl-contacts.4398bdbd.jpg","images/contacts/tabl-contacts.jpg"],"images/contacts/tabl-contacts.jpg"],"/Users/poliakovsergii/Documents/GitHub/dance-school-3/src/images/contacts/desc-contacts.jpg":[["desc-contacts.969565c6.jpg","images/contacts/desc-contacts.jpg"],"images/contacts/desc-contacts.jpg"],"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"gallery-items.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = [{
  preview: 'https://cdn.pixabay.com/photo/2021/08/21/12/19/ballerina-6562632__340.jpg',
  original: 'https://cdn.pixabay.com/photo/2021/08/21/12/19/ballerina-6562632_1280.jpg',
  name: 'Елена Головань',
  description: 'qwe'
}, {
  preview: 'https://cdn.pixabay.com/photo/2021/08/21/12/20/ballerina-6562638__340.jpg',
  original: 'https://cdn.pixabay.com/photo/2021/08/21/12/20/ballerina-6562638_1280.jpg',
  name: 'Елена Головань',
  description: 'qwe'
}, {
  preview: 'https://cdn.pixabay.com/photo/2021/08/21/12/19/ballerina-6562636__340.jpg',
  original: 'https://cdn.pixabay.com/photo/2021/08/21/12/19/ballerina-6562636_1280.jpg',
  name: 'Елена Головань',
  description: 'qwe'
}, {
  preview: 'https://cdn.pixabay.com/photo/2021/08/21/12/19/ballerina-6562634__340.jpg',
  original: 'https://cdn.pixabay.com/photo/2021/08/21/12/19/ballerina-6562634_1280.jpg',
  name: 'Елена Головань',
  description: 'qwe'
}, {
  preview: 'https://cdn.pixabay.com/photo/2021/08/21/12/19/ballerina-6562631__340.jpg',
  original: 'https://cdn.pixabay.com/photo/2021/08/21/12/19/ballerina-6562631_1280.jpg',
  name: 'Елена Головань',
  description: 'qwe'
}, {
  preview: 'https://cdn.pixabay.com/photo/2021/07/02/21/03/dance-6382566__340.jpg',
  original: 'https://cdn.pixabay.com/photo/2021/07/02/21/03/dance-6382566_1280.jpg',
  name: 'Елена Головань',
  description: 'qwe'
}, {
  preview: 'https://cdn.pixabay.com/photo/2021/07/02/21/04/dance-6382569__340.jpg',
  original: 'https://cdn.pixabay.com/photo/2021/07/02/21/04/dance-6382569_1280.jpg',
  name: 'Елена Головань',
  description: 'Container Haulage Freight'
}, //
{
  preview: 'https://cdn.pixabay.com/photo/2021/07/02/21/11/balet-6382579__340.jpg',
  original: 'https://cdn.pixabay.com/photo/2021/07/02/21/11/balet-6382579_1280.jpg',
  name: 'Елена Головань',
  description: 'dence school'
}, {
  preview: 'https://cdn.pixabay.com/photo/2021/07/02/21/11/balet-6382577__340.jpg',
  original: 'https://cdn.pixabay.com/photo/2021/07/02/21/11/balet-6382577_1280.jpg',
  name: 'Елена Головань',
  description: 'Flower Blooms'
}, {
  preview: 'https://cdn.pixabay.com/photo/2021/07/02/21/03/novaya-6382567__340.jpg',
  original: 'https://cdn.pixabay.com/photo/2021/07/02/21/03/novaya-6382567_1280.jpg',
  name: 'Елена Головань',
  description: 'Alpine Mountains'
}, {
  preview: 'https://cdn.pixabay.com/photo/2021/07/02/21/04/ballet-dancers-6382568__340.jpg',
  original: 'https://cdn.pixabay.com/photo/2021/07/02/21/04/ballet-dancers-6382568_1280.jpg',
  name: 'Елена Головань',
  description: 'Mountain Lake Sailing'
}, {
  preview: 'https://cdn.pixabay.com/photo/2021/07/02/21/10/balet-6382576__340.jpg',
  original: 'https://cdn.pixabay.com/photo/2021/07/02/21/10/balet-6382576_1280.jpg',
  name: 'Елена Головань',
  description: 'Alpine Spring Meadows'
}];
exports.default = _default;
},{}],"gallery.js":[function(require,module,exports) {
"use strict";

var _galleryItems = _interopRequireDefault(require("./gallery-items.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var galleryList = document.querySelector('.js-gallery');
var imagesMarkup = createImagesMarkup(_galleryItems.default);
galleryList.insertAdjacentHTML('beforeend', imagesMarkup);

function createImagesMarkup(images) {
  return images.map(function (_ref) {
    var preview = _ref.preview,
        original = _ref.original,
        description = _ref.description,
        name = _ref.name;
    return "\n    <li class=\"item gallery__item\">\n\n  <a\n    class=\"gallery__link\"\n   href='".concat(original, "';\n  >\n    <img\n      class=\"gallery__image\"\n      src=\"").concat(preview, "\"\n      data-source=\"").concat(original, "\"\n      alt=\"").concat(description, "\"\n    />\n  </a>\n</li>\n");
  }).join('');
}
},{"./gallery-items.js":"gallery-items.js"}],"modal.js":[function(require,module,exports) {
"use strict";

var _galleryItems = _interopRequireDefault(require("./gallery-items.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var lightboxContainer = document.querySelector('.js-lightbox');
var galleryList = document.querySelector('.js-gallery');
var modalImage = document.querySelector('.lightbox__image'); // console.log(modalImage);

var closeModalBtn = document.querySelector('button[data-action="close-lightbox"]');
var backdrop = document.querySelector('.lightbox__overlay');
galleryList.addEventListener('click', openModal);
closeModalBtn.addEventListener('click', closeModal);
backdrop.addEventListener('click', onBackDropClick);

function openModal(evt) {
  var modalImageSrc = evt.target.dataset.source;
  var modalImageAlt = evt.target.alt;
  console.log(modalImageSrc);
  var isOnImageClick = evt.target.classList.contains('gallery__image'); //   console.log(evt);

  if (!isOnImageClick) {
    return;
  }

  evt.preventDefault();
  lightboxContainer.classList.add('is-open');
  window.addEventListener('keydown', onEscKeyPress);
  window.addEventListener('keydown', onArrowRightClick);
  window.addEventListener('keydown', onArrowLeftClick);
  makeOriginalImage(modalImageSrc, modalImageAlt);
}

function closeModal() {
  window.removeEventListener('keydown', onEscKeyPress);
  window.removeEventListener('keydown', onArrowRightClick);
  window.removeEventListener('keydown', onArrowLeftClick);
  lightboxContainer.classList.remove('is-open');
  cleanModalImageSrc();
}

function makeOriginalImage(src, alt) {
  modalImage.src = src;
  modalImage.alt = alt; //   console.log(modalImage);
}

function onBackDropClick() {
  closeModal();
}

function onEscKeyPress(evt) {
  //   console.log(evt);
  if (evt.code === 'Escape') {
    closeModal();
  }
}

function onArrowRightClick(evt) {
  // Ищем текущую картинку в массиве images.find
  var currentImage = _galleryItems.default.find(function (image) {
    return image.original === modalImage.src;
  }); //   console.log(currentImage);


  if (evt.code === 'ArrowRight') {
    //   к индексу текущей картинке добавим 1 чтоб назначить следующую картинку
    var nextModalImageIndex = _galleryItems.default.indexOf(currentImage) + 1; // console.log(nextModalImageIndex);
    // console.log(images[nextModalImageIndex]);
    // когда все картинки в массиве закончелись назначаем первую картинку в массиве

    if (_galleryItems.default[nextModalImageIndex] === undefined) {
      modalImage.src = _galleryItems.default[0].original;
      modalImage.alt = _galleryItems.default[0].description;
      return;
    }

    modalImage.src = _galleryItems.default[nextModalImageIndex].original;
    modalImage.alt = _galleryItems.default[nextModalImageIndex].description;
  }
}

function onArrowLeftClick(evt) {
  // Ищем текущую картинку в массиве images.find
  var currentImage = _galleryItems.default.find(function (image) {
    return image.original === modalImage.src;
  }); //   console.log(currentImage);


  if (evt.code === 'ArrowLeft') {
    //   от индексу текущей картинке отнимем 1 чтоб назначить предыдущую картинку
    var previousModalImageIndex = _galleryItems.default.indexOf(currentImage) - 1; // console.log(images[previousModalImageIndex]);
    // когда все картинки в массиве закончелись назначаем последнюю картинку в массиве

    if (_galleryItems.default[previousModalImageIndex] === undefined) {
      modalImage.src = _galleryItems.default[_galleryItems.default.length - 1].original;
      modalImage.alt = _galleryItems.default[_galleryItems.default.length - 1].description;
      return;
    }

    modalImage.src = _galleryItems.default[previousModalImageIndex].original;
    modalImage.alt = _galleryItems.default[previousModalImageIndex].description;
  }
}

function cleanModalImageSrc() {
  modalImage.src = '';
  modalImage.alt = '';
}
},{"./gallery-items.js":"gallery-items.js"}],"nav-bar.js":[function(require,module,exports) {
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var anchors = document.querySelectorAll('a[href*="#"]');

var _iterator = _createForOfIteratorHelper(anchors),
    _step;

try {
  var _loop = function _loop() {
    var anchor = _step.value;
    anchor.addEventListener('click', function (event) {
      event.preventDefault();
      var blockID = anchor.getAttribute('href');
      document.querySelector('' + blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    });
  };

  for (_iterator.s(); !(_step = _iterator.n()).done;) {
    _loop();
  }
} catch (err) {
  _iterator.e(err);
} finally {
  _iterator.f();
}
},{}],"event-modal.js":[function(require,module,exports) {
var refs = {
  listEl: document.querySelector('.dataTime__list1'),
  closeModalBtn: document.querySelector('[data-action="close-eventbox"]'),
  modal: document.querySelector('.js-eventbox'),
  modalContent: document.querySelector('.eventbox__content')
};

function openModal() {
  refs.modal.classList.toggle('is-open');
  window.addEventListener('keydown', onEscKeyPress);
}

function closeModal() {
  refs.modal.classList.toggle('is-open');
  window.removeEventListener('keydown', onEscKeyPress);
}

function onLinkClick(event) {
  var id = event.target.dataset.id;

  if (event.target.className === 'dataTime__link truncate-text-3') {
    openModal();
    makeFetch(id);
  }
}

function makeFetch(id) {
  var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  fetch("https://egdanceschool-api.herokuapp.com/api/events/".concat(id), requestOptions).then(function (response) {
    return response.json();
  }).then(function (result) {
    // console.log(result);
    makeModalMarkup(result);
  }).catch(function (error) {
    return console.log('error', error);
  });
}

function makeModalMarkup(_ref) {
  var data = _ref.data;

  // console.log(data.event);
  if (data !== null && data !== void 0 && data.event) {
    refs.modalContent.innerHTML = "<h3 class=\"modal__content-title\">\u041F\u043E\u0431\u0440\u043E\u0434\u043D\u0435\u0439 \u043F\u0440\u043E \u043F\u043E\u0434\u0456\u044E</h3>\n\n    <h1 class=\"modal__content-about-title\">".concat(data.event.title, "</h1>\n      <p class=\"modal__content-text\">").concat(data.event.text, "</p>\n      <p class=\"modal__content-date\">").concat(data.event.time, "</p>\n      <p class=\"modal__content-date\">").concat(data.event.date, "</p>\n      ");
  }
}

document.addEventListener('click', onLinkClick);
refs.closeModalBtn.addEventListener('click', closeModal);

function onEscKeyPress(evt) {
  //   console.log(evt);
  if (evt.code === 'Escape') {
    closeModal();
  }
}
},{}],"index.js":[function(require,module,exports) {
"use strict";

require("./sass/main.scss");

require("./gallery-items");

require("./gallery");

require("./modal");

require("./nav-bar");

require("./event-modal");
},{"./sass/main.scss":"sass/main.scss","./gallery-items":"gallery-items.js","./gallery":"gallery.js","./modal":"modal.js","./nav-bar":"nav-bar.js","./event-modal":"event-modal.js"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "63804" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/src.e31bb0bc.js.map