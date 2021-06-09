const numberOfBits = function(n) {
    let str = n.toString(2),
        i = 0
    for (let s of str) {
        if (s === '1') i ++
    }
    return i
}

