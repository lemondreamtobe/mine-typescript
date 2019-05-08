// 联合类型（Union Types）表示取值可以为多种类型中的一种。

let uniteTypes: string | number; // 既可以是字符串也可以是数字 其他类型会编译报错
uniteTypes = 'seven';
uniteTypes = 7;

// 只能访问此联合类型的所有类型里共有的属性或方法：
// uniteTypes.length 是string的属性 不是number的属性 非共有。
// uniteTypes.toString() 是两个数据类型共有的方法，可用

// 联合类型的变量在被赋值的时候，会根据类型推论的规则推断出一个类型：
// 也就是说 即使是联合类型 但是在赋值的时候也只有一种类型，也只能去访问这种类型的属性和方法