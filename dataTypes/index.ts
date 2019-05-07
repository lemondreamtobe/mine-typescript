let isBoolean: boolean = false;

let isNumber: number = 123;
let isNaNData: number = NaN;
let isInfinity: number = Infinity;

let isString: string = 'Tom';


let isVoid: void = undefined; // 声明一个 void 类型的变量没有什么用，因为你只能将它赋值为 undefined 和 null：

// undefined 类型的变量只能被赋值为 undefined，null 类型的变量只能被赋值为 null。
let isUndefined: undefined = undefined;
let isNull: null = null;
// 与 void 的区别是，undefined 和 null 是所有类型的子类型。也就是说 undefined 类型的变量，可以赋值给 number 类型的变量：

// 这样不会报错
let num: number = undefined;

// 这样也不会报错
let u: null;

let num1: number = null;

