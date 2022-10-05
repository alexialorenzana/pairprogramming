//Create a function that checks an array for prime numbers 
//then inserts any primes into a new array.     

function isPrime(element) {
for(var i = 2; i < element; i++) {
if(element % i === 0) {
return false;
}
}
return element !== 1;
}
var array = [1, 5, 17, 25, 30];
var primes = array.filter(isPrime);
console.log("array: " + array);
console.log("primes: " + primes);