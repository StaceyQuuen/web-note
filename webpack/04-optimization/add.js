/**
 * 验证手机号格式
 */
 const checkPhoneNum = function (phoneNum) {
  var myreg = /^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/;
  var tempStatus = false;
  if (phoneNum.length == 11 && myreg.test(phoneNum)) {
    tempStatus = true;
  }
  return tempStatus;
}

const checkEmail = function (email) {
  var reg = new RegExp("^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$"); //正则表达式
  if (email === "") { //输入不能为空
    return false;
  } else if (!reg.test(email)) { //正则验证不通过，格式不对
    return false;
  } else {
    return true;
  }
}

/**
 * randomWord 产生任意长度随机字母数字组合
 * randomFlag-是否任意长度 min-任意长度最小位[固定位数] max-任意长度最大位
 * xuanfeng 2014-08-28
 */
const getRandomVerify = function (randomFlag, min, max) {
  var str = "",
    range = min,
    arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

  // 随机产生
  if (randomFlag) {
    range = Math.round(Math.random() * (max - min)) + min;
  }
  for (var i = 0; i < range; i++) {
    var pos = Math.round(Math.random() * (arr.length - 1));
    str += arr[pos];
  }
  return str;
}

// 函数防抖
const debounce1 = (fn, t) => {
  let delay = t || 200;
  let timer;
  return function () {
    let args = arguments;
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      timer = null;
      fn.apply(this, args);
    }, delay);
  }
}

const debounce = function (fn, delay) {
  var delay = delay || 500;
  var timer;
  return function () {
    var th = this;
    var args = arguments;
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(function () {
      timer = null;
      fn.apply(th, args);
    }, delay);
  };
}

//年月日获取当天的零点和24点
const timeTransfer = function (chooseDates, num) {
  var date1 = chooseDates[0];
  var date2 = chooseDates[1];
  var month1 = date1.getMonth() + 1;
  var month2 = date2.getMonth() + 1;
  month1 = month1 < 10 ? "0" + month1 : month1;
  month2 = month2 < 10 ? "0" + month2 : month2;
  var day1 = date1.getDate();
  var day2 = date2.getDate();
  day1 = day1 < 10 ? "0" + day1 : day1;
  day2 = day2 < 10 ? "0" + day2 : day2;
  if (num == 1) {
    return date1.getFullYear() + "-" + month1 + "-" + day1;
  } else {
    return date2.getFullYear() + "-" + month2 + "-" + day2;
  }
}

/**
 * 生成4位随机数
 */
function S4() {
  return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
}

/**
 * 通过随机数和时间戳获取一个唯一的标识符
 */
function getGuid() {
  return (S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4());
}

// 时间换算(秒转天时分秒)
const loadDuration = function (duration) {
  var day = Math.floor( duration / (24*3600) ); // Math.floor()向下取整
  var hour = Math.floor( (duration - day*24*3600) / 3600);
  var minute = Math.floor( (duration - day*24*3600 - hour*3600) /60 );
  var second = duration - day*24*3600 - hour*3600 - minute*60;
  var time = [];
  time.push(day);
  time.push(hour);
  time.push(minute);
  time.push(second);
  var result = ""
  for (let i = 0;i < time.length;i++) {
    if (time[i] != 0) {
      if (i == 0) {
        result = result.concat(day + "天");
      } else if (i == 1) {
        result = result.concat(hour + "小时");
      } else if (i == 2) {
        result = result.concat(minute + "分");
      } else if (i == 3) {
        result = result.concat(second + "秒");
      }
    }
  }
  if (duration == 0) {
    result = duration + "秒";
  }
  return result;
}

const trim = function (str) {
  return str.replace(/^\s+|\s+$/gm, '')
}

const rgb2hex = function (rgbColor) {
  let rgb = rgbColor.split(',');
  let r = parseInt(rgb[0].split('(')[1]);
  let g = parseInt(rgb[1]);
  let b = parseInt(rgb[2].split(')')[0]);

  let hex = "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase();
  return hex;
}
/**
 * 回显样本筛选
 */
