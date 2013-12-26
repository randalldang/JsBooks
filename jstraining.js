var Class = function() {};
console.log(Class.prototype.constructor === Class);

var obj = new Class();
console.log(obj.__proto__ === Class.prototype);

var newObj = {};
newObj.__proto__ = Class.prototype;
console.log(newObj instanceof Class);