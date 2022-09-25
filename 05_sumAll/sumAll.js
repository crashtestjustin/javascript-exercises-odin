// define a variable to hold the sum
// start a loop at the intial parameter value
// add 1 to the value and restart the loop - adding the next value to the previously declared variable (+=)
// continue loop until we reach the second integer parameter
// exit loop and return the sum variable from the loop

const sumAll = function(numOne, numTwo) {
    let totalOfNums = 0;
    if (numOne < 0 || numTwo < 0) { 
        return 'ERROR';
    } else if (typeof numOne != 'number' || typeof numTwo != 'number') {
        return 'ERROR';
    }
    if (numOne < numTwo) {
    for (let i = numOne; i <= numTwo; i++) {
        totalOfNums += i;
    }
} else {
    for (let i = numOne; i >= numTwo; i--) {
        totalOfNums += i;
    }
}
    return totalOfNums;
};

// Do not edit below this line
module.exports = sumAll;
