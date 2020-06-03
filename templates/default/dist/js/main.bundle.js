/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 	};
/******/
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "js/" + ({}[chunkId]||chunkId) + ".bundle.js"
/******/ 	}
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
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							var error = new Error('Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')');
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./templates/default/src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/lazysizes/lazysizes.js":
/*!*********************************************!*\
  !*** ./node_modules/lazysizes/lazysizes.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function(window, factory) {
	var lazySizes = factory(window, window.document);
	window.lazySizes = lazySizes;
	if( true && module.exports){
		module.exports = lazySizes;
	}
}(window, function l(window, document) {
	'use strict';
	/*jshint eqnull:true */
	if(!document.getElementsByClassName){return;}

	var lazysizes, lazySizesConfig;

	var docElem = document.documentElement;

	var Date = window.Date;

	var supportPicture = window.HTMLPictureElement;

	var _addEventListener = 'addEventListener';

	var _getAttribute = 'getAttribute';

	var addEventListener = window[_addEventListener];

	var setTimeout = window.setTimeout;

	var requestAnimationFrame = window.requestAnimationFrame || setTimeout;

	var requestIdleCallback = window.requestIdleCallback;

	var regPicture = /^picture$/i;

	var loadEvents = ['load', 'error', 'lazyincluded', '_lazyloaded'];

	var regClassCache = {};

	var forEach = Array.prototype.forEach;

	var hasClass = function(ele, cls) {
		if(!regClassCache[cls]){
			regClassCache[cls] = new RegExp('(\\s|^)'+cls+'(\\s|$)');
		}
		return regClassCache[cls].test(ele[_getAttribute]('class') || '') && regClassCache[cls];
	};

	var addClass = function(ele, cls) {
		if (!hasClass(ele, cls)){
			ele.setAttribute('class', (ele[_getAttribute]('class') || '').trim() + ' ' + cls);
		}
	};

	var removeClass = function(ele, cls) {
		var reg;
		if ((reg = hasClass(ele,cls))) {
			ele.setAttribute('class', (ele[_getAttribute]('class') || '').replace(reg, ' '));
		}
	};

	var addRemoveLoadEvents = function(dom, fn, add){
		var action = add ? _addEventListener : 'removeEventListener';
		if(add){
			addRemoveLoadEvents(dom, fn);
		}
		loadEvents.forEach(function(evt){
			dom[action](evt, fn);
		});
	};

	var triggerEvent = function(elem, name, detail, noBubbles, noCancelable){
		var event = document.createEvent('Event');

		if(!detail){
			detail = {};
		}

		detail.instance = lazysizes;

		event.initEvent(name, !noBubbles, !noCancelable);

		event.detail = detail;

		elem.dispatchEvent(event);
		return event;
	};

	var updatePolyfill = function (el, full){
		var polyfill;
		if( !supportPicture && ( polyfill = (window.picturefill || lazySizesConfig.pf) ) ){
			if(full && full.src && !el[_getAttribute]('srcset')){
				el.setAttribute('srcset', full.src);
			}
			polyfill({reevaluate: true, elements: [el]});
		} else if(full && full.src){
			el.src = full.src;
		}
	};

	var getCSS = function (elem, style){
		return (getComputedStyle(elem, null) || {})[style];
	};

	var getWidth = function(elem, parent, width){
		width = width || elem.offsetWidth;

		while(width < lazySizesConfig.minSize && parent && !elem._lazysizesWidth){
			width =  parent.offsetWidth;
			parent = parent.parentNode;
		}

		return width;
	};

	var rAF = (function(){
		var running, waiting;
		var firstFns = [];
		var secondFns = [];
		var fns = firstFns;

		var run = function(){
			var runFns = fns;

			fns = firstFns.length ? secondFns : firstFns;

			running = true;
			waiting = false;

			while(runFns.length){
				runFns.shift()();
			}

			running = false;
		};

		var rafBatch = function(fn, queue){
			if(running && !queue){
				fn.apply(this, arguments);
			} else {
				fns.push(fn);

				if(!waiting){
					waiting = true;
					(document.hidden ? setTimeout : requestAnimationFrame)(run);
				}
			}
		};

		rafBatch._lsFlush = run;

		return rafBatch;
	})();

	var rAFIt = function(fn, simple){
		return simple ?
			function() {
				rAF(fn);
			} :
			function(){
				var that = this;
				var args = arguments;
				rAF(function(){
					fn.apply(that, args);
				});
			}
		;
	};

	var throttle = function(fn){
		var running;
		var lastTime = 0;
		var gDelay = lazySizesConfig.throttleDelay;
		var rICTimeout = lazySizesConfig.ricTimeout;
		var run = function(){
			running = false;
			lastTime = Date.now();
			fn();
		};
		var idleCallback = requestIdleCallback && rICTimeout > 49 ?
			function(){
				requestIdleCallback(run, {timeout: rICTimeout});

				if(rICTimeout !== lazySizesConfig.ricTimeout){
					rICTimeout = lazySizesConfig.ricTimeout;
				}
			} :
			rAFIt(function(){
				setTimeout(run);
			}, true)
		;

		return function(isPriority){
			var delay;

			if((isPriority = isPriority === true)){
				rICTimeout = 33;
			}

			if(running){
				return;
			}

			running =  true;

			delay = gDelay - (Date.now() - lastTime);

			if(delay < 0){
				delay = 0;
			}

			if(isPriority || delay < 9){
				idleCallback();
			} else {
				setTimeout(idleCallback, delay);
			}
		};
	};

	//based on http://modernjavascript.blogspot.de/2013/08/building-better-debounce.html
	var debounce = function(func) {
		var timeout, timestamp;
		var wait = 99;
		var run = function(){
			timeout = null;
			func();
		};
		var later = function() {
			var last = Date.now() - timestamp;

			if (last < wait) {
				setTimeout(later, wait - last);
			} else {
				(requestIdleCallback || run)(run);
			}
		};

		return function() {
			timestamp = Date.now();

			if (!timeout) {
				timeout = setTimeout(later, wait);
			}
		};
	};

	(function(){
		var prop;

		var lazySizesDefaults = {
			lazyClass: 'lazyload',
			loadedClass: 'lazyloaded',
			loadingClass: 'lazyloading',
			preloadClass: 'lazypreload',
			errorClass: 'lazyerror',
			//strictClass: 'lazystrict',
			autosizesClass: 'lazyautosizes',
			srcAttr: 'data-src',
			srcsetAttr: 'data-srcset',
			sizesAttr: 'data-sizes',
			//preloadAfterLoad: false,
			minSize: 40,
			customMedia: {},
			init: true,
			expFactor: 1.5,
			hFac: 0.8,
			loadMode: 2,
			loadHidden: true,
			ricTimeout: 0,
			throttleDelay: 125,
		};

		lazySizesConfig = window.lazySizesConfig || window.lazysizesConfig || {};

		for(prop in lazySizesDefaults){
			if(!(prop in lazySizesConfig)){
				lazySizesConfig[prop] = lazySizesDefaults[prop];
			}
		}

		window.lazySizesConfig = lazySizesConfig;

		setTimeout(function(){
			if(lazySizesConfig.init){
				init();
			}
		});
	})();

	var loader = (function(){
		var preloadElems, isCompleted, resetPreloadingTimer, loadMode, started;

		var eLvW, elvH, eLtop, eLleft, eLright, eLbottom, isBodyHidden;

		var regImg = /^img$/i;
		var regIframe = /^iframe$/i;

		var supportScroll = ('onscroll' in window) && !(/(gle|ing)bot/.test(navigator.userAgent));

		var shrinkExpand = 0;
		var currentExpand = 0;

		var isLoading = 0;
		var lowRuns = -1;

		var resetPreloading = function(e){
			isLoading--;
			if(!e || isLoading < 0 || !e.target){
				isLoading = 0;
			}
		};

		var isVisible = function (elem) {
			if (isBodyHidden == null) {
				isBodyHidden = getCSS(document.body, 'visibility') == 'hidden';
			}

			return isBodyHidden || (getCSS(elem.parentNode, 'visibility') != 'hidden' && getCSS(elem, 'visibility') != 'hidden');
		};

		var isNestedVisible = function(elem, elemExpand){
			var outerRect;
			var parent = elem;
			var visible = isVisible(elem);

			eLtop -= elemExpand;
			eLbottom += elemExpand;
			eLleft -= elemExpand;
			eLright += elemExpand;

			while(visible && (parent = parent.offsetParent) && parent != document.body && parent != docElem){
				visible = ((getCSS(parent, 'opacity') || 1) > 0);

				if(visible && getCSS(parent, 'overflow') != 'visible'){
					outerRect = parent.getBoundingClientRect();
					visible = eLright > outerRect.left &&
						eLleft < outerRect.right &&
						eLbottom > outerRect.top - 1 &&
						eLtop < outerRect.bottom + 1
					;
				}
			}

			return visible;
		};

		var checkElements = function() {
			var eLlen, i, rect, autoLoadElem, loadedSomething, elemExpand, elemNegativeExpand, elemExpandVal,
				beforeExpandVal, defaultExpand, preloadExpand, hFac;
			var lazyloadElems = lazysizes.elements;

			if((loadMode = lazySizesConfig.loadMode) && isLoading < 8 && (eLlen = lazyloadElems.length)){

				i = 0;

				lowRuns++;

				defaultExpand = (!lazySizesConfig.expand || lazySizesConfig.expand < 1) ?
					docElem.clientHeight > 500 && docElem.clientWidth > 500 ? 500 : 370 :
					lazySizesConfig.expand;

				lazysizes._defEx = defaultExpand;

				preloadExpand = defaultExpand * lazySizesConfig.expFactor;
				hFac = lazySizesConfig.hFac;
				isBodyHidden = null;

				if(currentExpand < preloadExpand && isLoading < 1 && lowRuns > 2 && loadMode > 2 && !document.hidden){
					currentExpand = preloadExpand;
					lowRuns = 0;
				} else if(loadMode > 1 && lowRuns > 1 && isLoading < 6){
					currentExpand = defaultExpand;
				} else {
					currentExpand = shrinkExpand;
				}

				for(; i < eLlen; i++){

					if(!lazyloadElems[i] || lazyloadElems[i]._lazyRace){continue;}

					if(!supportScroll){unveilElement(lazyloadElems[i]);continue;}

					if(!(elemExpandVal = lazyloadElems[i][_getAttribute]('data-expand')) || !(elemExpand = elemExpandVal * 1)){
						elemExpand = currentExpand;
					}

					if(beforeExpandVal !== elemExpand){
						eLvW = innerWidth + (elemExpand * hFac);
						elvH = innerHeight + elemExpand;
						elemNegativeExpand = elemExpand * -1;
						beforeExpandVal = elemExpand;
					}

					rect = lazyloadElems[i].getBoundingClientRect();

					if ((eLbottom = rect.bottom) >= elemNegativeExpand &&
						(eLtop = rect.top) <= elvH &&
						(eLright = rect.right) >= elemNegativeExpand * hFac &&
						(eLleft = rect.left) <= eLvW &&
						(eLbottom || eLright || eLleft || eLtop) &&
						(lazySizesConfig.loadHidden || isVisible(lazyloadElems[i])) &&
						((isCompleted && isLoading < 3 && !elemExpandVal && (loadMode < 3 || lowRuns < 4)) || isNestedVisible(lazyloadElems[i], elemExpand))){
						unveilElement(lazyloadElems[i]);
						loadedSomething = true;
						if(isLoading > 9){break;}
					} else if(!loadedSomething && isCompleted && !autoLoadElem &&
						isLoading < 4 && lowRuns < 4 && loadMode > 2 &&
						(preloadElems[0] || lazySizesConfig.preloadAfterLoad) &&
						(preloadElems[0] || (!elemExpandVal && ((eLbottom || eLright || eLleft || eLtop) || lazyloadElems[i][_getAttribute](lazySizesConfig.sizesAttr) != 'auto')))){
						autoLoadElem = preloadElems[0] || lazyloadElems[i];
					}
				}

				if(autoLoadElem && !loadedSomething){
					unveilElement(autoLoadElem);
				}
			}
		};

		var throttledCheckElements = throttle(checkElements);

		var switchLoadingClass = function(e){
			var elem = e.target;

			if (elem._lazyCache) {
				delete elem._lazyCache;
				return;
			}

			resetPreloading(e);
			addClass(elem, lazySizesConfig.loadedClass);
			removeClass(elem, lazySizesConfig.loadingClass);
			addRemoveLoadEvents(elem, rafSwitchLoadingClass);
			triggerEvent(elem, 'lazyloaded');
		};
		var rafedSwitchLoadingClass = rAFIt(switchLoadingClass);
		var rafSwitchLoadingClass = function(e){
			rafedSwitchLoadingClass({target: e.target});
		};

		var changeIframeSrc = function(elem, src){
			try {
				elem.contentWindow.location.replace(src);
			} catch(e){
				elem.src = src;
			}
		};

		var handleSources = function(source){
			var customMedia;

			var sourceSrcset = source[_getAttribute](lazySizesConfig.srcsetAttr);

			if( (customMedia = lazySizesConfig.customMedia[source[_getAttribute]('data-media') || source[_getAttribute]('media')]) ){
				source.setAttribute('media', customMedia);
			}

			if(sourceSrcset){
				source.setAttribute('srcset', sourceSrcset);
			}
		};

		var lazyUnveil = rAFIt(function (elem, detail, isAuto, sizes, isImg){
			var src, srcset, parent, isPicture, event, firesLoad;

			if(!(event = triggerEvent(elem, 'lazybeforeunveil', detail)).defaultPrevented){

				if(sizes){
					if(isAuto){
						addClass(elem, lazySizesConfig.autosizesClass);
					} else {
						elem.setAttribute('sizes', sizes);
					}
				}

				srcset = elem[_getAttribute](lazySizesConfig.srcsetAttr);
				src = elem[_getAttribute](lazySizesConfig.srcAttr);

				if(isImg) {
					parent = elem.parentNode;
					isPicture = parent && regPicture.test(parent.nodeName || '');
				}

				firesLoad = detail.firesLoad || (('src' in elem) && (srcset || src || isPicture));

				event = {target: elem};

				addClass(elem, lazySizesConfig.loadingClass);

				if(firesLoad){
					clearTimeout(resetPreloadingTimer);
					resetPreloadingTimer = setTimeout(resetPreloading, 2500);
					addRemoveLoadEvents(elem, rafSwitchLoadingClass, true);
				}

				if(isPicture){
					forEach.call(parent.getElementsByTagName('source'), handleSources);
				}

				if(srcset){
					elem.setAttribute('srcset', srcset);
				} else if(src && !isPicture){
					if(regIframe.test(elem.nodeName)){
						changeIframeSrc(elem, src);
					} else {
						elem.src = src;
					}
				}

				if(isImg && (srcset || isPicture)){
					updatePolyfill(elem, {src: src});
				}
			}

			if(elem._lazyRace){
				delete elem._lazyRace;
			}
			removeClass(elem, lazySizesConfig.lazyClass);

			rAF(function(){
				// Part of this can be removed as soon as this fix is older: https://bugs.chromium.org/p/chromium/issues/detail?id=7731 (2015)
				if( !firesLoad || (elem.complete && elem.naturalWidth > 1)){
					switchLoadingClass(event);
					elem._lazyCache = true;
					setTimeout(function(){
						if ('_lazyCache' in elem) {
							delete elem._lazyCache;
						}
					}, 9);
				}
			}, true);
		});

		var unveilElement = function (elem){
			var detail;

			var isImg = regImg.test(elem.nodeName);

			//allow using sizes="auto", but don't use. it's invalid. Use data-sizes="auto" or a valid value for sizes instead (i.e.: sizes="80vw")
			var sizes = isImg && (elem[_getAttribute](lazySizesConfig.sizesAttr) || elem[_getAttribute]('sizes'));
			var isAuto = sizes == 'auto';

			if( (isAuto || !isCompleted) && isImg && (elem[_getAttribute]('src') || elem.srcset) && !elem.complete && !hasClass(elem, lazySizesConfig.errorClass) && hasClass(elem, lazySizesConfig.lazyClass)){return;}

			detail = triggerEvent(elem, 'lazyunveilread').detail;

			if(isAuto){
				 autoSizer.updateElem(elem, true, elem.offsetWidth);
			}

			elem._lazyRace = true;
			isLoading++;

			lazyUnveil(elem, detail, isAuto, sizes, isImg);
		};

		var onload = function(){
			if(isCompleted){return;}
			if(Date.now() - started < 999){
				setTimeout(onload, 999);
				return;
			}
			var afterScroll = debounce(function(){
				lazySizesConfig.loadMode = 3;
				throttledCheckElements();
			});

			isCompleted = true;

			lazySizesConfig.loadMode = 3;

			throttledCheckElements();

			addEventListener('scroll', function(){
				if(lazySizesConfig.loadMode == 3){
					lazySizesConfig.loadMode = 2;
				}
				afterScroll();
			}, true);
		};

		return {
			_: function(){
				started = Date.now();

				lazysizes.elements = document.getElementsByClassName(lazySizesConfig.lazyClass);
				preloadElems = document.getElementsByClassName(lazySizesConfig.lazyClass + ' ' + lazySizesConfig.preloadClass);

				addEventListener('scroll', throttledCheckElements, true);

				addEventListener('resize', throttledCheckElements, true);

				if(window.MutationObserver){
					new MutationObserver( throttledCheckElements ).observe( docElem, {childList: true, subtree: true, attributes: true} );
				} else {
					docElem[_addEventListener]('DOMNodeInserted', throttledCheckElements, true);
					docElem[_addEventListener]('DOMAttrModified', throttledCheckElements, true);
					setInterval(throttledCheckElements, 999);
				}

				addEventListener('hashchange', throttledCheckElements, true);

				//, 'fullscreenchange'
				['focus', 'mouseover', 'click', 'load', 'transitionend', 'animationend', 'webkitAnimationEnd'].forEach(function(name){
					document[_addEventListener](name, throttledCheckElements, true);
				});

				if((/d$|^c/.test(document.readyState))){
					onload();
				} else {
					addEventListener('load', onload);
					document[_addEventListener]('DOMContentLoaded', throttledCheckElements);
					setTimeout(onload, 20000);
				}

				if(lazysizes.elements.length){
					checkElements();
					rAF._lsFlush();
				} else {
					throttledCheckElements();
				}
			},
			checkElems: throttledCheckElements,
			unveil: unveilElement
		};
	})();


	var autoSizer = (function(){
		var autosizesElems;

		var sizeElement = rAFIt(function(elem, parent, event, width){
			var sources, i, len;
			elem._lazysizesWidth = width;
			width += 'px';

			elem.setAttribute('sizes', width);

			if(regPicture.test(parent.nodeName || '')){
				sources = parent.getElementsByTagName('source');
				for(i = 0, len = sources.length; i < len; i++){
					sources[i].setAttribute('sizes', width);
				}
			}

			if(!event.detail.dataAttr){
				updatePolyfill(elem, event.detail);
			}
		});
		var getSizeElement = function (elem, dataAttr, width){
			var event;
			var parent = elem.parentNode;

			if(parent){
				width = getWidth(elem, parent, width);
				event = triggerEvent(elem, 'lazybeforesizes', {width: width, dataAttr: !!dataAttr});

				if(!event.defaultPrevented){
					width = event.detail.width;

					if(width && width !== elem._lazysizesWidth){
						sizeElement(elem, parent, event, width);
					}
				}
			}
		};

		var updateElementsSizes = function(){
			var i;
			var len = autosizesElems.length;
			if(len){
				i = 0;

				for(; i < len; i++){
					getSizeElement(autosizesElems[i]);
				}
			}
		};

		var debouncedUpdateElementsSizes = debounce(updateElementsSizes);

		return {
			_: function(){
				autosizesElems = document.getElementsByClassName(lazySizesConfig.autosizesClass);
				addEventListener('resize', debouncedUpdateElementsSizes);
			},
			checkElems: debouncedUpdateElementsSizes,
			updateElem: getSizeElement
		};
	})();

	var init = function(){
		if(!init.i){
			init.i = true;
			autoSizer._();
			loader._();
		}
	};

	lazysizes = {
		cfg: lazySizesConfig,
		autoSizer: autoSizer,
		loader: loader,
		init: init,
		uP: updatePolyfill,
		aC: addClass,
		rC: removeClass,
		hC: hasClass,
		fire: triggerEvent,
		gW: getWidth,
		rAF: rAF,
	};

	return lazysizes;
}
));


