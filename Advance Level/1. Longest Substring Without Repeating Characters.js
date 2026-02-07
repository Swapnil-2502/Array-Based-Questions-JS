function longestUniqueSubstring(str){
  let map = new Map()
  let left = 0;
  let maxLength = 0;
  let startIndex = 0;
  
  for(let right = 0; right < str.length; right++){
    let char = str[right]
    
    if(map.has(char) && map.get(char) >= left){
      left = map.get(char) + 1
    }
    
    map.set(char, right)
    
    if(right - left + 1 > maxLength){
      maxLength = right - left + 1
      startIndex = left
    }
  }
  
  return str.substring(startIndex, startIndex + maxLength)
}

// Example
const s = "abcabcedfghabab";
console.log(longestUniqueSubstring(s)); // "abcedfgh"
