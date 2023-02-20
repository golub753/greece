/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

$(document).ready(function () {
  $('.helps-slider').slick({
    infinite: false,
    centerMode: true,
    centerPadding: '30px',
    slidesToShow: 3,
    dots: true,
    nextArrow: "<div class=\"helps-slide-arr helps-slide-arr--next\">\n        <img src=\"../src/assets/helps_arrow.svg\" alt=\"\">\n        </div>",
    prevArrow: "<div class=\"helps-slide-arr helps-slide-arr--prev\">\n        <img src=\"../src/assets/helps_arrow.svg\" alt=\"\">\n        </div>",
    customPaging: function customPaging(slider, i) {
      return "<span class=\"active\">".concat(i + 1, "</span>/").concat(slider.slideCount);
    },
    responsive: [{
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        centerPadding: '0'
      }
    }]
  });
  $('.helps-slider').slick('slickGoTo', 1);
  $('.authors-slider-photos').slick({
    arrows: false,
    infinite: false,
    centerPadding: '100px',
    slidesToShow: 3,
    dots: false,
    asNavFor: '.authors-slider-info',
    responsive: [{
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        centerPadding: '0px'
      }
    }]
  });
  $('.authors-slider-info').slick({
    arrows: true,
    infinite: false,
    slidesToShow: 1,
    dots: true,
    nextArrow: "<div class=\"authors-slide-arr authors-slide-arr--next\">\n        <img src=\"../src/assets/authors-arrow.svg\" alt=\"\">\n        </div>",
    prevArrow: "<div class=\"authors-slide-arr authors-slide-arr--prev\">\n        <img src=\"../src/assets/authors-arrow-prev.svg\" alt=\"\">\n        </div>",
    customPaging: function customPaging(slider, i) {
      return "<span class=\"active\">".concat(i + 1, "</span>/").concat(slider.slideCount);
    },
    asNavFor: '.authors-slider-photos'
  });
  $('.speakers-persons').slick({
    infinite: false,
    mobileFirst: true,
    centerPadding: '30px',
    slidesToShow: 3,
    centerMode: true,
    dots: true,
    nextArrow: "<div class=\"speakers-persons-arr speakers-persons-arr--next\">\n        <img src=\"../src/assets/authors-arrow.svg\" alt=\"\">\n        </div>",
    prevArrow: "<div class=\"speakers-persons-arr speakers-persons-arr--prev\">\n        <img src=\"../src/assets/authors-arrow-prev.svg\" alt=\"\">\n        </div>",
    customPaging: function customPaging(slider, i) {
      return "<span class=\"active\">".concat(i + 1, "</span>/").concat(slider.slideCount);
    },
    responsive: [{
      breakpoint: 1024,
      settings: 'unslick'
    }
    // {
    //     breakpoint: 768,
    //     settings: {
    //         slidesToShow: 3,
    //     },
    // },
    ]
  });

  $('.speakers-persons').slick('slickGoTo', 1);
  $('.info-right-stoun-tabs').slick({
    infinite: false,
    mobileFirst: true,
    slidesToShow: 1,
    dots: false,
    nextArrow: "<div class=\"info-right-stoun-tabs-arr info-right-stoun-tabs-arr--next\">\n        <img src=\"../src/assets/info_arrow.svg\" alt=\"\">\n        </div>",
    prevArrow: "<div class=\"info-right-stoun-tabs-arr info-right-stoun-tabs-arr--prev\">\n        <img src=\"../src/assets/info_arrow.svg\" alt=\"\">\n        </div>",
    responsive: [{
      breakpoint: 768,
      settings: 'unslick'
    }]
  });
  function switchTabs() {
    var tabs = document.querySelectorAll('.info-right-stoun-tab'),
      contents = document.querySelectorAll('.info-right-stoun-content');
    tabs.forEach(function (tab) {
      tab.addEventListener('click', function () {
        var id = tab.getAttribute('data-target');
        tabs.forEach(function (item) {
          item.classList.remove('active');
        });
        tab.classList.add('active');
        contents.forEach(function (item) {
          item.classList.remove('active');
        });
        document.querySelector(id).classList.add('active');
      });
    });
  }
  function smoothScroll() {
    var mainButton = document.querySelector('.main-button');
    var header = document.querySelector('.header');
    var smoothLinks = header.querySelectorAll('a[href^="#"]');
    var headerNav = document.querySelector('.header-nav'),
      burger = document.querySelector('.burger');
    var _iterator = _createForOfIteratorHelper(smoothLinks),
      _step;
    try {
      var _loop = function _loop() {
        var smoothLink = _step.value;
        smoothLink.addEventListener('click', function (e) {
          e.preventDefault();
          var id = smoothLink.getAttribute('href');
          burger.classList.remove('active');
          headerNav.classList.remove('active');
          document.querySelector(id).scrollIntoView({
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
    mainButton.addEventListener('click', function (e) {
      e.preventDefault();
      var id = mainButton.getAttribute('href');
      document.querySelector(id).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    });
  }
  function openMenu() {
    var headerNav = document.querySelector('.header-nav'),
      burger = document.querySelector('.burger');
    burger.addEventListener('click', function () {
      headerNav.classList.toggle('active');
      burger.classList.toggle('active');
    });
  }
  function openModal() {
    var btns = document.querySelectorAll('.rates-block-block-button'),
      modal = document.querySelector('.modal'),
      overlay = document.querySelector('.overlay'),
      rates = document.querySelector('.rates-free-button');
    btns.forEach(function (item) {
      item.addEventListener('click', function (e) {
        e.preventDefault();
        modal.classList.add('active');
        overlay.classList.add('active');
      });
    });
    rates.addEventListener('click', function (e) {
      e.preventDefault();
      modal.classList.add('active');
      overlay.classList.add('active');
    });
  }
  function closeModal() {
    var close = document.querySelector('.modal-close'),
      modal = document.querySelector('.modal'),
      overlay = document.querySelector('.overlay');
    close.addEventListener('click', function () {
      modal.classList.remove('active');
      overlay.classList.remove('active');
    });
    overlay.addEventListener('click', function () {
      modal.classList.remove('active');
      overlay.classList.remove('active');
    });
  }
  switchTabs();
  smoothScroll();
  openMenu();
  openModal();
  closeModal();
});
/******/ })()
;