/***/ }),

/***/ "./templates/default/src/js/app.js":
/*!*****************************************!*\
  !*** ./templates/default/src/js/app.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

new Tabs();

/***/ }),

/***/ "./templates/default/src/js/form.js":
/*!******************************************!*\
  !*** ./templates/default/src/js/form.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function () {
  var each = function each(arr, callback) {
    Array.prototype.forEach.call(arr, function (node, index) {
      callback.call(node, index);
    });
  };

  var inputs = document.querySelectorAll('[data-form-label]');
  each(inputs, function () {
    this.addEventListener('focusout', function () {
      if (this.value) {
        this.classList.add('form__input_full');
      } else {
        this.classList.remove('form__input_full');
      }
    });
  });
})();

/***/ }),

/***/ "./templates/default/src/js/index.js":
/*!*******************************************!*\
  !*** ./templates/default/src/js/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// window.$ = require('jquery');
__webpack_require__(/*! ./js-polyfills */ "./templates/default/src/js/js-polyfills.js");

__webpack_require__(/*! lazysizes */ "./node_modules/lazysizes/lazysizes.js"); // require('jquery-match-height');


__webpack_require__(/*! ./plugins/tabs/js/tabs */ "./templates/default/src/js/plugins/tabs/js/tabs.js");

__webpack_require__(/*! ./swiper */ "./templates/default/src/js/swiper.js"); // require('./swiper-large'); 


