const validSquare = function(p1, p2, p3, p4) {

    const distances = [ [p1, p2], [p1, p3], [p1, p4], [p2, p3], [p2, p4], [p3, p4] ]
        .map(([[ax, ay], [bx, by]]) => (ax - bx) ** 2 + (ay - by) ** 2)
        .sort((a, b) => a - b);

    let sides = distances[0] && (new Set(distances.slice(0,4))).size == 1,
        diags = distances[4] === distances[5];

    return sides && diags;
};