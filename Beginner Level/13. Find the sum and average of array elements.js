//Find the sum and average of array elements 

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const Sum = nums.reduce((acc,val) => {
  console.log({'acc': acc, 'val': val})
  return acc + val
},0)

const average = Sum / nums.length

console.log(Sum)
console.log(average)