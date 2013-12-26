//console.log(null == undefined)
//console.log(0 == false)

console.log(new Object().__proto__ === {}.__proto__)

console.log(new Array().__proto__ === [].__proto__)

var obj = {};
obj.__proto__.aa = 'bb';
console.log(obj.aa);
