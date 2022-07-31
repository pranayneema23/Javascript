//In JS object are the focus
//In JS original object serve as a prototype for the new object 
//and new object is chain 
//Focus on relation b/w object
//Object linking to other object --> oloo
let originalCar = {
    make : 'bmw',
    model : '745li',
    year : 2016
};

let newCar = Object.create(originalCar);
console.log(newCar.make);  
console.log(newCar.hasOwnProperty('make'));
newCar.make = 'Audi'
console.log(newCar.make);  
console.log(newCar.hasOwnProperty('make'));

console.log(Object.getPrototypeOf(newCar));

let myPrototype = Object.getPrototypeOf(newCar);    
console.log(myPrototype.make);

originalCar.doors = 4;
console.log(newCar.doors);

console.log(originalCar.hasOwnProperty('doors'));
console.log(newCar.hasOwnProperty('doors'));
