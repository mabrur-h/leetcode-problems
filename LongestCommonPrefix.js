const longestCommonPrefix = function(str) {
    let longestPrefix = '';
    if (str.length > 0) {
        longestPrefix = str[0];
        for (let i = 1; i < str.length; i++) {
            for (let j = 0; j < longestPrefix.length; j++) {
                if (str[i][j] != longestPrefix[j]) {
                    longestPrefix = longestPrefix.slice(0, j);
                    break;
                }
            }
        }
    }

    return longestPrefix;
};