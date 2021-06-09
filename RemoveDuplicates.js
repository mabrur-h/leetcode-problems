const removeDuplicates = function(nums) {
    if(nums.length === 0 ) return 0
    for(let i = nums.length-1; i > 0;i--){
        if(nums[i]===nums[i-1]){
            nums.splice(i,1)
        }
    }
    return nums.length
};