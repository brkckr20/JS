function check(x, y, z) {
    return x + y == z || x * y == z || x / y == z || x - y == z;
}
console.log(check(1, 2, 3));
console.log(check(1, 2, 4));
