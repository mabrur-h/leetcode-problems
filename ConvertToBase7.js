const convertToBase7 = function(num) {
    let int;
    let initialNum = num;
    let rem = [];
    if ( num < 0) {
        num = num * -1
    }
    while (num >= 7) {
        int = ~~(num/7);
        rem.unshift(num - (int * 7));
        num = int
    }
    rem.unshift(num)
    if (initialNum < 0) {
        rem.unshift('-')
    }
    return rem.join('')
};
