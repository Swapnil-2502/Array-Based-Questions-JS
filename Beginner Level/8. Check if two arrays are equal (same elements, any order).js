
function areArraysEqual(arr1, arr2){
  if(arr1.length !== arr2.length) return false
  
  let map = []
  
  for(let num of arr1){
    map[num] = (map[num] || 0) + 1 
  }
  
  for(let num of arr2){
    if(!map[num]) return false
    map[num]--
  }
  
  return true
}

console.log(areArraysEqual([1, 2, 3], [3, 1, 1]))

//TC = O(N)
//SC = O(N)