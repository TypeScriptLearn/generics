function someGeneric<T>(value: T): T {
    return value;
}

console.log(someGeneric('apple').length)
console.log(someGeneric(12))
