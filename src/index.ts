function someGeneric<T>(value: T): T {
    return value;
}

console.log(someGeneric('apple').length);
console.log(someGeneric(12));

const numbers: Array<number> = [1,2,3,4,5];
