
function convertToAdjList(adjMatrix) {
    var adjList = [];
    for (var i = 0; i < adjMatrix.length; i++) {
        var array = [];
        for (var j = 0; j < adjMatrix.length; j++) {
            if (adjMatrix[i][j] == 1) {
                array.push(j);

            }
            adjList[i] = array;
        }
    }
    return adjList;
}

var test = [
    [0, 0, 0, 0, 0],
    [1, 0, 1, 0, 1],
    [0, 0, 0, 1, 0],
    [1, 0, 0, 0, 0],
    [0, 0, 1, 1, 0]
];
console.log(convertToAdjList(test));

