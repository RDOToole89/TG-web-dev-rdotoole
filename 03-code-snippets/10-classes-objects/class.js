// Key <=> value pairs
const car = {
  brand: 'Honda',
  color: 'red',
  BuildYear: 1983,
  honk() {
    console.log('HONK HONK!');
  },
};

car.honk();

// Classes => bluePrint of an object
// Everything declared with this in the constructor becomes a property on the object
// Variables declared inside the constructor are remove from memory as soon as the
// Constructor has run.

class PersonClass {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    console.log(`${this.name} says hi!`);
  }
}

const miki = new PersonClass('Miki', 40);
miki.sayHello();

class Car {
  // Constructor function
  constructor(brand, buildyear, edition) {
    this.brand = brand;
    this.buildyear = buildyear;
    this.edition = 0;
  }

  // class method
  honk() {
    console.log('toet toet');
    return `toet toet from ${this.brand}. I was made in ${this.buildyear}`;
  }

  drive() {
    console.log(`I am driving, I am a ${this.brand}!`);
    return `I am driving, I am a ${this.brand}!`;
  }

  // Getter & Setters

  get getEdition() {
    return this.edition;
  }

  set setEdtion(val) {
    this.edition = val;
  }
}

// Ferrari extends Car because we want to use the properties and methods of Car
// We call super() in the constructor which references the Car or Parent's constructor.
class Ferrari extends Car {
  constructor(brand, buildYear, model) {
    super(brand, buildYear);

    // // console.log(super(brand, buildYear));
    this.model = model;
  }

  // Polymorphism => changing the methods on the child class
  honk() {
    console.log(`Toet toet from ${this.brand} ${this.model}!`);
    return `toet toet from ${this.brand} ${this.model}. I was made in ${this.buildyear}`;
  }
}

const fastCar = new Ferrari('Ferrari', 1972, 'enzo');
console.log('const fastCar; is an instance of the Ferrari class', fastCar);
console.log('fastCar.honk()', fastCar.honk());
console.log('fastCar.drive()', fastCar.drive());

console.log('fastCar Edition Getter => fastCar.edition', fastCar.edition);
console.log('fastCar Edition Setter => fastCar.edition = 10', (fastCar.edition = 10));
// Inheritance
// Instance van de Class Car
const honda = new Car('Honda', 1976);
console.log('HONDA => ', honda);
honda.honk();

const susana = {
  name: 'Susana',
  age: '10',
  sayHello() {
    console.log(`${this.name} says hi!`);
  },
};

const roibin = {
  name: 'Roibin',
  age: 32,
  sayHello() {
    console.log(`${this.name} says hi!`);
  },
};

susana.sayHello();
roibin.sayHello();

// DRY PRINCIPLE DONT REPEAT YOURSELF

// Creates a person constructor function
function Person(name, age) {
  this.name = name;
  this.age = age;
}

// Adding a method to the prototype of the constructor function Person => this will be shared
// among all instances of the Person class
Person.prototype.sayHi = function () {
  console.log(`${this.name} says hi`);
};

const roibinotoole = new Person('Roibin', 32);
console.log(roibinotoole);
roibinotoole.sayHi();

console.log('THE PERSON CONSTRUCTOR PROTOTYPE', Person.prototype);

let obj = {};
console.log(obj.constructor === Object);
console.log(obj.constructor === Object.prototype.constructor);

// Inherticance with JavaScript prototypes and constructor functions

// The prototype is just an object, while the constructor is a pointer to the function
// that created the object. A constructor is a pointer. It points to the function that created the
// point from which you are retrieving the constructor from.

// Extending a class
function Teacher(name, age) {
  // We call the parent constructor
  Person.call(this, name, age);
  console.log('LOGGING THIS FROM INSIDE TEACHER CONSTRUCTOR', this);
  console.log(
    'LOGGING PROTOTYPE FROM INSIDE THE THIS IN THE TEACHER CONSTRUCTOR',
    this.constructor
  );
}

console.log('Person.prototype', Person.prototype);
// Setting the prototype of Teacher to the prototype
Teacher.prototype = Object.create(Person.prototype);

console.log('TEACHER CONSTRUCTOR FUNCTION', Teacher);

console.log('TEACHER CONSTRUCTOR FUNCTION', Teacher.prototype);
console.log('TEACHER PROTOTYPE CONSTRUCTOR', Teacher.prototype.constructor);

const jens = new Teacher('Jens', 29);
console.log('jens.constructor', jens.constructor);
console.log('jens.__proto', jens.__proto__);

// __proto__ is an instance of the class / constructor prototype
console.log(jens.__proto__ === Teacher.prototype);
