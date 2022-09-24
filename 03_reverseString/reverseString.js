// take string and split into an array of each character
//starting with nth position of the array, combine the array into a string in reverse order

const reverseString = function(stringInput) {
    // the 4 line code is what I originally came up with. The two lines below are single line simpler ways to output the code.
    
    let stringArray = Array.from(stringInput);
    let reverseArray = stringArray.reverse();
    let newString = reverseArray.join('');
    return newString;

    // return stringInput.split("").reverse().join("");
    // return Array.from(stringInput).reverse().join("");
    }

// Do not edit below this line
module.exports = reverseString;
