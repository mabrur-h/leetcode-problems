const findKthPositive = function(arr, k) {
    arr.unshift(0)
    let counter = 0
    for(let i = 1; i < arr.length; i++) {
        const diff = arr[i] - arr[i-1]
        //console.log(diff)
        if(diff > 1) counter += (diff - 1)
        //console.log(counter)
        if(counter >= k) {
            return arr[i] - (counter - k) - 1
        }

    }
    let result = arr[arr.length - 1] + k - counter
    return result
};