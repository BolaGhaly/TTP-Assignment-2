const wordsArr2 = ["hey", "hello", "hi", "wait", "how", "what"];

function myFilter(wordsArr2) {
  for (let i = 0; i < wordsArr2.length; i++) {
    printFilteredArr(wordsArr2[i]);
  }
}

function printFilteredArr(element) {
  if (element.length > 4 === true) {
    console.log(element);
  }
}

myFilter(wordsArr2); //output: hello
