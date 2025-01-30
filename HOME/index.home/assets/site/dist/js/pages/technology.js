/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./wwwroot/assets/site/js/components/counter.js":
/*!******************************************************!*\
  !*** ./wwwroot/assets/site/js/components/counter.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Counter: () => (/* binding */ Counter)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var Counter = /*#__PURE__*/function () {
  function Counter(element, options) {
    _classCallCheck(this, Counter);
    this.element = element;
    this.options = _objectSpread({
      from: 0,
      to: 100,
      speed: 6000,
      refreshInterval: 100,
      decimals: 0,
      onUpdate: null,
      onComplete: null
    }, options);
    this.loopCount = 0;
    this.value = this.options.from;
    this.loops = Math.ceil(this.options.speed / this.options.refreshInterval);
    this.increment = (this.options.to - this.options.from) / this.loops;
    this.interval = null;
  }
  return _createClass(Counter, [{
    key: "updateTimer",
    value: function updateTimer() {
      this.value += this.increment;
      this.loopCount++;
      var formattedValue = this.value.toLocaleString("pt-BR", {
        maximumFractionDigits: this.options.decimals
      });
      this.element.innerHTML = formattedValue;
      if (typeof this.options.onUpdate === "function") {
        this.options.onUpdate(this.value);
      }
      if (this.loopCount >= this.loops) {
        clearInterval(this.interval);
        this.value = this.options.to;
        if (typeof this.options.onComplete === "function") {
          this.options.onComplete(this.value);
        }
      }
    }
  }, {
    key: "start",
    value: function start() {
      var _this = this;
      this.interval = setInterval(function () {
        return _this.updateTimer();
      }, this.options.refreshInterval);
    }
  }]);
}();


/***/ }),

/***/ "./wwwroot/assets/site/js/components/isInViewport.js":
/*!***********************************************************!*\
  !*** ./wwwroot/assets/site/js/components/isInViewport.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isInViewport: () => (/* binding */ isInViewport)
/* harmony export */ });
function isInViewport(el) {
  var $element = $(el);
  var elementTop = $element.offset().top;
  var elementBottom = elementTop + $element.outerHeight();
  var viewportTop = $(window).scrollTop();
  var viewportBottom = viewportTop + $(window).height();
  return elementBottom > viewportTop && elementTop < viewportBottom;
}

/***/ }),

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
/*!****************************************************!*\
  !*** ./wwwroot/assets/site/js/pages/technology.js ***!
  \****************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_isInViewport_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/isInViewport.js */ "./wwwroot/assets/site/js/components/isInViewport.js");
/* harmony import */ var _components_counter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/counter.js */ "./wwwroot/assets/site/js/components/counter.js");
/* harmony import */ var _components_slider_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/slider.js */ "./wwwroot/assets/site/js/components/slider.js");



function init() {
  console.log("TECHNOLOGY starting...");
  openGridModal();
  closeGridModal();
  closeModalOnWindow();
  showMoreItemGrid();
  $(window).on("scroll", function () {
    var $numbersScrollSection = $(".js-numbers-section");
    if ($numbersScrollSection.length > 0 && (0,_components_isInViewport_js__WEBPACK_IMPORTED_MODULE_0__.isInViewport)($numbersScrollSection)) {
      counterNumbers();
    }
  });
  var $numbersSection = $(".js-numbers-section");
  if ($numbersSection.length > 0 && (0,_components_isInViewport_js__WEBPACK_IMPORTED_MODULE_0__.isInViewport)($numbersSection)) {
    counterNumbers();
  }
  toggleAccordion();
  videosSlider();
}
function openGridModal() {
  $(".js-open-grid-modal").on("click", function () {
    $(".js-grid-modal").addClass("active");
    var img = $(this).find(".js-grid-item-img").attr('src');
    var title = $(this).find(".js-grid-item-title").text();
    var desc = $(this).find(".js-grid-item-desc").val();
    $(".js-grid-modal").find(".js-grid-modal-img").attr('src', img);
    $(".js-grid-modal").find(".js-grid-modal-title").text(title);
    $(".js-grid-modal").find(".js-grid-modal-desc").text(desc);
  });
}
function closeModalOnWindow() {
  $(window).on('click', function (event) {
    var modal = $('.js-grid-modal');
    if ($(event.target).is(modal)) {
      modal.removeClass('active');
    }
  });
}
function closeGridModal() {
  $(".js-close-grid-modal").on("click", function () {
    $(".js-grid-modal").removeClass("active");
  });
}
function showMoreItemGrid() {
  $(".js-show-more-grid-item").on("click", function () {
    $(this).hide();
    $(".js-open-grid-modal").removeClass("hidden");
  });
}
function counterNumbers() {
  if (!$(".js-numbers-section").hasClass("counting")) {
    $(".js-numbers-section").addClass("counting");
    $(".js-count-number").each(function () {
      var $counter = $(this).find(".js-counter");
      var numberTo = parseInt($counter.attr("data-val"), 10);
      var counter = new _components_counter_js__WEBPACK_IMPORTED_MODULE_1__.Counter($counter[0], {
        from: 0,
        to: numberTo,
        speed: 3000,
        refreshInterval: 50
      });
      counter.start();
    });
  }
}
function toggleAccordion() {
  $(".js-feature-item .top").on("click", function () {
    var $parent = $(this).parent();
    $(".js-feature-item").not($parent).removeClass("show").find('.bottom').slideUp();
    $parent.find(".bottom").slideToggle();
    $parent.toggleClass("show");
  });
}
function videosSlider() {
  new _components_slider_js__WEBPACK_IMPORTED_MODULE_2__.Slider("js-videos", {
    arrows: true,
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    rows: 0
  });
}
$(function () {
  init();
});
})();

/******/ })()
;