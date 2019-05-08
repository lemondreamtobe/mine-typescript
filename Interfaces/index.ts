// 在面向对象语言中，接口（Interfaces）是一个很重要的概念，它是对行为的抽象，而具体如何行动需要由类（classes）去实现（implements）。

interface Student {
  name: string,
  grade: number
};
let student1: Student = {
  name: 'Lemon',
  grade: 1
};
let student2: Student = {
  name: 'Tom',
  grade: 2
};

// 定义的变量比接口少了一些属性是不允许的, 多一些属性也是不允许的
// 赋值的时候，变量的形状必须和接口的形状保持一致。

// 如果一定要少一些属性。可以用可选属性, 可选属性的含义是该属性可以不存在。仍然不允许添加未定义的属性
interface OtherStudent {
  name: string;
  grade?: number;
};

let otherStudent1: OtherStudent = {
  name: 'Tom'
};

// 一个接口允许有任意的属性

interface AnyStudent {
  name: string;
  grade?: number;
  [propName: string]: any;
}

// 一旦定义了任意属性，那么确定属性和可选属性的类型都必须是它的类型的子集：
// 也就是说 
// interface AnyStudent {
//   name: string;
//   grade?: number;
//   [propName: string]: number;
// }
// 如果这样定义了任意属性。不管是新增属性和是确定属性name都必须是number类型了。



// 字段只能在创建的时候被赋值，那么可以用 readonly 定义只读属性
interface Person {
  readonly id: number;
  name: string;
  age?: number;
  [propName: string]: any;
}

let tom: Person = {
  id: 89757,
  name: 'Tom',
  gender: 'male'
};

tom.id = 9527; // 不允许重写 只读

// 只读的约束存在于第一次给对象赋值的时候，而不是第一次给只读属性赋值的时候：
// 也就是说在tom = {xx: xxx}就已经约束了。