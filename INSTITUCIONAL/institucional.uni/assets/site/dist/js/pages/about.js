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
/************************************************************************/
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!***********************************************!*\
  !*** ./wwwroot/assets/site/js/pages/about.js ***!
  \***********************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_slider_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/slider.js */ "./wwwroot/assets/site/js/components/slider.js");

function init() {
  console.log("ABOUT starting...");
  principlesSlider();
  if ($(window).width() > 1000) {
    unitiesSlider();
    filterUnities();
  }
  if ($(window).width() < 1000) {
    mobileFilterUnities();
  }
  openUnityModal();
  closeUnityModal();
  timelineSlider();
  $(".slider-js-unities").slick("slickFilter", "[data-cat=brazil]");
  comunitiesSlider();
  activeItem();
}
function principlesSlider() {
  new _components_slider_js__WEBPACK_IMPORTED_MODULE_0__.Slider("js-principles", {
    slidesToShow: 4,
    arrows: true,
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    rows: 0,
    responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 2
      }
    }, {
      breakpoint: 678,
      settings: {
        slidesToShow: 1,
        arrows: false
      }
    }]
  });
}
function unitiesSlider() {
  var items = $(".js-unity-item");
  var itemCount = items.length;
  new _components_slider_js__WEBPACK_IMPORTED_MODULE_0__.Slider("js-unities", {
    slidesToShow: itemCount,
    arrows: false,
    dots: true,
    infinite: false,
    autoplay: true,
    autoplaySpeed: 5000,
    rows: 0,
    variableWidth: true
  });
}
function mobileFilterUnities() {
  $(".js-unity-item").hide();
  $('.js-unity-item[data-cat="brazil"]').show();
  $(".js-unity-cat").on("click", function (e) {
    e.preventDefault();
    $(".js-unity-cat").removeClass("active");
    $(this).addClass("active");
    var cat = $(this).data("cat");
    $(".js-unity-item").hide();
    $('.js-unity-item[data-cat="' + cat + '"]').show();
  });
}
function filterUnities() {
  $(".js-unity-cat").on("click", function (e) {
    e.preventDefault();
    var currentCat = $(this).data("cat");
    $(".js-unity-cat").removeClass("active");
    $(this).addClass("active");
    $(".slider-js-unities").slick("slickUnfilter");
    $(".slider-js-unities").slick("slickFilter", "[data-cat=".concat(currentCat, "]"));
    var filteredElements = $(".slider-js-unities [data-cat=".concat(currentCat, "]"));
    var filteredCount = filteredElements.length;
    if ($(window).width() > 991) {
      if (filteredCount < 3) {
        $(".js-unities-arrow").hide();
      } else {
        $(".js-unities-arrow").show();
      }
    }
  });
}
function openUnityModal() {
  $(".js-unity-item").on("click", function () {
    var currentUnity = $(this).data("modal");
    $(".js-unity-modal").removeClass("active");
    $("html, body").animate({
      scrollTop: $(this).offset().top
    }, 500);
    $(".js-unity-modal#".concat(currentUnity)).addClass("active");
  });
}
function closeUnityModal() {
  $(".js-unity-modal .close").on("click", function () {
    $(this).closest(".js-unity-modal").removeClass("active");
  });
}
function timelineSlider() {
  new _components_slider_js__WEBPACK_IMPORTED_MODULE_0__.Slider("js-timeline", {
    slidesToShow: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    rows: 0,
    asNavFor: ".slider-js-timeline-years"
  });
  new _components_slider_js__WEBPACK_IMPORTED_MODULE_0__.Slider("js-timeline-years", {
    slidesToShow: 10,
    slidesToScroll: 1,
    asNavFor: ".slider-js-timeline",
    dots: false,
    arrows: false,
    centerMode: false,
    focusOnSelect: true,
    draggable: true,
    touchThreshold: 20,
    rows: 0
  });
  $(".js-next").on("click", function () {
    $(".slider-js-timeline").slick("slickNext");
  });
}
function activeItem() {
  $(".js-list-item").on("click", function () {
    var currentItem = $(this).data("comunity");
    var offSet = $(window).width() > 991 ? $(this).offset().top : $(this).parent().offset().top + $(this).parent().height();
    $("html, body").animate({
      scrollTop: offSet
    }, 500);
    $(".js-list-item").removeClass("active");
    $(this).addClass("active");
    $(".js-item").removeClass("active");
    $(".js-item[data-comunity=".concat(currentItem, "]")).addClass("active");
    $(".slider-js-item-comunity-".concat(currentItem)).slick("setPosition");
  });
}
function comunitiesSlider() {
  $(".js-item").each(function (index, el) {
    var currentComunity = $(el).data("comunity");
    new _components_slider_js__WEBPACK_IMPORTED_MODULE_0__.Slider("js-item-comunity-".concat(currentComunity), {
      slidesToShow: 1,
      arrows: true,
      dots: true,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 5000,
      rows: 0
    });
  });
}
$(function () {
  init();
});
})();

/******/ })()
;