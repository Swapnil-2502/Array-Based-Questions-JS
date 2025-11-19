// Input:  [1, 2, 3, 4, 5]
// Output: [5, 4, 3, 2, 1]

function ReverseArray(arr){
    
    let i=0, j=arr.length -1 
    
    while(i<j){
        let temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
        i++
        j--
    }
    
    return arr
    
    // const reverseArray = arr.reduceRight((acc,curr) => {
    //     acc.push(curr)
    //     return acc
    // },[])
    
    // return reverseArray
    // TC = O(N)
    // SC = O(N)
}

console.log(ReverseArray([1, 2, 3, 4, 5]))

//Two pointer approach is the most optimal 
//Time Complexity: O(n)
//Space Complexity: O(1)