const array3 = [1, 2, 3, 4, 5, "Dog", "Fish", "Alligator"];

function myIncludes(array) {
  //output: No, this array does NOT include 0
  if (includesCallBack(array, 0) === true) {
    console.log("Yes, this array includes 0");
  } else if (includesCallBack(array, 0) === false) {
    console.log("No, this array does NOT include 0");
  }

  //output: Yes, this array includes 4
  if (includesCallBack(array, 4) === true) {
    console.log("Yes, this array includes 4");
  } else if (includesCallBack(array, 4) === false) {
    console.log("No, this array does NOT include 4");
  }

  //output: No, this array does NOT include "4"
  if (includesCallBack(array, "4") === true) {
    console.log('Yes, this array includes "4"');
  } else if (includesCallBack(array, "4") === false) {
    console.log('No, this array does NOT include "4"');
  }

  if (includesCallBack(array, "Fish") === true) {
    console.log('Yes, this array includes "Fish"');
  } else if (includesCallBack(array, "Fish") === false) {
    console.log('No, this array does NOT include "Fish"');
  }

  if (includesCallBack(array, "Cat") === true) {
    console.log('Yes, this array includes "Cat"');
  } else if (includesCallBack(array, "Cat") === false) {
    console.log('No, this array does NOT include "Cat"');
  }
}

function includesCallBack(array, target) {
  //checks to see if they are strictly equal
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) {
      return true;
    }
  }
  return false;
}

myIncludes(array3);