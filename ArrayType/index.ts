// 数组的类型

// 最简单的方法是使用「类型 + 方括号」来表示数组：
let fibonacci: number[] = [1, 1, 2, 3, 5]; // 数组里只能有number类型
let fibonacci1: any[] = [1, '1', true, function() {}, 5]; // 数组里只能有number类型

// 可以使用数组泛型（Array Generic） Array<elemType> 来表示数组
let fibonacci2: Array<number> = [1, 1, 2, 3, 5];

// 用接口表示数组
interface NumberArray {
  [index: number]: number;
}
let fibonacci3: NumberArray = [1, 1, 2, 3, 5];


// 常见的类数组都有自己的接口定义，如 IArguments, NodeList, HTMLCollection 等：
function sum() {
  let args: IArguments = arguments;
}