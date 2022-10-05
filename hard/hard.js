// Write a function that takes in a string and returns a boolean value whether or
// not the string contains a pair of matching brackets ({}, [], ()). These brackets 
//must be nested appropriately in order to return a true value

let matchParanthesis = (input) => {
    let braces = "{}[]()";
    let stack = [];
    for (let braket of input) {
      let braketsIndex = braces.indexOf(braket);

      if (braketsIndex % 2 === 0) {
        stack.push(braketsIndex + 1);
      } else {
        if (stack.pop() !== braketsIndex) {
          return false;
        }
      }
    }
    return stack.length === 0;
  };

  console.log(matchParanthesis("([])[{}]{(())}"));
  console.log(matchParanthesis("([])[{}]{(([))}"));

  