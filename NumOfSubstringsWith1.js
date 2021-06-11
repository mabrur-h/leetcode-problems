// Given a binary string s (a string consisting only of '0' and '1's).
// Return the number of substrings with all characters 1's.
// Since the answer may be too large, return it modulo 10^9 + 7.


const numSub = function(str) {
    let sum;
    sum = 0;
    let el = str.split("0");
    for(const item of el) {
        sum += item.length * ( item.length + 1 ) / 2;
    }
    return sum % (Math.pow(10, 9) + 7);
};
