# Object

## Methods for Defining JavaScript Objects
- Using an Object Literal
- Using the new Keyword
- Using an Object Constructor
- Using Object.assign()
- Using Object.create()
- Using Object.fromEntries()

### Create an empty JavaScript object using {}, and add 4 properties:
```js client
const person = {};

// Add Properties
person.firstName = "John";
person.lastName = "Doe";
person.age = 50;
person.eyeColor = "blue"; 

```

### Create an empty JavaScript object using new Object(), and add 4 properties:
```js client
// Create an Object
const person = new Object();

// Add Properties
person.firstName = "John";
person.lastName = "Doe";
person.age = 50;
person.eyeColor = "blue";

```
### Object Constructor Functions
Sometimes we need to create many objects of the same type.</br>

To create an object type we use an object constructor function.</br>

It is considered good practice to name constructor functions with an upper-case first letter.</br>
```js client
// Constructor Function for Person objects
function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
}

// Create a Person object
const myFather = new Person("John", "Doe", 50, "blue");
const myMother = new Person("Sally", "Rally", 48, "green");
const mySister = new Person("Anna", "Rally", 18, "green");
const mySelf = new Person("Johnny", "Rally", 22, "green");
```

### Property Default Values
A value given to a property will be a default value for all objects created by the constructor:
```js client
function Person(first, last, age, eyecolor) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eyecolor;
  this.nationality = "English";
}
```

### JavaScript Object Methods
JavaScript Object Methods can be grouped into:</br>

- General Methods
- Property Management Methods
- Object Protection Methods
```js client
// Copies properties from a source object to a target object
Object.assign(target, source)

// Creates an object from an existing object
Object.create(object)

// Returns an array of the key/value pairs of an object
Object.entries(object)

// Creates an object from a list of keys/values
Object.fromEntries()

// Returns an array of the keys of an object
Object.keys(object)

// Returns an array of the property values of an object
Object.values(object)

// Groups object elements according to a function
Object.groupBy(object, callback)
```
