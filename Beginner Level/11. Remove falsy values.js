const arr = [0, 1, false, 2, "", 3, null, undefined, NaN];

const cleaned = arr.filter(Boolean);

const cleaned2 = arr.reduce((acc,val) => {
  if(val) acc.push(val)
  return acc
},[])

console.log(cleaned);
console.log(cleaned2);