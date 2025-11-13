
const arr = [8,1,2,3,4,5,2,3,4,4,5,7]
// const uniqueArray = [...new Set(arr)]
// console.log(uniqueArray.sort())
//TC = O(N)
//SC = O(N)

const seen = {}
const uniqueArray = []

for(let item of arr){
    if(!seen[item]){
        seen[item] = true
        uniqueArray.push(item)
    }
}
console.log(uniqueArray.sort())