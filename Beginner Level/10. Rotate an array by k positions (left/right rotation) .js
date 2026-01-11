// Rotate an array by k positions (left/right rotation) 

function helper(arr,start, end){
  while(start < end){
    [arr[start], arr[end]] = [arr[end], arr[start]]
    start++
    end--
  }
}

function leftRotate(arr, k){
  k = k % arr.length
  
  helper(arr,0,k-1)
  helper(arr, k, arr.length - 1)
  helper(arr, 0, arr.length - 1)
}

let arr = [1, 2, 3, 4, 5]
let k = 2

leftRotate(arr,k)
console.log(arr)

//TC = O(n)
//SC = O(1)