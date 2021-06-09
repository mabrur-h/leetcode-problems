const romanToInt = s => {
    let roman = {
        I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000
    }

    let result = 0;

    for (let i = 0; i < s.length; i++) {
        let current = roman[s.charAt(i)];
        let next = roman[s.charAt(i + 1)];

        if (!next) {
            result += current;
        } else if (current >= next) {
            result += current;
        } else {
            result += (next - current);
            i++;
        }
    }

    return result;
};