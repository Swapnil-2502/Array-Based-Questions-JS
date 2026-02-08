// “Finding exactly K distinct characters directly is tricky. So I reduce the problem by 
// maintaining a sliding window with a frequency map. I expand the window, and when the 
// distinct count exceeds K, I shrink it. I only update my answer when the window has exactly 
// K distinct characters.”

// 🔹 Distinct ≠ Unique

// Distinct → how many different characters
// Unique → each character appears only once



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
    
    if(freqMap.size === k && right - left + 1 > maxLen){
      maxLen = right - left + 1
      startIndex = left
    }
    
  }
  return str.substring(startIndex, startIndex + maxLen)
}




function longestSubstringExactlyKDistinct(str, k) {
  if (k === 0) return "";
  return longestSubstringAtMostKDistinct(str, k);
}

console.log(
  longestSubstringExactlyKDistinct("aabacbebebe", 3)
); // "cbebebe"


// Longest Substring With Exactly K Distinct Characters
