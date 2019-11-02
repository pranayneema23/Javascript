function Car(maker,model,year){
    this.maker = maker;
    this.model = model;
    this.year = year;
}

let myCar = new Car('BMW','45li',2014);
//In JS use new keyword with any function makes Constructur 
//NEW keyword create empty object and then pass to this object of actual call
console.log(myCar);

function MyFunction(){ 
    console.log('I am a simple function ');
}

let myFunction = new MyFunction();// Creating new empty object and calling MyFunction
console.log(typeof myFunction);
//You can't really do anything with this particular 
//object ... it's certainly NOT a function
//reference anymore

// myFunction();  //This will give error

