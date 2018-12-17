class Person {
    constructor(name = "Default Name", age = 0) {
        this.name = name;
        this.age = age;
    }

    getGreeting() {
        // return "Hi, I'm " + this.name;
        return `Hi. I am ${this.name}!`;
    }

    getDescription() {
        // return this.name + " is " + this.age + " years old.";
        return `${this.name} is ${this.age} years old.`
    }
}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }

    hasMajor() {
        return !!this.major;
    }

    getDescription() {
        let description = super.getDescription();
        if (this.hasMajor())
            description += ` Their major is ${this.major}.`;
        return description
    }
}

class Traveler extends Person {
    constructor(name, age, homelocation) {
        super(name, age);
        this.homelocation = homelocation;
    }

    getGreeting() {
        let greeting = super.getGreeting();
        if (this.homelocation)
            greeting += ` I'm visiting from ${this.homelocation}.`;
        return greeting;
    }
}

const me = new Student("Andrew Playsted", 23, "Human Biology");
const other = new Student();
console.log(me.getGreeting());
console.log(other.getDescription());
console.log(me.hasMajor());
console.log(other.hasMajor());

const me2 = new Traveler("Andrew Playsted", 24, "San Francisco");
console.log(me2.getGreeting());

const other2 = new Traveler(undefined, undefined, "Nowhere");
console.log(other2.getGreeting());