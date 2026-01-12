let map = new Map()

console.log(map)

map.set('name','Swapnil Hajare') // to put data inside map
map.set('net Worth', 6000)

console.log(map)
console.log(map.size) // length doesn't work use map.size

console.log(map.get('name')) // to read values from map
console.log(map.get('age'))

console.log(map.has('name')) // Check Key Exists returns true/false
console.log(map.has('age'))

//Delete Entry → delete(key)
console.log(map.delete('name')); // true
console.log(map.delete('age'));  // false

console.log(map)

map.set('Car', 'BMW')
//Iteration over Map
for(let [key, value] of map){
  console.log({'key': key, 'value' : value})
}

//Convert map to Array
let array = [...map]
console.log(array)


//Frequency Counting using map
const arr = ['a', 'b', 'a', 'c'];
const freq = new Map();

for (const item of arr) {
  freq.set(item, (freq.get(item) || 0) + 1);
}
