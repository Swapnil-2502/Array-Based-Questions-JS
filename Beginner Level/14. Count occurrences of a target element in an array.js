// Count occurrences of a target element in an array 

const arr = [1, 2, 3, 2, 4, 2, 5];
const target = 2;

const freq = arr.filter((val) => target === val).length
console.log(freq)