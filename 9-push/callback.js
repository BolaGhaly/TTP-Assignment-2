const array2 = [1, 3, 5];

function myPush (array, elementToAdd) {
  pushCallback(array, elementToAdd);
}

function pushCallback(array, elementToAdd) {
  let position = array.length;
  array[position] = elementToAdd;
}

myPush(array2, 7);    //adds 7 to the end of the array
console.log(array2);  //prints out array2 -> output: [ 1, 3, 5, 7 ]
myPush(array2, 9);    //adds 9 to the end of the array
console.log(array2);  //prints out array2 -> output: [ 1, 3, 5, 7, 9 ]