function mergeSort(array) {
  if (array.length === 1) {
    return array;
  }

  const leftSide = mergeSort(array.slice(0, Math.floor(array.length / 2)));
  const rightSide = mergeSort(array.slice(Math.floor(array.length / 2)));

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
