let isValid = function(s) {

    if(s.length === 1) return false

    let stack = [];
    let len = s.length;
    let bracketsMap = {
        '(': ')',
        '[': ']',
        '{': '}'
    };
    for (let i = 0; i < len; i++) {
        if (stack.length > 0 && bracketsMap[stack[stack.length - 1]] === s[i]) {
            stack.pop();
        } else {
            stack.push(s[i]);
        }
    }
    return stack.length === 0;
};