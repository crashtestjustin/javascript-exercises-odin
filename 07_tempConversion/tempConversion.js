const ftoc = function(inputF) {
  let celciusOut = (inputF - 32) * (5/9)
  return Math.round(celciusOut * 10) / 10;
};

const ctof = function(inputC) {
  let farenHeitOut = (inputC * (9/5)) + 32;
 return Math.round(farenHeitOut * 10) / 10;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
