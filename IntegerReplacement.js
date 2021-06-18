/**
 * @param {number} n
 * @return {number}
 */
var integerReplacement = function (n) {
    let i = 0;

    while (n > 1) {
        if (n === 3) return i + 2
        if (n % 2 === 0) {
            n /= 2;
        } else {
            if (((n + 1) / 2) % 2 === 0) {
                n += 1;
            } else {
                n -= 1
            }
        }
        i += 1
    }
    return i
};