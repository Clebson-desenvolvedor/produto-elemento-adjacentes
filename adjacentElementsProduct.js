var inputArray = [3, 6, -2, -5, 7, 3]; //exemplo de entrada

function adjacentElementsProduct(inputArray) {
    const newArray = []
    for (var i = 0; i < inputArray.length; i++) {
        newArray[i] = inputArray[i] * inputArray[i + 1]
    }
    newArray.pop()
    var max = newArray.reduce((a, b) => Math.max(a, b))
    return max;
}


console.log(adjacentElementsProduct(inputArray))
