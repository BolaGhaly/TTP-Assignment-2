const array1 = [1, 2, 4];

console.log("array1 before forEach() = "),
  array1.forEach((element) => console.log(element)); //array1 before forEach method
console.log("array1 * 2 = "),
  array1.forEach((element) => console.log(element * 2)); //multiplies each element in array1 by 2
console.log("array1 after forEach() = "),
  array1.forEach((element) => console.log(element)); //array1 did NOT change after forEach method
