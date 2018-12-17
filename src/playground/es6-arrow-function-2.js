// arguments object - no longer bound with arrow functions

const add = (a, b) => {
    // console.log(arguments); // undefined in arrow functions
    return a + b;
};
console.log(add(55, 1));

// this keyword - no longer bound with arrow functions

const user = {
    name: "Andrew",
    cities: ['Alameda', 'Santa Cruz', 'San Diego', 'Los Angeles'],
    printPlacesLived() {
        // use map() to transform elements within an array without changing
        // the original array - cities is unchanged
        return this.cities.map((city) => this.name + " has lived in " + city + "!");

        // use forEach to print each element in an array
        // this.cities.forEach((city) => {
        //     console.log(this.name + " has lived in " + city);
        // });
    }
};
console.log(user.printPlacesLived());


// Challenge

const multiplier = {
    // numbers - array of numbers
    numbers: [1, 2, 3],
    // multiplyBy - single number
    multiplyBy: 2,
    // multiply - return a new array where the numbers have been multiplied using map
    multiply() {
        return this.numbers.map((number) => number * this.multiplyBy);
    }
};

console.log(multiplier.numbers);
console.log(multiplier.multiply());