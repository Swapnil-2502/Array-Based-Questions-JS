

function longestCommonSubsequence(str1, str2){
  
  const n = str1.length
  const m = str2.length
  
  const dp = Array.from({length: n+1}, ()=> Array(m+1).fill(0))
  
  for(let i=1;i<=n;i++){
    for(let j=1;j<=m;j++){
      if(str1[i-1] === str2[j-1]){
        dp[i][j] = 1 + dp[i-1][j-1]
      }
      else{
        dp[i][j] = Math.max(dp[i-1][j],dp[i][j-1])
      }
    }
  }
  return dp[n][m]
}

console.log(longestCommonSubsequence("abcde", "ace")); // 3
console.log(longestCommonSubsequence("abc", "def"));   // 0