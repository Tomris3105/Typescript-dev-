
type LastParameter<T> = T extends (...args: infer P) => any
  ? P extends [...infer _, infer L]
    ? L
    : never
  : never;

const fn1 = (a: string, b: number, c: boolean) => {};
const fn2 = (a: Date) => {};

let p1: LastParameter<typeof fn1> = true;
let p2: LastParameter<typeof fn2> = new Date();

let errorP: LastParameter<typeof fn1> = "string";

console.log("Soru 18 Başarılı!", p1);
