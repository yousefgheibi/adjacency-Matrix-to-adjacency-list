function convertToAdjList(adjMatrix) {
    return adjMatrix.map(a => a.map((v, i) => v ? i : -1).filter(v => v !== -1))
}

var test = [
    [0, 0, 0, 0, 0],
    [1, 0, 1, 0, 1],
    [0, 0, 0, 1, 0],
    [1, 0, 0, 0, 0],
    [0, 0, 1, 1, 0]
];
console.log(convertToAdjList(test));