__webpack_require__(/*! ./app */ "./templates/default/src/js/app.js");

__webpack_require__(/*! ./form */ "./templates/default/src/js/form.js");

__webpack_require__(/*! ./plugins/mobile-menu/mobile-menu */ "./templates/default/src/js/plugins/mobile-menu/mobile-menu.js");

__webpack_require__(/*! ./scroll-smooth */ "./templates/default/src/js/scroll-smooth.js");

__webpack_require__(/*! ./map */ "./templates/default/src/js/map.js");

/***/ }),

/***/ "./templates/default/src/js/js-polyfills.js":
/*!**************************************************!*\
  !*** ./templates/default/src/js/js-polyfills.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = function (callback, thisArg) {
    thisArg = thisArg || window;

    for (var i = 0; i < this.length; i++) {
      callback.call(thisArg, this[i], i, this);
    }
  };
}

/***/ }),

/***/ "./templates/default/src/js/map.js":
/*!*****************************************!*\
  !*** ./templates/default/src/js/map.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function () {
  var myFirstPromise = new Promise(function (resolve, reject) {
    // Мы вызываем resolve(...), когда асинхронная операция завершилась успешно, и reject(...), когда она не удалась.
    // В этом примере мы используем setTimeout(...), чтобы симулировать асинхронный код. 
    // В реальности вы, скорее всего, будете использовать XHR, HTML5 API или что-то подобное.
    setTimeout(function () {
      resolve("Success!"); // Ура! Всё прошло хорошо! 
    }, 250);
  });
  myFirstPromise.then(function (successMessage) {
    // successMessage - это что угодно, что мы передали в функцию resolve(...) выше.
    // Это необязательно строка, но если это всего лишь сообщение об успешном завершении, это наверняка будет она.
    console.log("Ура! " + successMessage);
  });

  var each = function each(arr, callback) {
    Array.prototype.forEach.call(arr, function (node, index) {
      callback.call(node, index);
    });
  };

  var inputs = document.querySelectorAll('.js-map__inputs');
  var textChange = document.querySelectorAll('.js-map__changetext');
  var title = document.querySelector('[data-map-text]');
  var g = document.querySelectorAll('.js-map__point');
  each(inputs, function (index) {
    if (this.checked) {
      document.querySelector(this.getAttribute('data-point')).classList.add('active');
      title.innerHTML = textChange[index].innerHTML;
    }

    this.addEventListener('change', function () {
      each(g, function () {
        this.classList.remove('active');
      });
      document.querySelector(this.getAttribute('data-point')).classList.add('active');
      title.innerHTML = textChange[index].innerHTML;
    });
  });
})();

/***/ }),

