type GetReturnType<T> = T extends (...args: any[]) => infer R ? R : never;

const fn1 = () => "hello";
const fn2 = (a: number) => a * 2;

let ret1: GetReturnType<typeof fn1> = "world";
let ret2: GetReturnType<typeof fn2> = 100;

let error1: GetReturnType<typeof fn1> = 123;

console.log("Soru 12 Başarılı!");
