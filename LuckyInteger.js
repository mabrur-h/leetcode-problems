// Given an array of integers arr, a lucky integer is an integer which has a frequency in the array equal to its value.
// Return a lucky integer in the array. If there are multiple lucky integers return the largest of them. If there is no lucky integer return -1.

const findLucky = (arr) => {
    const res = new Array(arr.length)
    arr.forEach((j, i)=>{
        if(res[j] === undefined){
            res[j] =0;
        }
        res[j]+=1;
    })

    let finalRes = -1;
    res.forEach((j,i)=>{
        if(j === i){
            finalRes = i;
        }
    })

    return finalRes;
};