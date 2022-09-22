const repeatString = function(stringInut, numOfTimes) {
    if (numOfTimes < 0){return 'ERROR';}
    var stringOutput = '';
    for (let i = 0; i < numOfTimes; i++) {
        stringOutput += stringInut;
    }    
    return stringOutput;
};

repeatString ();
// Do not edit below this line
module.exports = repeatString;
