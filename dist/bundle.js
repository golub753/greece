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
    }
  });
  $('.helps-slider').slick('slickGoTo', 2);
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
    var header = document.querySelector('.header');
    var smoothLinks = header.querySelectorAll('a[href^="#"]');
    var _iterator = _createForOfIteratorHelper(smoothLinks),
      _step;
    try {
      var _loop = function _loop() {
        var smoothLink = _step.value;
        smoothLink.addEventListener('click', function (e) {
          e.preventDefault();
          var id = smoothLink.getAttribute('href');
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
  }
  switchTabs();
  smoothScroll();
});
/******/ })()
;