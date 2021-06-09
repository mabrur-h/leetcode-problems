const dominantIndex = function(nums) {
    let larInd = 0;
    let larVal = 0;
    for ( let i = 0; i < nums.length; i++ ) {
        if ( larVal < nums[i] ) {
            larInd = i;
            larVal = nums[i];
        }
    }
    for ( let i = 0; i < nums.length; i++ ) {
        let val = nums[i] * 2;
        if ( larInd === i ) {
            continue
        } else if ( larVal < val ) {
            return -1;
        }
    }
    return larInd;
}

dominantIndex([1,2,3,4])