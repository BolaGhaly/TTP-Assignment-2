//checks if there's an element in array1 that is over 10
const array1 = [1, 4, 6, 8, 10];
console.log(array1.some((element) => element >= 10)); //output: true

//checks if there's an element in array2 that is even
const array2 = [1, 3, 5, 7];
console.log(array2.some((element) => element % 2 === 0)); //output: false