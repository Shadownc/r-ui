/*
 * 验证函数包含常用各种类型的验证正则
 * */
function Rules () {
  var self = this
  self.config = {}
  this.regRules = {
    isLetter: /[A-Za-z]/g,  // 验证是否有字母
    isNum: /\d/g,  // 验证是否有数字
    isInt: /^[1-9]*[1-9][0-9]*$/,  // 验证是否是正整数
    isFloat: /^\d+\.?\d{0,1}$/,  // 验证是是一位小数
    isDouble: /^\d+\.?\d{0,2}$/,  // 验证是两位小数
    isChinese: /^[\u4e00-\u9fa5]{0,}$/,  // 验证是否有汉字
    isChinesePunctuation: /[^uFF00-uFFFF]/g,  // 验证是否有中文标点符号
    isTel: /^(\(\d{3,4}\)|\d{3,4}-)?\d{7,8}$/,  // 验证是否是电话
    isPhone: /^0?1[3|4|5|6|7|8|9][0-9]\d{8}$/,  // 验证是否是手机号
    isEmail: /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/,  // 验证是否是邮箱
    isPersonNum: /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/,  // 验证是否是身份证
    isSpace: {  // 验证是否有空格
      test: function (value) {
        return value.indexOf(' ') >= 0
      }
    },
    isUnderline: {  // 验证是否有下划线
      test: function (value) {
        return value.indexOf('_') >= 0
      }
    },
    isMin: {
      test: function (value, length) {
        return value.length >= length
      }
    },
    isMax: {
      test: function (value, length) {
        return value.length <= length
      }
    }
  }
}
Rules.prototype.validator = function (value, reg) {
  let result = false
  var isString = typeof reg === 'string'
  if (isString) {
    var arr = reg.split(':')
    if (arr.length > 1) {
      result = this.regRules[arr[0]].test(value, arr[1])
    } else {
      result = this.regRules[reg].test(value)
    }
  } else {
    result = reg.test(value)
  }
  return result
}

export default new Rules()
