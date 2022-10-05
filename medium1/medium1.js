// Create a Function Called “vowelChecker” that takes in a single argument (x)
// and logs weather or not the input is a vowel

function vowelChecker(x) {
var input = x.toLowerCase();
if (
input === "a" ||
input ==="“e" ||
input === "i" ||
input === "o" ||
input === "u" 
){
console.log("This is a vowel");
} else {
console.log("This is not a vowel");
}
}
vowelChecker("A"); // Prints "This is a vowel"
vowelChecker("V"); // Prints "This is not a vowel"
