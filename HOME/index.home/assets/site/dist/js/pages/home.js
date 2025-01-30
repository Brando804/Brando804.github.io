/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./wwwroot/assets/site/js/components/slider.js":
/*!*****************************************************!*\
  !*** ./wwwroot/assets/site/js/components/slider.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Slider: () => (/* binding */ Slider)
/* harmony export */ });
function Slider(identifier, options) {
  options = options || {};
  return $(".slider-" + identifier).slick(Object.assign({
    prevArrow: $(".slider-" + identifier + "-prev"),
    nextArrow: $(".slider-" + identifier + "-next"),
    appendDots: $(".slider-" + identifier + "-pagination"),
    dots: false,
    arrows: false,
    infinite: true,
    customPaging: function customPaging() {
      return '<a href="javascript:void(0)"></a>';
    }
  }, options));
}

/***/ }),

/***/ "./wwwroot/assets/site/js/pages/home.js":
/*!**********************************************!*\
  !*** ./wwwroot/assets/site/js/pages/home.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../components/slider */ "./wwwroot/assets/site/js/components/slider.js");

function init() {
  console.log("HOME starting...");
  bannerSlider();
  storiesSlider();
  findReseller();
  hideStates();
  langCountryName();
}
function bannerSlider() {
  new _components_slider__WEBPACK_IMPORTED_MODULE_0__.Slider("js-banner", {
    arrows: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    rows: 0
  });
}
function storiesSlider() {
  new _components_slider__WEBPACK_IMPORTED_MODULE_0__.Slider("js-stories", {
    arrows: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    rows: 0
  });
}
function hideStates() {
  $(".js-country").on("change", function () {
    var currentCountry = $(this).val().toLowerCase();
    var states = $(this).closest("form").find(".js-states");
    if (currentCountry === "brasil" || currentCountry === "brazil") {
      $(states).closest(".inputWrapper").show();
    } else {
      $(states).closest(".inputWrapper").hide();
    }
  });
}
function findReseller() {
  $(".js-find-reseller").on("submit", function (e) {
    e.preventDefault();
    var currentRoute = $(".js-current-reseller-route").val();
    var $form = $(this);
    var formData = $form.serializeArray();
    var queryParams = formData.map(function (item) {
      return "".concat(encodeURIComponent(item.name), "=").concat(encodeURIComponent(item.value));
    }).join("&");
    var newUrl = "".concat(currentRoute, "?").concat(queryParams);
    window.location.href = newUrl;
  });
}
function langCountryName() {
  if ($("#country").length > 0) {
    if (window.location.href.endsWith("en")) {
      $("#country option").each(function () {
        if ($(this).val().toUpperCase() === "BRASIL") {
          $(this).text("BRAZIL");
        }
      });
    }
  }
}
$(function () {
  init();
});

/***/ }),

/***/ "./wwwroot/assets/site/sass/main.scss":
/*!********************************************!*\
  !*** ./wwwroot/assets/site/sass/main.scss ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./wwwroot/assets/admin/sass/main.scss":
/*!*********************************************!*\
  !*** ./wwwroot/assets/admin/sass/main.scss ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/wwwroot/assets/site/dist/js/pages/home": 0,
/******/ 			"wwwroot/assets/admin/dist/all": 0,
/******/ 			"wwwroot/assets/site/dist/all": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunknet_base"] = self["webpackChunknet_base"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["wwwroot/assets/admin/dist/all","wwwroot/assets/site/dist/all"], () => (__webpack_require__("./wwwroot/assets/site/js/pages/home.js")))
/******/ 	__webpack_require__.O(undefined, ["wwwroot/assets/admin/dist/all","wwwroot/assets/site/dist/all"], () => (__webpack_require__("./wwwroot/assets/site/sass/main.scss")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["wwwroot/assets/admin/dist/all","wwwroot/assets/site/dist/all"], () => (__webpack_require__("./wwwroot/assets/admin/sass/main.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;