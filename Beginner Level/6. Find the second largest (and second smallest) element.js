let array = [4,2,1,7,4,9]
//second largest = 7
// second smallest = 2


function solve(array){
  let largest = array[0]
  let secondLarget = array[0]
  
  let smallest = array[0]
  let secondSmallest = array[0]
  
  for(let i=0;i<array.length;i++){
    if(array[i] > largest){
      secondLarget = largest
      largest = array[i]
    }
    else if(array[i] > secondLarget && array[i] < largest){
      secondLarget = array[i]
    }
    
    if(array[i] < smallest){
      secondSmallest = smallest
      smallest = array[i]
    }
    else if(array[i] < secondSmallest && array[i] > smallest){
      secondSmallest = array[i]
    }
  }
  
  return {"secondLarget" : secondLarget, "secondSmallest": secondSmallest}
}

console.log(solve(array))

console.log(array.sort())

//TC = O(N)
//SC = O(1)