const array2 = [10, 30, 50, 70];

function myMap(array2) {
  for (let i=0; i < array2.length; i++) {
    printArray2(array2[i]);
  }
}

function printArray2(element) {
  console.log(element);
}

myMap(array2);