// 如果没有明确的指定类型，那么 TypeScript 会依照类型推论（Type Inference）的规则推断出一个类型。

let inference1 = 'seven'; // 虽然没有指定类型，但是在第一次给值的时候推测出了值的类型，就是类型推论
inference1 = 7;

// 如果定义的时候没有赋值，不管之后有没有赋值，都会被推断成 any 类型而完全不被类型检查：

let inference2;
inference2 = 'seven';
inference2 = 7;