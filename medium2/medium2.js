//Create a function that accepts two strings, then determines whether 
//or not the first string is an anagram of the second string by returning a boolean. 

function isStringAnagram(x, y) {
     // Checks the length of the strings 
     if(x.length !== y.length){
         return false;
      }
     
      let string1 = x.split('').sort().join('');
     let string2 = y.split('').sort().join('');
     
    // Compares the strings 
      if(string1 === string2){
       return true;
     } else { 
       return false;
     }
}
console.log(isStringAnagram("word", "world")); //Prints "false"


