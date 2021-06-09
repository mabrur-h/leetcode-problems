const generate = function (numRows) {
    if (numRows !== 0) {
        if (numRows === 1) return [[1]]
        let res = []
        for (let row = 1; row <= numRows; row++) {
            let arr = []
            for (let col = 0; col < row; col++) {
                if (col === 0 || col === row - 1) {
                    arr.push(1)
                } else {
                    arr.push((res[row - 2][col - 1] + res[row - 2][col]))
                }
            }
            res.push(arr)
        }
        return res
    } else {
        return []
    }
};

generate(5)