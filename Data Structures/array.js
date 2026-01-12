// 🔹 What is an Array in JavaScript?

// An Array is an ordered, indexed, dynamic collection of elements.
// Stores any data type
// Indexed (0-based)
// Can grow/shrink dynamically
// Internally optimized but not a pure contiguous array like C/C++

// Array Data Structure

// Create an Array
const arr = [];
const nums = [1, 2, 3];
const mixed = [1, "a", true, null];

//length of Array
console.log(nums.length)

// Add at end
nums.push(89)
console.log(nums)

// Add at front
nums.unshift(90)
console.log(nums)

// Remove elements
// From end
nums.pop()
// From front
nums.shift()
console.log(nums)

// Splice Method
//Insert / Remove at Any Position → splice
//arr.splice(startIndex, deleteCount, ...items);
let o = nums.splice(1,0,69,70,71) // returns an array of deleted elements
console.log(o)
console.log(nums)

//Search Operations
console.log(nums.includes(1))
console.log(nums.find((x) => x === 70))
console.log(nums.indexOf(70))


// Sorting
console.log(nums.sort((a,b) => a-b))

// Copy array
let copy = [...nums]
console.log(copy)

let copy2 = nums.slice()
console.log(copy2)


