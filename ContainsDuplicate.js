const containsDuplicate = function(nums) {
    if(nums.length > 1) {
        nums.sort((a,b) => a-b)
        for(let i = 0; i < nums.length; i++) {
            if(nums[i] == nums[i+1]) {
                return true
            }
        }
    } else {
        return false
    }
    return false
};