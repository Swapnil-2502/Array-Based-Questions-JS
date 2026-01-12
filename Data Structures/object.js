// 🔹 What is an Object / Hash Table in JavaScript?

// A JavaScript Object is essentially a hash table (hash map) where:
// Keys → strings or symbols
// Values → any type
// Data is stored as key–value pairs

// Object Data Structure

const obj = {}

//console.log(typeof obj)

const user = {
  name: 'Swapnil',
  city: 'Nagpur',
  career: 'Software Development'
}

console.log(user)

user["car"] = 'BMW'
console.log(user)

console.log(user.name)
user.name = 'SWAPNIL'
console.log(user)

// Check Property Exists use 'in' Operator
console.log(user.hasOwnProperty('nam'))

//Get All Keys / Values / Entries
console.log(Object.keys(user))
console.log(Object.values(user))
console.log(Object.entries(user))

console.log(Object.keys(user).length)

const arr = ["a", "b", "a", "c"];
const freq = {};

for (const item of arr) {
  freq[item] = (freq[item] || 0) + 1;
}

console.log(freq);
