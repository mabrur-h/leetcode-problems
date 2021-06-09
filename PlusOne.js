const plusOne = function(digits) {
    let el = true
    for (let i = digits.length - 1; i >= 0; i -= 1) {
        if (digits[i] === 9 && el) {
            digits[i] = 0;
            if (i === 0) {
                digits.unshift(1);
                break;
            }
        } else if (el) {
            digits[i] += 1;
            el = false;
        }
    }
    return digits;
};