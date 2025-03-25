# Object Prototypes

All JavaScript objects inherit properties and methods from a prototype.</br>

In the previous chapter we learned how to use an object constructor:
```js client
function Person(first, last, age, eyecolor) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eyecolor;
}

const myFather = new Person("John", "Doe", 50, "blue");
const myMother = new Person("Sally", "Rally", 48, "green");
```
We also learned that you can not add a new property to an existing object constructor:
```js client
Person.nationality = "English";   //undefine
```
To add a new property to a constructor, you must add it to the constructor function:
```js client
function Person(first, last, age, eyecolor) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eyecolor;
  this.nationality = "English";
}
```
## Prototype Inheritance
All JavaScript objects inherit properties and methods from a prototype:

- `Date` objects inherit from `Date.prototype`.
- `Array` objects inherit from `Array.prototype`.
- `Person` objects inherit from `Person.prototype`.
The Object.prototype is on the top of the prototype inheritance chain:</br>

`Date objects`, `Array objects`, and `Person objects` inherit from `Object.prototype.`
## Adding Properties and Methods to Objects
Sometimes you want to add new properties (or methods) to all existing objects of a given type.</br>

Sometimes you want to add new properties (or methods) to an object constructor.
## Using the prototype Property
The JavaScript`` prototype ``property allows you to add new properties to object constructors:
```js client
function Person(first, last, age, eyecolor) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eyecolor;
}

Person.prototype.nationality = "English";
```
The JavaScript`` prototype`` property also allows you to add new methods to objects constructors:

```js client
function Person(first, last, age, eyecolor) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eyecolor;
}

Person.prototype.name = function() {
  return this.firstName + " " + this.lastName;
};
```


