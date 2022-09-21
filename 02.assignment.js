function mergeSort(array) {
  const arrayLength = array.length;
  if (arrayLength === 1) {
    return array;
  }

  const arrayHalfIndex = Math.floor(arrayLength / 2);
  const leftSide = mergeSort(array.slice(0, arrayHalfIndex));
  const rightSide = mergeSort(array.slice(arrayHalfIndex));

  let leftIndex = 0;
  let rightIndex = 0;
  const mergedSides = [];
  const leftSideLength = leftSide.length;
  const rightSideLength = rightSide.length;
  while (leftIndex < leftSideLength && rightIndex < rightSideLength) {
    if (leftSide[leftIndex] < rightSide[rightIndex]) {
      mergedSides.push(leftSide[leftIndex]);
      leftIndex++;
    } else {
      mergedSides.push(rightSide[rightIndex]);
      rightIndex++;
    }
  }

  if (leftIndex < leftSideLength) {
    mergedSides.push(...leftSide.slice(leftIndex));
  }

  if (rightIndex < rightSideLength) {
    mergedSides.push(...rightSide.slice(rightIndex));
  }

  return mergedSides;
}

console.log(mergeSort([1, 5, 4, 2]));
console.log(mergeSort([5, 2, 3, 9, 2, -38, 1, 6, 25, -1]));
