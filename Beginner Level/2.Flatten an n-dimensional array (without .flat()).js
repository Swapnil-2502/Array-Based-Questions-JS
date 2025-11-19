//Recursive Flattering

function flattenArray(arr){
    let result = []
    
    for(let item of arr){
        if(Array.isArray(item)){
            result = result.concat(flattenArray(item))
        }
        else{
            result.push(item)
        }
    }
    
    return result;
}

//Using stack

function flattenArray(arr) {
  const stack = [...arr]; // copy input
  const result = [];

  while (stack.length) {
    const next = stack.pop();

    if (Array.isArray(next)) {
      stack.push(...next);
    } else {
      result.push(next);
    }
  }

  return result.reverse();
}

console.log(flattenArray([1, [2, [3, [4, 5]]]]));


console.log(flattenArray([1,7,2,[3,4,[5,[6]]]]).sort())