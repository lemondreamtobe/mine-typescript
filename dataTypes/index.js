var isBoolean = false;
var isNumber = 123;
var isNaNData = NaN;
var isInfinity = Infinity;
var isString = 'Tom';
var isVoid = undefined; // 声明一个 void 类型的变量没有什么用，因为你只能将它赋值为 undefined 和 null：
// undefined 类型的变量只能被赋值为 undefined，null 类型的变量只能被赋值为 null。
var isUndefined = undefined;
var isNull = null;
// 与 void 的区别是，undefined 和 null 是所有类型的子类型。也就是说 undefined 类型的变量，可以赋值给 number 类型的变量：
// 这样不会报错
var num = undefined;
// 这样也不会报错
var u;
var num1 = null;
