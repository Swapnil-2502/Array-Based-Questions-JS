// Input:  [2, 5, 1, 9, 3]
// Output: max = 9, min = 1

function MaxAndMin(arr){
    let min = arr[0]
    let max = arr[0]
    
    for(let i=1;i<arr.length;i++){
        if(arr[i] > max){
            max = arr[i]
        }
        if(arr[i] < min){
            min = arr[i]
        }
    }
    
    return {min,max}
}

console.log(MaxAndMin([2, 5, 1, 9, 3]))

//Most Optimal Solution
// Time Complexity: O(n)
// Space Complexity: O(1)