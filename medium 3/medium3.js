//Write a function that takes in two numbers and determines 
//the largest positive integer 
//that divides the two numbers without a remainder. 


function gdc_two_numbers(x,y){
  x = Math.abs(x);
  y = Math.abs(y);
  while(y) {
    var t = y;
    y = x % y;
    x = t;
  }
  return x;
}
console.log(gdc_two_numbers(79,325)); //Prints "1"