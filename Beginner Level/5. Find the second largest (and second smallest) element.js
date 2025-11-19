// Input:  [10, 5, 20, 8, 20,19]
// Output: secondLargest = 10, secondSmallest = 8

function SecondLargestAndSmallest(arr){
    let max = -Infinity
    let secondmax = -Infinity
    
    for(let i=0;i<arr.length;i++){
        if(arr[i] > max){
            secondmax = max
            max = arr[i]
        }
        else if(arr[i] > secondmax && arr[i] !== max){
            secondmax = arr[i]
        }
    }
    
    return {secondmax}
}

console.log(SecondLargestAndSmallest([10, 5, 20, 8, 20,19]))
//Most Optimal Solution
// Time Complexity: O(n)
// Space Complexity: O(1)
