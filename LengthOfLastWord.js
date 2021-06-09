const lengthOfLastWord = s => {

    let arr = s.trim().split(' ');
    return arr.length === 0 ? 0 : arr[arr.length - 1].length;

}