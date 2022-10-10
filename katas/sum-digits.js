/*
  The function sumDigits should take a number (not necessarily an integer) and return the total of its digits.
  E.g.
  sumDigits(99)
    --> 18
  sumDigits(10.5)
    --> 6
*/

const { numberLiteralTypeAnnotation } = require("@babel/types");

function sumDigits(num) {
  let sum = 0;
  const digits = num.toString().split("")
  const realDigits = digits.map(Number);


  for(let i = 0; i < realDigits.length; i++) {
    if(isNaN(realDigits[i])) {}
    else {
      sum += realDigits[i]}
    }
  
  return sum
  
}

module.exports = sumDigits;
