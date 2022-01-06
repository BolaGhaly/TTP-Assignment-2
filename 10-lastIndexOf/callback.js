const array1 = ["a", "d", "g", "e", "a", "d"];

function myLastIndexOf(array, target) {
  console.log(lastIndexOfCallback(array, target));
}

function lastIndexOfCallback(array, target) {
  let indexOfTarget = -1;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) {
      indexOfTarget = i;
    }
  }
  return indexOfTarget;
}

myLastIndexOf(array1, "a"); //output: 4
myLastIndexOf(array1, "z"); //output: -1 (because it does NOT exist in this array)
myLastIndexOf(array1, "d"); //output: 5
myLastIndexOf(array1, "g"); //output: 2