/***/ "./templates/default/src/js/plugins/mobile-menu/mobile-menu.js":
/*!*********************************************************************!*\
  !*** ./templates/default/src/js/plugins/mobile-menu/mobile-menu.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function () {
  var createElement = function createElement(obj, cls, parent) {
    var o = document.createElement(obj);

    if (cls) {
      o.classList.add(cls);
    }

    if (parent) {
      parent.appendChild(o);
    }

    return o;
  };

  var extend = function extend(defaults, source) {
    for (var key in source) {
      if (source.hasOwnProperty(key)) {
        defaults[key] = source[key];
      }
    }

    return defaults;
  };

  var MobileMenu = function MobileMenu(opts) {
    this.init(opts);
    this.create();
    this.events();
  };

  MobileMenu.prototype = {
    init: function init(opts) {
      this.defaults = extend({
        mainContainer: '.wrapper',
        direction: 'right',
        burger: '[data-mobile-menu-burger]',
        close: '[data-mobile-menu-close]',
        createFn: function createFn() {}
      }, opts);
      this.tags = {};
    },
    create: function create() {
      var _body = document.body;
      this.tags.mobileMenu = createElement('div', 'mobile-menu');
      this.tags.mobileMenuClose = createElement('div', 'mobile-menu__close', this.tags.mobileMenu);
      this.tags.mobileMenuClose.innerHTML = '<span><i></i><i></i></span>';
      this.tags.mainContainer = document.querySelector(this.defaults.mainContainer);
      this.tags.mobileMenuChange = createElement('div', 'mobile-menu__section', this.tags.mobileMenu);
      this.tags.mainContainer.classList.add('mobile-menu-wrapper');
      this.tags.burger = document.querySelectorAll(this.defaults.burger);

      _body.insertBefore(this.tags.mobileMenu, _body.firstChild);

      if (this.defaults.direction == 'right') {
        this.tags.mobileMenu.classList.add('mobile-menu_right');
        this.tags.mainContainer.classList.add('mobile-menu-wrapper_right');
      }

      this.defaults.createFn.call(this.tags.mobileMenuChange);
    },
    events: function events() {
      this.tags.mobileMenuClose.addEventListener('click', function () {
        document.body.classList.toggle('menu-open');
      });
      this.each(this.tags.burger, function () {
        this.addEventListener('click', function () {
          document.body.classList.toggle('menu-open');
        });
      });
    },
    each: function each(arr, callback) {
      Array.prototype.forEach.call(arr, function (node, index) {
        callback.call(node, index);
      });
    }
  };
  window.MobileMenu = MobileMenu;
})();

new MobileMenu({
  direction: 'left',
  createFn: function createFn() {
    this.innerHTML = '<div class="mobile-menu__header">Alma tour</div>';
    this.innerHTML += document.querySelector('#js-menu-header').outerHTML;
    this.innerHTML += "\n\t\t\t<div class=\"social-like\">\n\t\t\t\t<div class=\"social-like__text\">\u041F\u043E\u0434\u0435\u043B\u0438\u0442\u0435\u0441\u044C \u0441 \u0434\u0440\u0443\u0437\u044C\u044F\u043C\u0438 \u043F\u0440\u0438\u0433\u043B\u044F\u043D\u0443\u0432\u0448\u0438\u043C\u0441\u044F \u0442\u0443\u0440\u043E\u043C</div>\n\t\t\t\t<!-- /.social-like__text -->\n\t\t\t\t<div class=\"social-like__row\">\n\t\t\t\t\t<div class=\"social-like__item\">\n\t\t\t\t\t\t<a href=\"#\" class=\"social-like__link\">\n\t\t\t\t\t\t\t<img data-src=\"images/facebook.svg\" alt=\"\" class=\"social-like__pic lazyload\">\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</div>\n\t\t\t\t\t<!-- /.social-like__item -->\n\t\t\t\t\t<div class=\"social-like__item\">\n\t\t\t\t\t\t<a href=\"#\" class=\"social-like__link\">\n\t\t\t\t\t\t\t<img data-src=\"images/vk.svg\" alt=\"\" class=\"social-like__pic lazyload\">\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</div>\n\t\t\t\t\t<!-- /.social-like__item -->\n\t\t\t\t\t<div class=\"social-like__item\">\n\t\t\t\t\t\t<a href=\"#\" class=\"social-like__link\">\n\t\t\t\t\t\t\t<img data-src=\"images/telega.svg\" alt=\"\" class=\"social-like__pic lazyload\">\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</div>\n\t\t\t\t\t<!-- /.social-like__item -->\n\t\t\t\t\t<div class=\"social-like__item\">\n\t\t\t\t\t\t<a href=\"#\" class=\"social-like__link\">\n\t\t\t\t\t\t\t<img data-src=\"images/twitter.svg\" alt=\"\" class=\"social-like__pic lazyload\">\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</div>\n\t\t\t\t\t<!-- /.social-like__item -->\n\t\t\t\t\t<div class=\"social-like__item\">\n\t\t\t\t\t\t<a href=\"#\" class=\"social-like__link\">\n\t\t\t\t\t\t\t<img data-src=\"images/subscribe.svg\" alt=\"\" class=\"social-like__pic lazyload\">\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</div>\n\t\t\t\t\t<!-- /.social-like__item -->\n\t\t\t\t</div>\n\t\t\t\t<!-- /.social-like__row -->\n\t\t\t</div>\n\t\t\t<!-- /.social-like -->\n\t\t";
    this.innerHTML += "<div class=\"mobile-menu__footer\">Alma Tour, ".concat(new Date().getFullYear(), " \u0433.\u2028\u041A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u043E\u0432 \u0441\u0430\u0439\u0442\u0430 \u0437\u0430\u043F\u0440\u0435\u0449\u0435\u043D\u043E. </div>");
  }
});

/***/ }),

