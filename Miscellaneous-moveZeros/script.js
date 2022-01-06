let nums = [0, 1, 0, 3, 12]; // "Input"
let myArray = [0, 1, 0, 2, 0, 3, 0, 4, 0];
function moveZeros(nums) {
  let zeroCounter = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      zeroCounter++;
      nums.splice(i, 1);
    }
  }
  for (let i = 0; i < zeroCounter; i++) {
    nums.push(0);
  }
}

console.log("nums array before calling moveZeros(nums) function =", nums); //Output: [ 0, 1, 0, 3, 12 ]
moveZeros(nums);
console.log("nums array after calling moveZeros(nums) function =", nums); //Output: [ 1, 3, 12, 0, 0 ]

console.log("nums array before calling moveZeros(myArray) function =", myArray); //Output: [ 0, 1, 0, 2, 0, 3, 0, 4, 0 ]
moveZeros(myArray);
console.log("nums array after calling moveZeros(myArray) function =", myArray); //Output: [ 1, 2, 3, 4, 0, 0, 0, 0, 0 ]
