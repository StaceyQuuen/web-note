/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./add.js":
/*!****************!*\
  !*** ./add.js ***!
  \****************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"checkPhoneNum\": () => (/* binding */ checkPhoneNum),\n/* harmony export */   \"checkEmail\": () => (/* binding */ checkEmail),\n/* harmony export */   \"getRandomVerify\": () => (/* binding */ getRandomVerify),\n/* harmony export */   \"debounce\": () => (/* binding */ debounce),\n/* harmony export */   \"timeTransfer\": () => (/* binding */ timeTransfer),\n/* harmony export */   \"getGuid\": () => (/* binding */ getGuid),\n/* harmony export */   \"loadDuration\": () => (/* binding */ loadDuration),\n/* harmony export */   \"trim\": () => (/* binding */ trim),\n/* harmony export */   \"rgb2hex\": () => (/* binding */ rgb2hex),\n/* harmony export */   \"checkHtml\": () => (/* binding */ checkHtml),\n/* harmony export */   \"getSamCondition\": () => (/* binding */ getSamCondition),\n/* harmony export */   \"getQCondition\": () => (/* binding */ getQCondition),\n/* harmony export */   \"GetQueryValue1\": () => (/* binding */ GetQueryValue1),\n/* harmony export */   \"toLine\": () => (/* binding */ toLine),\n/* harmony export */   \"toHump\": () => (/* binding */ toHump),\n/* harmony export */   \"getLatelyTime\": () => (/* binding */ getLatelyTime),\n/* harmony export */   \"isMobile\": () => (/* binding */ isMobile),\n/* harmony export */   \"getPaginationData\": () => (/* binding */ getPaginationData)\n/* harmony export */ });\n/**\r\n * 验证手机号格式\r\n */\r\n const checkPhoneNum = function (phoneNum) {\r\n  var myreg = /^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\\d{8}$/;\r\n  var tempStatus = false;\r\n  if (phoneNum.length == 11 && myreg.test(phoneNum)) {\r\n    tempStatus = true;\r\n  }\r\n  return tempStatus;\r\n}\r\n\r\nconst checkEmail = function (email) {\r\n  var reg = new RegExp(\"^[a-z0-9]+([._\\\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$\"); //正则表达式\r\n  if (email === \"\") { //输入不能为空\r\n    return false;\r\n  } else if (!reg.test(email)) { //正则验证不通过，格式不对\r\n    return false;\r\n  } else {\r\n    return true;\r\n  }\r\n}\r\n\r\n/**\r\n * randomWord 产生任意长度随机字母数字组合\r\n * randomFlag-是否任意长度 min-任意长度最小位[固定位数] max-任意长度最大位\r\n * xuanfeng 2014-08-28\r\n */\r\nconst getRandomVerify = function (randomFlag, min, max) {\r\n  var str = \"\",\r\n    range = min,\r\n    arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];\r\n\r\n  // 随机产生\r\n  if (randomFlag) {\r\n    range = Math.round(Math.random() * (max - min)) + min;\r\n  }\r\n  for (var i = 0; i < range; i++) {\r\n    var pos = Math.round(Math.random() * (arr.length - 1));\r\n    str += arr[pos];\r\n  }\r\n  return str;\r\n}\r\n\r\n// 函数防抖\r\nconst debounce1 = (fn, t) => {\r\n  let delay = t || 200;\r\n  let timer;\r\n  return function () {\r\n    let args = arguments;\r\n    if (timer) {\r\n      clearTimeout(timer);\r\n    }\r\n    timer = setTimeout(() => {\r\n      timer = null;\r\n      fn.apply(this, args);\r\n    }, delay);\r\n  }\r\n}\r\n\r\nconst debounce = function (fn, delay) {\r\n  var delay = delay || 500;\r\n  var timer;\r\n  return function () {\r\n    var th = this;\r\n    var args = arguments;\r\n    if (timer) {\r\n      clearTimeout(timer);\r\n    }\r\n    timer = setTimeout(function () {\r\n      timer = null;\r\n      fn.apply(th, args);\r\n    }, delay);\r\n  };\r\n}\r\n\r\n//年月日获取当天的零点和24点\r\nconst timeTransfer = function (chooseDates, num) {\r\n  var date1 = chooseDates[0];\r\n  var date2 = chooseDates[1];\r\n  var month1 = date1.getMonth() + 1;\r\n  var month2 = date2.getMonth() + 1;\r\n  month1 = month1 < 10 ? \"0\" + month1 : month1;\r\n  month2 = month2 < 10 ? \"0\" + month2 : month2;\r\n  var day1 = date1.getDate();\r\n  var day2 = date2.getDate();\r\n  day1 = day1 < 10 ? \"0\" + day1 : day1;\r\n  day2 = day2 < 10 ? \"0\" + day2 : day2;\r\n  if (num == 1) {\r\n    return date1.getFullYear() + \"-\" + month1 + \"-\" + day1;\r\n  } else {\r\n    return date2.getFullYear() + \"-\" + month2 + \"-\" + day2;\r\n  }\r\n}\r\n\r\n/**\r\n * 生成4位随机数\r\n */\r\nfunction S4() {\r\n  return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);\r\n}\r\n\r\n/**\r\n * 通过随机数和时间戳获取一个唯一的标识符\r\n */\r\nfunction getGuid() {\r\n  return (S4() + S4() + \"-\" + S4() + \"-\" + S4() + \"-\" + S4() + \"-\" + S4() + S4() + S4());\r\n}\r\n\r\n// 时间换算(秒转天时分秒)\r\nconst loadDuration = function (duration) {\r\n  var day = Math.floor( duration / (24*3600) ); // Math.floor()向下取整\r\n  var hour = Math.floor( (duration - day*24*3600) / 3600);\r\n  var minute = Math.floor( (duration - day*24*3600 - hour*3600) /60 );\r\n  var second = duration - day*24*3600 - hour*3600 - minute*60;\r\n  var time = [];\r\n  time.push(day);\r\n  time.push(hour);\r\n  time.push(minute);\r\n  time.push(second);\r\n  var result = \"\"\r\n  for (let i = 0;i < time.length;i++) {\r\n    if (time[i] != 0) {\r\n      if (i == 0) {\r\n        result = result.concat(day + \"天\");\r\n      } else if (i == 1) {\r\n        result = result.concat(hour + \"小时\");\r\n      } else if (i == 2) {\r\n        result = result.concat(minute + \"分\");\r\n      } else if (i == 3) {\r\n        result = result.concat(second + \"秒\");\r\n      }\r\n    }\r\n  }\r\n  if (duration == 0) {\r\n    result = duration + \"秒\";\r\n  }\r\n  return result;\r\n}\r\n\r\nconst trim = function (str) {\r\n  return str.replace(/^\\s+|\\s+$/gm, '')\r\n}\r\n\r\nconst rgb2hex = function (rgbColor) {\r\n  let rgb = rgbColor.split(',');\r\n  let r = parseInt(rgb[0].split('(')[1]);\r\n  let g = parseInt(rgb[1]);\r\n  let b = parseInt(rgb[2].split(')')[0]);\r\n\r\n  let hex = \"#\" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase();\r\n  return hex;\r\n}\r\n/**\r\n * 回显样本筛选\r\n */\r\nconst getSamCondition = function(str) {\r\n\tlet arr = []\r\n\tlet obj = {}\r\n\tlet conditions = []\r\n\t// TODO 优化\r\n\tif (str.indexOf('or') != -1 || str.indexOf('and') != -1 ) {\r\n\t\tarr = str.trim().split(/(or|and)/g)\r\n\t\tobj = handleStr(arr[0], true)\r\n\t\tobj.andOr = arr[1]\r\n\t\tconditions[0] = obj\r\n\t\tif (arr[3]) {\r\n\t\t\tlet obj1 = handleStr(arr[2], true)\r\n\t\t\tobj1.andOr = arr[3]\r\n\t\t\tconditions.push(obj1)\r\n\t\t\tlet obj2 = handleStr(arr[4], false)\r\n\t\t\tconditions.push(obj2)\r\n\t\t} else {\r\n\t\t\tlet obj1 = handleStr(arr[2], true)\r\n\t\t\tconditions.push(obj1)\r\n\t\t}\r\n\t} else {\r\n\t\tobj = handleStr(str, true)\r\n\t\tconditions[0] = obj\r\n\t}\r\n\treturn conditions\r\n}\r\nconst handleStr = function(str, boolean) {\r\n\tlet arr = []\r\n\tlet obj = {}\r\n\tstr = str.replace(/(%|'|s\\.)/g, '')\r\n\tarr = str.trim().split(\" \")\r\n\tif (arr.length == 4) {\r\n\t\tobj.type = toHump(arr[0])\r\n\t\tobj.option = 'not like'\r\n\t\tobj.content = arr[3]\r\n\t\tobj.show = boolean\r\n\t} else {\r\n\t\tobj.type = toHump(arr[0])\r\n\t\tobj.option = arr[1]\r\n\t\tobj.content = arr[2]\r\n\t\tobj.show = boolean\r\n\t}\r\n\treturn obj\r\n}\r\n/**\r\n * 回显答题筛选\r\n */\r\nconst getQCondition = function (str) {\r\n\tlet conditions = []\r\n\tlet arr = []\r\n\tlet obj = {}\r\n\tif (str) {\r\n\t\tif (str.indexOf('or') != -1 || str.indexOf('and') != -1 ) {\r\n\t\t\tarr = str.trim().split(/(or|and)/g)\r\n\t\t\tobj = handleQStr(arr[0], true)\r\n\t\t\tobj.andOr = arr[1]\r\n\t\t\tconditions.push(obj)\r\n\t\t\tif (arr[3]) {\r\n\t\t\t\tlet obj1 = handleQStr(arr[2], true)\r\n\t\t\t\tobj1.andOr = arr[3]\r\n\t\t\t\tconditions.push(obj1)\r\n\t\t\t\tlet obj2 = handleQStr(arr[4], false)\r\n\t\t\t\tconditions.push(obj2)\r\n\t\t\t} else {\r\n\t\t\t\tlet obj1 = handleQStr(arr[2], true)\r\n\t\t\t\tconditions.push(obj1)\r\n\t\t\t}\r\n\t\t} else {\r\n\t\t\tlet obj = handleQStr(str, true)\r\n\t\t\tconditions.push(obj)\r\n\t\t}\r\n\t\treturn conditions\r\n\t}\r\n}\r\nconst find = function(str, cha, num) {\r\n\tlet x = str.indexOf(cha)\r\n\tfor(let i = 0; i < num; i++) {\r\n\t\tx = str.indexOf(cha, x+1)\r\n\t}\r\n\treturn x\r\n}\r\nconst handleQStr = function(str, boolean) {\r\n\tif (str) {\r\n\t\tstr = str.replace(/(\"|')/g, '')\r\n\t\tlet qTit = str.substring(find(str, '.', 1)+1, find(str, '.', 2))\r\n\t\tlet qTitNum = str.substring(find(str, '.', 3)+1, str.indexOf(')'))\r\n\t\tlet option = ''\r\n\t\tif (str.includes('=')){\r\n\t\t\toption = str.substring(str.indexOf(\"=\")+1).trim()\r\n\t\t} else {\r\n\t\t\toption = str.substring(str.indexOf(\"IS\")+2).trim()\r\n\t\t}\r\n\t\tlet obj = {}\r\n\t\tif (option == '1') {\r\n\t\t\tobj = { type: qTit, option: '1', content: qTitNum, show: boolean }\r\n\t\t} else {\r\n\t\t\tobj = { type: qTit, option: '2', content: qTitNum, show: boolean }\r\n\t\t}\r\n\t\treturn obj\r\n\t}\r\n}\r\n//检测花括弧是否正确\r\nconst checkHtml = function check(str) {\r\n  var arr = str.split('') // 将传入字符串转化为数组\r\n  var leftSum = 0\r\n  var rightSum = 0\r\n\r\n  for (var i = 0; i < arr.length; i++) {\r\n    var item = arr[i]\r\n    if (item.indexOf('{') >= 0) {\r\n      // 左括号\r\n      leftSum++\r\n    } else if (item.indexOf('}') >= 0) {\r\n      //右\r\n      rightSum++\r\n    }\r\n  }\r\n  if (rightSum != leftSum) {\r\n    return false\r\n  }\r\n  return true\r\n}\r\n/**\r\n * 获取url参数值\r\n */\r\nfunction GetQueryValue1(queryName) {\r\n  var reg = new RegExp(\"(^|&)\" + queryName + \"=([^&]*)(&|$)\", \"i\");\r\n  var r = window.location.search.substr(1).match(reg);\r\n  if (r != null) {\r\n    return decodeURI(r[2]);\r\n  } else {\r\n    return null;\r\n  }\r\n}\r\n\r\n// 驼峰转换下划线\r\nfunction toLine(name) {\r\n\treturn name.replace(/([A-Z])/g,\"_$1\").toLowerCase()\r\n}\r\n// 下划线转换驼峰\r\nfunction toHump(name) {\r\n\treturn name.replace(/\\_(\\w)/g, function(all, letter){\r\n\t\t\treturn letter.toUpperCase();\r\n\t});\r\n}\r\n\r\n/**\r\n * 获取近指定天数的的时间范围 number 天数\r\n */\r\nfunction getLatelyTime(number) {\r\n  const end = new Date();\r\n  const start = new Date();\r\n  end.setHours(23, 59, 59);\r\n  start.setTime(end.getTime() - 3600 * 1000 * 24 * number + 1000);\r\n  return [start, end];\r\n}\r\n\r\n/**\r\n * 判断是手机内核\r\n */\r\nfunction isMobile() {\r\n  let userAgentInfo = navigator.userAgent;\r\n  let Agents = [\"Android\", \"iPhone\", \"SymbianOS\", \"Windows Phone\", \"iPad\", \"iPod\"];\r\n  let flag = false;\r\n  for (let v = 0; v < Agents.length; v++) {\r\n    if (userAgentInfo.indexOf(Agents[v]) > 0) {\r\n      flag = true;\r\n      break;\r\n    }\r\n  }\r\n  return flag\r\n}\r\n\r\n/**\r\n * 获取分页数据\r\n */\r\nconst getPaginationData = (allData, pageNum, pageSize) => {\r\n  let arr = allData\r\n  let pageData = []\r\n  arr.forEach((val, index) => {\r\n    let page = Math.floor(index / pageSize)\r\n    if (!pageData[page]) {\r\n      pageData[page] = []\r\n    }\r\n    pageData[page].push(val)\r\n  })\r\n  return pageData[pageNum - 1]\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./add.js?");

/***/ }),

/***/ "./test.js":
/*!*****************!*\
  !*** ./test.js ***!
  \*****************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _add__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add */ \"./add.js\");\n//这是一个加法函数\r\n\r\n//这是一个减法函数\r\nfunction reduce(a,b) {\r\n  return a-b\r\n}\r\nconsole.log(reduce(3,1))\n\n//# sourceURL=webpack:///./test.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./test.js");
/******/ 	
/******/ })()
;