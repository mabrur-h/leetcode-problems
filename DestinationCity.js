const destCity = paths => {
    let from = [], to = [];

    for (let val of paths) {
        from.push(val[0])
        to.push(val[1])
    }

    for (const item of to) {
        if (from.indexOf(item) === -1) return item
    }
}