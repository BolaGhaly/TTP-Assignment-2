const array2 = ["a", "b", "c", "d", "e"];

function myEach(array2) {
  for (let i = 0; i < array2.length; i++) {
    printArray2(array2[i]);
  }
}

function printArray2(element) {
  console.log(element);
}

myEach(array2);