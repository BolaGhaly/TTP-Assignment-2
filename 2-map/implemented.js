const array1 = [2, 3, 4, 5];
console.log("array1 before map() = ", array1); //prints out array1 before using map() method
console.log("array1 * 5 = ", array1.map((x) => x * 5)); //creates a new array of array1 * 5 called "newMapArray1"
console.log("array1 after map() = ", array1); //prints out array1 after using map() method. Did NOT change because...
//we did not assign the new values of array1 * 5 to a new array.