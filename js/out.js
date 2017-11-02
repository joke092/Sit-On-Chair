/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


document.addEventListener("DOMContentLoaded", function () {

    //slider
    var leftBtn = document.querySelector('div.sliderLeft');
    var rightBtn = document.querySelector('div.sliderRight');
    var imgLi = document.querySelectorAll('div.sliderImg ul li');

    var index = 0;

    imgLi[index].style.display = "initial";

    leftBtn.addEventListener("click", function () {
        imgLi[index].style.display = "none";
        index--;
        if (index < 0) {
            index = imgLi.length - 1;
        }
        imgLi[index].style.display = "initial";
    });

    rightBtn.addEventListener("click", function () {
        imgLi[index].style.display = "none";
        index++;
        if (index >= imgLi.length) {
            index = 0;
        }
        imgLi[index].style.display = "initial";
    });

    //po najechaniu na zdjecie znika nazwa produktu
    var product1 = document.querySelector('div.product1');
    var product2 = document.querySelector('div.product2');

    product1.addEventListener('mouseover', function () {
        product1.firstElementChild.classList.add('showTitle');
    });
    product1.addEventListener('mouseout', function () {
        product1.firstElementChild.classList.remove('showTitle');
    });
    product2.addEventListener('mouseover', function () {
        product2.firstElementChild.classList.add('showTitle');
    });
    product2.addEventListener('mouseout', function () {
        product2.firstElementChild.classList.remove('showTitle');
    });

    //application
    var choiceForm = document.querySelector('div.form');
    var arrowChairName = choiceForm.querySelector('span.listArrow.chairName');
    var chairNameSelect = choiceForm.querySelector('span.chairName');
    var arrowChairColor = choiceForm.querySelector('span.listArrow.chairColor');
    var chairColorSelect = choiceForm.querySelector('span.chairColor');
    var arrowPattern = choiceForm.querySelector('span.listArrow.chairPattern');
    var chairPatternSelect = choiceForm.querySelector('span.chairPattern');
    var checkboxClick = choiceForm.querySelector('div.checkbox');
    var checkboxInput = choiceForm.querySelector('input[type=checkbox]');

    var summaryPanel = document.querySelector('div.summaryPanel');
    var panelLeft = summaryPanel.querySelector('div.panelLeft');
    var panelRight = summaryPanel.querySelector('div.panelRight');
    var chairNameSummary = panelLeft.querySelector('h4.title');
    var chairPrice = panelRight.querySelector('h4.title');
    var chairColor = panelLeft.querySelector('span.color');
    var chairColorPrice = panelRight.querySelector('span.color');
    var chairPattern = panelLeft.querySelector('span.pattern');
    var chairPatternPrice = panelRight.querySelector('span.pattern');
    var transport = panelLeft.querySelector('span.transport');
    var transportPrice = panelRight.querySelector('span.transport');
    var totalPrice = summaryPanel.querySelector('div.totalPrice');

    var summaryChairPrice = 0;
    var summaryColorPrice = 0;
    var summaryPatterntPrice = 0;
    var summaryTransportPrice = 0;

    arrowChairName.addEventListener('click', function () {
        this.nextElementSibling.classList.toggle('showList');
        for (var i = 0; i < this.nextElementSibling.children.length; i++) {
            this.nextElementSibling.children[i].addEventListener('click', function () {
                chairNameSelect.innerHTML = this.innerHTML;
                chairNameSummary.innerHTML = this.innerHTML;
                chairPrice.innerHTML = this.dataset.chairPrice;
                summaryChairPrice = 0;
                summaryChairPrice = summaryChairPrice + parseInt(this.dataset.chairPrice);
                totalPrice.innerHTML = summaryChairPrice + summaryColorPrice + summaryPatterntPrice + summaryTransportPrice;
                this.parentElement.classList.add('showList');
            });
        }
    });

    arrowChairColor.addEventListener('click', function () {
        this.nextElementSibling.classList.toggle('showList');
        for (var i = 0; i < this.nextElementSibling.children.length; i++) {
            this.nextElementSibling.children[i].addEventListener('click', function () {
                chairColorSelect.innerHTML = this.innerHTML;
                chairColor.innerHTML = this.innerHTML;
                chairColorPrice.innerHTML = this.dataset.colorPrice;
                summaryColorPrice = 0;
                summaryColorPrice = summaryColorPrice + parseInt(this.dataset.colorPrice);
                totalPrice.innerHTML = summaryChairPrice + summaryColorPrice + summaryPatterntPrice + summaryTransportPrice;
                this.parentElement.classList.add('showList');
            });
        }
    });

    arrowPattern.addEventListener('click', function () {
        this.nextElementSibling.classList.toggle('showList');
        for (var i = 0; i < this.nextElementSibling.children.length; i++) {
            this.nextElementSibling.children[i].addEventListener('click', function () {
                chairPatternSelect.innerHTML = this.innerHTML;
                chairPattern.innerHTML = this.innerHTML;
                chairPatternPrice.innerHTML = this.dataset.patternPrice;
                summaryPatterntPrice = 0;
                summaryPatterntPrice = summaryPatterntPrice + parseInt(this.dataset.patternPrice);
                totalPrice.innerHTML = summaryChairPrice + summaryColorPrice + summaryPatterntPrice + summaryTransportPrice;
                this.parentElement.classList.add('showList');
            });
        }
    });

    checkboxClick.addEventListener('click', function () {
        if (checkboxInput.checked) {
            transport.innerHTML = "Transport";
            transportPrice.innerHTML = checkboxInput.dataset.transportPrice;
            summaryTransportPrice = 0;
            summaryTransportPrice = summaryTransportPrice + parseInt(checkboxInput.dataset.transportPrice);
            totalPrice.innerHTML = summaryChairPrice + summaryColorPrice + summaryPatterntPrice + summaryTransportPrice;
        } else {
            transport.innerHTML = "";
            transportPrice.innerHTML = "";
            summaryTransportPrice = 0;
            totalPrice.innerHTML = summaryChairPrice + summaryColorPrice + summaryPatterntPrice;
        }
    });
});

/***/ })
/******/ ]);