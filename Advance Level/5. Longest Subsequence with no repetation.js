

function longestUniqueSubsequence(str){
  const seen = new Set()
  let result = ""
  
  for(let char of str){
    if(!seen.has(char)){
      seen.add(char)
      result += char
    }
  }
  
  return result;
}

console.log(longestUniqueSubsequence("abcabcedfabab"));
// "abcedf"

console.log(longestUniqueSubsequence("aaaaabbbbcccdde"));
// "abcde"

function longestUniqueSubsequence(str) {
  const seen = {}; // object instead of Set
  let result = "";

  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    if (!seen[char]) {
      seen[char] = true;
      result += char;
    }
  }

  return result;
}

// Examples
console.log(longestUniqueSubsequence("abcabcedfabab"));
// "abcedf"

console.log(longestUniqueSubsequence("aaaaabbbbcccdde"));
// "abcde"
