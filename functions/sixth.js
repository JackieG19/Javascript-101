function sumOddNum() {
    var sum = 0;
    for (var i = 1; i < 30; i += 2) {
        sum += i;
    }
    return sum;
}
console.log(sumOddNum());
