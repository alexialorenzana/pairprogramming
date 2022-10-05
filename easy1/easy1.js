// Write a JavaScript function that takes in a random array 
//and outputs two new arrays of odd numbers and even numbers.
// Example:
// Input: [2, 4, 7, 11, 15, 16]
// Output: Even numbers: [2, 4, 16]
// 	  Odd Numbers: [7, 11, 15]



let array = [1,2,3,4,5,6]; 
 const even= [];
 const odd= [];

 array.forEach(number =>{
    if (number % 2 === 0){
        even.push(number)
    }
    else{
       odd.push(number);
    }
 });

 console.log(even); // Prints [ 2, 4, 6 ]
 console.log (odd); // Prints [ 1, 3, 5 ]
