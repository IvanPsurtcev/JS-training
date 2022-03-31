function isEven(n: number): boolean {
    if(!(n%2))
      return true;
    else
      return false;
};

console.log(isEven(10));
console.log(isEven(11));
console.log(isEven(-1));