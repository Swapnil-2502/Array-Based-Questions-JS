// What is a Set in JavaScript?

// A Set is a built-in data structure that stores unique values only.

// No duplicate values

// Values can be of any type

// Set Data Structure

const set  =  new Set()
set.add(5).add(7).add(9).add(5)

const array = [...set]
console.log(array)

console.log(set)
console.log(set.size)

// Check Value Exists → has(value)
console.log(set.has(5))
console.log(set.has(6))

//Delete Value → delete(value)
console.log(set.delete(5))
console.log(set)

// Remove All Values → clear()
console.log(set.clear())
console.log(set)
console.log(typeof undefined) // undefined