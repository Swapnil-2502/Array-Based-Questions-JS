//Check if array is palindromic 

const arr = [1, 2, 7, 9, 1];

function solve(arr){
  let i=0, j = arr.length - 1
  
  while(i<j){
    if(arr[i] !== arr[j]) return false
    
    i++
    j--
  }
  return true
}

console.log(solve(arr))