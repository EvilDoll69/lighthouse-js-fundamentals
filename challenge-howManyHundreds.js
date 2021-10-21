const howManyHundreds = function(num) {
  let output = num / 100;
  return Math.trunc(output);

}

console.log(howManyHundreds(80));

// second option
function howManyHundreds(num) {
  return num % 100 === 0 ? num / 100 : (num - (num % 100)) / 100;
}
