const lastStoneWeight = function(stones) {
    if(!stones || !stones.length) return -1;

    let res = returnStone(stones);
    return res;
};

function returnStone(stones){
    if(stones.length === 0) return 0;
    if(stones.length === 1) return stones[0];
    let sorted = stones.sort((a,b)=> a>b? -1:1);

    let res = [];

    if(stones.length >= 2){
        let value = stones[0] - stones[1];
        res.push(value);
        res.push(...stones.slice(2));
    }else{
        res.push(stones[0]);
    }

    return returnStone(res);
}