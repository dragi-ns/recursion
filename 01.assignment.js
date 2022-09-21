const fibs = (number) => {
  if (number <= 0) return [];
  if (number === 1) return [0];
  if (number === 2) return [0, 1];

  let prev = 0;
  let curr = 1;
  const numsArray = [prev, curr];
  for (let i = 2; i < number; i++) {
    const next = prev + curr;
    prev = curr;
    curr = next;
    numsArray.push(next);
  }
  return numsArray;
};

const fibsRec = (number) => {
  if (number <= 0) return [];
  if (number === 1) return [0];
  if (number === 2) return [0, 1];

  const numsArray = fibsRec(number - 1);
  const numsArrayLength = numsArray.length;
  numsArray.push(
    numsArray[numsArrayLength - 1] + numsArray[numsArrayLength - 2]
  );
  return numsArray;
};
