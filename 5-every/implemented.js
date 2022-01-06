const array1 = [1, 30, 39, 29, 10, 13, 40];
console.log(array1.every((currentValue) => currentValue < 40)); // output: false (because not every value in array1 is less than 40)


const array2 = [100, 101, 102, 103, 104, 105];
console.log(array2.every((currentValue) => currentValue >= 100)); // output: true (because every value in array1 is greater than or equal to 100)