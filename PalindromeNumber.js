let isPalindrome = function(x) {
    if (x < 0 || (x % 10 === 0 && x !== 0)) {
        return false;
    }

    return x === reverse(x);
};

let reverse = function(num) {
    let rev = 0;

    while (num != 0) {
        rev = rev * 10 + num % 10;
        num = parseInt(num / 10);
    }

    return rev;
};

console.log(isPalindrome(1221))