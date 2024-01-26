// Задача 1
function getArrayParams(...arr) {
  let data = [...arr];
  let min = Infinity;
  let max = -Infinity;
  min = Math.min(...arr);
  max = Math.max(...arr);
  let sum = data.reduce((result, current) => result + current, 0);
  let avg = Number((sum / data.length).toFixed(2));

  return {min, max, avg};
}

// Задача 2
// 1
function summElementsWorker(...arr) {
  let data = [...arr];
  let sum;
  if (data.length === 0) {
    return 0;
  } else {
    sum = data.reduce((result, current) => result + current, 0);
  }
  return sum;
}

//2
function differenceMaxMinWorker(...arr) {
  let data = [...arr];
  let min = Infinity;
  let max = -Infinity;
  if (data.length === 0) {
    return 0;
  } else {
    min = Math.min(...arr);
    max = Math.max(...arr);
  }
  return max - min;
}

//3
function differenceEvenOddWorker(...arr) {
  let data = [...arr];
  let sumEvenElement = 0;
  let sumOddElement = 0;

  if (data.length === 0) {
    return 0;
  }
  
  for (let i = 0; i < data.length; i++) {
    if (data[i] % 2 === 0) {
      sumEvenElement += data[i];
    } else {
      sumOddElement += data[i];
    }
  }
  return sumEvenElement - sumOddElement;
}

//4
function averageEvenElementsWorker(...arr) {
  let data = [...arr];
  let sumEvenElement = 0;
  let countEvenElement = 0;

  if (data.length === 0) {
    return 0;
  }

  for (let i = 0; i < data.length; i++) {
    if (data[i] % 2 === 0) {
      sumEvenElement += data[i];
      countEvenElement ++;
    } 
  }

  return sumEvenElement / countEvenElement;
}


// Задача 3
function makeWork(arrOfArr, func) {
  let maxWorkerResult = -Infinity;

  for (let i = 0; i < arrOfArr.length; i++) {
    const result = func(...arrOfArr[i]);
    if (result > maxWorkerResult) {
      maxWorkerResult = result;
    }
  }
  return maxWorkerResult;
}