const getSamCondition = function(str) {
	let arr = []
	let obj = {}
	let conditions = []
	// TODO 优化
	if (str.indexOf('or') != -1 || str.indexOf('and') != -1 ) {
		arr = str.trim().split(/(or|and)/g)
		obj = handleStr(arr[0], true)
		obj.andOr = arr[1]
		conditions[0] = obj
		if (arr[3]) {
			let obj1 = handleStr(arr[2], true)
			obj1.andOr = arr[3]
			conditions.push(obj1)
			let obj2 = handleStr(arr[4], false)
			conditions.push(obj2)
		} else {
			let obj1 = handleStr(arr[2], true)
			conditions.push(obj1)
		}
	} else {
		obj = handleStr(str, true)
		conditions[0] = obj
	}
	return conditions
}
const handleStr = function(str, boolean) {
	let arr = []
	let obj = {}
	str = str.replace(/(%|'|s\.)/g, '')
	arr = str.trim().split(" ")
	if (arr.length == 4) {
		obj.type = toHump(arr[0])
		obj.option = 'not like'
		obj.content = arr[3]
		obj.show = boolean
	} else {
		obj.type = toHump(arr[0])
		obj.option = arr[1]
		obj.content = arr[2]
		obj.show = boolean
	}
	return obj
}
/**
 * 回显答题筛选
 */
const getQCondition = function (str) {
	let conditions = []
	let arr = []
	let obj = {}
	if (str) {
		if (str.indexOf('or') != -1 || str.indexOf('and') != -1 ) {
			arr = str.trim().split(/(or|and)/g)
			obj = handleQStr(arr[0], true)
			obj.andOr = arr[1]
			conditions.push(obj)
			if (arr[3]) {
				let obj1 = handleQStr(arr[2], true)
				obj1.andOr = arr[3]
				conditions.push(obj1)
				let obj2 = handleQStr(arr[4], false)
				conditions.push(obj2)
			} else {
				let obj1 = handleQStr(arr[2], true)
				conditions.push(obj1)
			}
		} else {
			let obj = handleQStr(str, true)
			conditions.push(obj)
		}
		return conditions
	}
}
const find = function(str, cha, num) {
	let x = str.indexOf(cha)
	for(let i = 0; i < num; i++) {
		x = str.indexOf(cha, x+1)
	}
	return x
}
const handleQStr = function(str, boolean) {
	if (str) {
		str = str.replace(/("|')/g, '')
		let qTit = str.substring(find(str, '.', 1)+1, find(str, '.', 2))
		let qTitNum = str.substring(find(str, '.', 3)+1, str.indexOf(')'))
		let option = ''
		if (str.includes('=')){
			option = str.substring(str.indexOf("=")+1).trim()
		} else {
			option = str.substring(str.indexOf("IS")+2).trim()
		}
		let obj = {}
		if (option == '1') {
			obj = { type: qTit, option: '1', content: qTitNum, show: boolean }
		} else {
			obj = { type: qTit, option: '2', content: qTitNum, show: boolean }
		}
		return obj
	}
}
//检测花括弧是否正确
const checkHtml = function check(str) {
  var arr = str.split('') // 将传入字符串转化为数组
  var leftSum = 0
  var rightSum = 0

  for (var i = 0; i < arr.length; i++) {
    var item = arr[i]
    if (item.indexOf('{') >= 0) {
      // 左括号
      leftSum++
    } else if (item.indexOf('}') >= 0) {
      //右
      rightSum++
    }
  }
  if (rightSum != leftSum) {
    return false
  }
  return true
}
/**
 * 获取url参数值
 */
function GetQueryValue1(queryName) {
  var reg = new RegExp("(^|&)" + queryName + "=([^&]*)(&|$)", "i");
  var r = window.location.search.substr(1).match(reg);
  if (r != null) {
    return decodeURI(r[2]);
  } else {
    return null;
  }
}

// 驼峰转换下划线
function toLine(name) {
	return name.replace(/([A-Z])/g,"_$1").toLowerCase()
}
// 下划线转换驼峰
function toHump(name) {
	return name.replace(/\_(\w)/g, function(all, letter){
			return letter.toUpperCase();
	});
}

/**
 * 获取近指定天数的的时间范围 number 天数
 */
function getLatelyTime(number) {
  const end = new Date();
  const start = new Date();
  end.setHours(23, 59, 59);
  start.setTime(end.getTime() - 3600 * 1000 * 24 * number + 1000);
  return [start, end];
}

/**
 * 判断是手机内核
 */
function isMobile() {
  let userAgentInfo = navigator.userAgent;
  let Agents = ["Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod"];
  let flag = false;
  for (let v = 0; v < Agents.length; v++) {
    if (userAgentInfo.indexOf(Agents[v]) > 0) {
      flag = true;
      break;
    }
  }
  return flag
}

/**
 * 获取分页数据
 */
const getPaginationData = (allData, pageNum, pageSize) => {
  let arr = allData
  let pageData = []
  arr.forEach((val, index) => {
    let page = Math.floor(index / pageSize)
    if (!pageData[page]) {
      pageData[page] = []
    }
    pageData[page].push(val)
  })
  return pageData[pageNum - 1]
}

export {
  checkPhoneNum,
  checkEmail,
  getRandomVerify,
  debounce,
  timeTransfer,
  getGuid,
  loadDuration,
  trim,
  rgb2hex,
	checkHtml,
	getSamCondition,
	getQCondition,
	GetQueryValue1,
	toLine,
  toHump,
  getLatelyTime,
  isMobile,
  getPaginationData
}
