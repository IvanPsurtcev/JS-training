function min(a: number, b: number): number {
    if (a < b)
      return a;
    else
      return b;
}

console.log(min(0, 10))
console.log(min(0, -10))