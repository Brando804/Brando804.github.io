/******/ (() => { // webpackBootstrap
  var __webpack_exports__ = {};
  /*!***************************************************!*\
    !*** ./wwwroot/assets/site/js/pages/downloads.js ***!
    \***************************************************/
  function init() {
    console.log("DOWNLOADS starting...");
    toggleAccordion();
    $(".js-filter").on("click", function () {
      $(this).toggleClass("selected");
      filterItems();
    });
    $(".js-lang").on("change", function () {
      filterItems();
    });
    $(".js-lang-form").on("submit", function (e) {
      e.preventDefault();
      $("html, body").animate({
        scrollTop: $("#filters").offset().top
      }, 500);
      filterItems();
    });
    $(".js-searchInput").on("blur", function () {
      $("html, body").animate({
        scrollTop: $("#filters").offset().top
      }, 500);
      filterItems();
    });
  }
  function filterItems() {
    var selectedLang = $(".js-lang").val();
    var searchText = $(".js-searchInput").val().toLowerCase();
    var selectedCategories = $(".js-filter.selected").map(function () {
      return $(this).data("cat");
    }).get();
    $(".js-accordion-item").each(function () {
      var item = $(this);
      var categoryId = item.attr("id");
      var matchesCategory = selectedCategories.includes(categoryId);
      item.find(".js-download-item").each(function () {
        var downloadItem = $(this);
        var itemLang = downloadItem.data("lang");
        var title = downloadItem.find(".js-item-title").text().toLowerCase();
        var langMatch = selectedLang === itemLang || selectedLang === "all";
        var textMatch = searchText === "" || title.includes(searchText);
        if (langMatch && textMatch && matchesCategory) {
          downloadItem.addClass("should-show").show();
        } else {
          downloadItem.removeClass("should-show").hide();
        }
      });
      item.toggle(item.find(".js-download-item.should-show").length > 0);
    });
  }
  function toggleAccordion() {
    $(".js-accordion-item .item-top").on("click", function () {
      var $parent = $(this).parent();
      $(".js-accordion-item").not($parent).removeClass("show").find(".item-bottom").slideUp();
      $parent.find(".item-bottom").slideToggle();
      $parent.toggleClass("show");
    });
  }
  $(function () {
    init();
  });
  /******/ })()
  ;