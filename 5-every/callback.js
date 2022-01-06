const array3 = [99, 100, 120, 140, 160, 180, 200, 201];

function myEvery(array) {
  for (let i = 0; i < array.length; i++) {
    if (everyCallback(array[i]) === false) {
      console.log("Not every element is between 100 and 200:", array[i]);
    } else if (everyCallback(array[i]) === true) {
      console.log("This element is between 100 and 200:", array[i]);
    }
  }
}

function everyCallback(element) {
  //checks if every element is between 100 and 200 (inclusive)
  if (element < 100 || element > 200) {
    return false;
  } else {
    return true;
  }
}

myEvery(array3);