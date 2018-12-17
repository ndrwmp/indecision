// regular ES5 function
const square = function(x) {
    return x * x;
};

// regular named function
function squareFx(x) {
    return x * x;
};

console.log(square(5));
console.log(squareFx(4));

// ES6 arrow function - always anonymous (verbose syntax: 
// this version is not very useful)
const squareArrow = (x) => {
    return x * x;
};

console.log(squareArrow(9));

// arrow function - expression syntax: simplified (the useful version)
// what's after the arrow is implicitly returned
const squareArrowFx = (x) => x * x;
console.log(squareArrowFx(10));

// challenge: use arrow functions
// getFirstName
const getFirstName = (fullName) => fullName.split(' ')[0];
console.log(getFirstName("Andrew Playsted"));