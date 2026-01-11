const data = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];

function solve(data){
  let map = []
  
  for(let item of data){
    map[item] = (map[item] || 0) + 1
  }
  
  return map
}

console.log(solve(data))