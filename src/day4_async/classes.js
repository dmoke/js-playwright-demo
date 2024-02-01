// Class syntax
class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} makes a sound.`);
    }
}

// Constructor function as a class
function AnimalFunction(name) {
    this.name = name;
}

AnimalFunction.prototype.speak = function () {
    console.log(`${this.name} makes a sound.`);
};

// Class expression
const Bird = class {
    constructor(name) {
        this.name = name;
    }

    fly() {
        console.log(`${this.name} flies.`);
    }
};

// Child class extending from Animal class
class Dog extends Animal {
    constructor(name, breed) {
        super(name); // Call the parent class constructor with super()
        this.breed = breed;
    }

    bark() {
        console.log(`${this.name} barks.`);
    }
}

// Creating instances of each class and calling their methods
const dog = new Dog('Dog', 'Labrador');
dog.speak(); // Output: Dog makes a sound. (Inherited from Animal class)
dog.bark(); // Output: Dog barks. (Defined in Dog class)

const animalFunction = new AnimalFunction('Cat');
animalFunction.speak(); // Output: Cat makes a sound. (Defined in AnimalFunction prototype)

const bird = new Bird('Sparrow');
bird.fly(); // Output: Sparrow flies. (Defined in Bird class)
