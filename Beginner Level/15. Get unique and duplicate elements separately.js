// Get unique and duplicate elements separately 
const arr = [1, 2, 3, 2, 4, 5, 1, 6, 3];

function solve(arr){
  let duplicate = []
  let unique = []
  let freq = []
  
  for(let num of arr){
    freq[num] = (freq[num] || 0) + 1
  }
  
  for(let key in freq){
    console.log(key)
    if(freq[key] === 1) unique.push(key)
    else duplicate.push(key)
  }
  
  return {'unique': unique, 'duplicate': duplicate}
}

console.log(solve(arr))