function calculateRectangleArea(length, width) {
  let output = length * width;
  if (length > 0 || width > 0) {
    return output;
  } 
}


function calculateTriangleArea(base, height) {
  let result = (base * height) / 2;
  if (base > 0 || height > 0) {
    return result;
  }  
}


function calculateCircleArea(radius) {
  let final = Math.PI * Math.pow(radius, 2);
  if (radius > 0) {
    return final;
  } 
}

console.log(calculateCircleArea(3.5));
console.log(calculateRectangleArea(1.5, 2.5));
console.log(calculateTriangleArea(3, 2.5));