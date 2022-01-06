const array2 = [510, 620, 730, 840, 950];

function myIndexOf(array) {
  console.log(indexOfCallback(array, 620)); //output: 1
  console.log(indexOfCallback(array, 580)); //output: -1
  console.log(indexOfCallback(array, 950)); //output: 4
  console.log(indexOfCallback(array, 900)); //output: -1
  console.log(indexOfCallback(array, 730)); //output: 2
}

function indexOfCallback(array, searchElement) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === searchElement) {
      return i;
    }
  }
  return -1;
}

myIndexOf(array2);
