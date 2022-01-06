const array2 = [5000, 150, 20, 2000, 10000, 50, 800, 20000];

function myReduce(array) {
  reduceCallback(array);
}

function reduceCallback(element) {
  console.log("Max = ", Math.max(...element)); //Finds the max number from the array
}

myReduce(array2);