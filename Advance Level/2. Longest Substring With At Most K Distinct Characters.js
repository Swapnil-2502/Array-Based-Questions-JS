

function longestSubstringAtMostKDistinct(str,k){
  if(k===0) return ""
  
  let left = 0
  let maxLen = 0
  let startIndex = 0
  
  let freqMap = new Map()
  
  for(let right=0; right<str.length; right++){
    let char = str[right]
    
    freqMap.set(char, (freqMap.get(char) || 0) + 1)
    
    while(freqMap.size > k){
      let leftChar = str[left]
      
      freqMap.set(leftChar, freqMap.get(leftChar) - 1)
      
      if(freqMap.get(leftChar) === 0){
        freqMap.delete(leftChar)
      }
      
      left++
    }
    
    if(right - left + 1 > maxLen){
      maxLen = right - left + 1
      startIndex = left
    }
    
  }
  return str.substring(startIndex, startIndex + maxLen)
}




console.log(longestSubstringAtMostKDistinct("eceba", 2)); // "ece"