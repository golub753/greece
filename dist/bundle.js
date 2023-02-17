/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

$(document).ready(function () {
  // const modal = document.querySelector('.modal'),
  //     overlay = document.querySelector('.overlay');

  // function openModal() {
  //     const btns = document.querySelectorAll('.btn');
  //     btns.forEach((btn) => {
  //         btn.addEventListener('click', () => {
  //             const title = btn.getAttribute('data-title');
  //             if (title) {
  //                 modal.querySelector('.modal-subtitle').textContent = title;
  //             }
  //             modal.classList.add('active');
  //             overlay.classList.add('active');
  //         });
  //     });
  // }

  // function closeModal() {
  //     overlay.addEventListener('click', () => {
  //         modal.classList.remove('active');
  //         overlay.classList.remove('active');
  //     });
  // }

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

  // openModal();
  // closeModal();
  switchTabs();
});
/******/ })()
;