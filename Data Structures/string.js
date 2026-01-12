// 🔹 What is a String in JavaScript?

// A String is an immutable sequence of characters.
// Indexed (0-based)
// Immutable (cannot be changed in place)
// UTF-16 encoded
// Primitive type (mostly)

// String Data Structure

const s1 = "Hello";
const s2 = 'World';
const s3 = `Hello World`; // template literal

console.log(typeof "Hello");           // "string"
console.log(typeof new String("Hi"));  // "object"

console.log(s1[4])
console.log(s2.charAt(2))

console.log("hello".includes("ell"))
console.log("hello".startsWith("he"))
console.log("hello".indexOf("l"))

let arrays2 = s2.split('')
console.log(arrays2)
console.log(arrays2.join(''))