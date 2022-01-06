const array1 = [1, 2, 3, 4, 5];
console.log(array1.reduce((a, b) => a + b)); //output: 15 -> (1 + 2 + 3 + 4 + 5)
console.log(array1.reduce((a, b) => a + b, 15)); //output: 30 -> (15 + 1 + 2 + 3 + 4 + 5)