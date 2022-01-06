const array3 = [2, 4, 6, 8, 10, 11, 12, 13];

function mySome(array1) {
  for (let i = 0; i < array1.length; i++) {
    someCallback(array1[i]);
  }
}

//checks if there's one or more element(s) in array3 that is not even (odd) + prints out that odd element
function someCallback(element) {
  if (element % 2 !== 0) {
    console.log("Not even, element = ", element);
    //output:....
    //Not even, element =  11
    //Not even, element =  13
  }
}

mySome(array3);