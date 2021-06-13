// Given a string s, reverse the order of characters in each word within a sentence while still 
// preserving whitespace and initial word order.

const reverseWords = function(s) {
    let arr = s.split(" ");
    let result = "";
    for(let i=0; i<arr.length; i++){
        arr[i] = arr[i].split('').reverse().join('');
    }
    for(let i=0; i<arr.length; i++){
        result = result + arr[i] + " "
    }
    return result.substring(0, result.length - 1);
};
