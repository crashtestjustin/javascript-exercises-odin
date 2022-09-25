const removeFromArray = function(inputArray, ...removeValue) {
   return inputArray.filter(i => !removeValue.includes(i));

}

// Do not edit below this line
module.exports = removeFromArray;