/***/ "./templates/default/src/js/plugins/tabs/js/tabs.js":
/*!**********************************************************!*\
  !*** ./templates/default/src/js/plugins/tabs/js/tabs.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function () {
  var mobileDetect = /Android|iPhone|iPad|iPod|BlackBerry|WPDesktop|IEMobile|Opera Mini/i.test(navigator.userAgent);
  var event = mobileDetect ? 'touchend' : 'mouseup';

  var Tabs = function Tabs(opts) {
    this.options = this.extendFn({
      classMain: 'tabs-menu',
      parent: '[data-tabs]',
      buttons: '[data-tabs-children]',
      offsetMobile: 70
    }, opts);
    this.init();
  };

  Tabs.prototype = {
    init: function init() {
      var obj = this;
      var parents = document.querySelectorAll(this.options.parent);

      if (!parents.length) {
        return false;
      }

      this.each(parents, function (index) {
        var triggerActive = false;
        var tags = {};
        tags.xsbuttons = [];
        tags.tabs = [];
        tags.buttons = this.querySelectorAll(obj.options.buttons);
        obj.each(tags.buttons, function (index) {
          tags.tabs.push(document.querySelector(this.getAttribute('data-hash')));
          tags.xsbuttons.push(obj.insert('div', {
            'class': obj.options.classMain + '__xslink'
          }, this.innerHTML, tags.tabs[index]));

          if (this.classList.contains('active')) {
            tags.tabs[index].classList.add('active');
            tags.xsbuttons[index].classList.add('active');
            obj.triggerActive = true;
          }

          this.addEventListener(event, function () {
            obj.each(tags.buttons, function (i) {
              this.classList.remove('active');
              tags.xsbuttons[i].classList.remove('active');
              tags.tabs[i].classList.remove('active');
            });
            this.classList.add('active');
            tags.xsbuttons[index].classList.add('active');
            tags.tabs[index].classList.add('active');
          }, false);
          tags.xsbuttons[index].addEventListener(event, function () {
            obj.each(tags.xsbuttons, function (i) {
              this.classList.remove('active');
              tags.buttons[i].classList.remove('active');
              tags.tabs[i].classList.remove('active');
            });
            this.classList.add('active');
            tags.buttons[index].classList.add('active');
            tags.tabs[index].classList.add('active');
            window.scrollTo(0, window.pageYOffset + this.getBoundingClientRect().top - obj.options.offsetMobile);
          }, false);
          this.addEventListener('click', function (e) {
            e.preventDefault();
          });
        });

        if (!obj.triggerActive) {
          tags.buttons[0].classList.add('active');
          tags.xsbuttons[0].classList.add('active');
          tags.tabs[0].classList.add('active');
        }
      });
    },
    each: function each(nodes, callback) {
      Array.prototype.forEach.call(nodes, function (node, index) {
        if (callback) {
          callback.call(node, index);
        }
      });
    },
    extendFn: function extendFn(destination, source) {
      var property;

      for (property in source) {
        if (source.hasOwnProperty(property)) {
          destination[property] = source[property];
        }
      }

      return destination;
    },
    insert: function insert(tagname, attrs, txt, element) {
      var tag, i;
      tag = document.createElement(tagname);

      for (i in attrs) {
        if (attrs.hasOwnProperty(i)) {
          tag.setAttribute(i, attrs[i]);
        }
      }

      if (txt) {
        tag.innerHTML = txt;
      }

      if (element) {
        element.parentNode.insertBefore(tag, element);
      }

      return tag;
    }
  };
  window.Tabs = Tabs;
})();

/***/ }),

