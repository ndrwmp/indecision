// var
// can reassign or redefine
var nameVar = "Andrew";
var nameVar = "Mark";
console.log('nameVar', nameVar);

// let
// can reassign but not redefine
let nameLet = 'Holly';
nameLet = 'Tan';
console.log('nameLet', nameLet);

// const
// cannot reassign or redefine
const nameConst = 'Playsted';
console.log('nameConst', nameConst);


// scope

function getPetName() {
    // var/let/const petName = 'Akuma';
    // return petName;
}

getPetName(); // Akuma
// console.log(petName); // undefined, petName is only within getPetName()

// we're gonna use const by default, change to let if we need to reassign, and
// use var never