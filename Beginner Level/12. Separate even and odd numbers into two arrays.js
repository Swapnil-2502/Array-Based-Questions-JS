const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function solve(arr){
  let even = []
  let odd = []
  
  for(let num of nums){
    if(num % 2 === 0) even.push(num)
    else odd.push(num)
  }
  
  return {'Even Elements': even, 'Odd Elements': odd }
}

console.log(solve(nums))

//TC = O(N)
//SC = O(N)