/***/ "./templates/default/src/js/scroll-smooth.js":
/*!***************************************************!*\
  !*** ./templates/default/src/js/scroll-smooth.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function () {
  var links = document.querySelectorAll('[data-scroll-smooth]');

  var smoothScroll = function smoothScroll(target) {
    document.querySelector(target).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  };

  Array.prototype.forEach.call(links, function (node) {
    node.addEventListener('click', function (e) {
      e.preventDefault();
      document.body.classList.remove('menu-open');
      var target = this.getAttribute('data-hash') ? this.getAttribute('data-hash') : this.getAttribute('href');
      smoothScroll(target);
      setTimeout(function () {
        smoothScroll(target);
      }, 1000);
    });
  });
})();

/***/ }),

/***/ "./templates/default/src/js/swiper.js":
/*!********************************************!*\
  !*** ./templates/default/src/js/swiper.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function () {
  if (document.querySelector('[data-swiper]')) {
    __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! swiper */ "./node_modules/swiper/dist/js/swiper.esm.bundle.js")).then(function (Swiper) {
      var swiperInit = function swiperInit() {
        var swiperElements = document.querySelectorAll('[data-swiper]');
        swiperElements.forEach(function (node) {
          if (node.classList.contains('swiper-container-horizontal') || node.classList.contains('swiper-container-vertical')) {
            return false;
          }

          var options = JSON.parse(node.getAttribute('data-options'));
          var length = node.querySelectorAll('.swiper-slide').length;

          if (!options.pagination) {
            options.pagination = {};
          }

          options.pagination.el = node.parentNode.querySelector('.js-swiper-pagination');
          options.pagination.clickable = true;
          options.navigation = {
            nextEl: node.parentNode.querySelector('.js-swiper__next'),
            prevEl: node.parentNode.querySelector('.js-swiper__prev')
          };

          if (!options.slidesPerView) {
            if (length < 2) {
              if (options.navigation.prevEl || options.navigation.nextEl) {
                options.navigation.prevEl.style.display = 'none';
                options.navigation.nextEl.style.display = 'none';
              }
            }
          } else {
            if (length < parseInt(options.slidesPerView)) {
              if (options.navigation.prevEl || options.navigation.nextEl) {
                options.navigation.prevEl.style.display = 'none';
                options.navigation.nextEl.style.display = 'none';
              }
            }
          }

          new Swiper.default(node, options);
        });
      };

      swiperInit();
    });
  }
})();

/***/ })

/******/ });
//# sourceMappingURL=main.bundle.js.map