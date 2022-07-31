//Array - you can either store car manifacture year, car model name, car price etc.
//OBJECT - you can define all this in single entity.Also define relation between them.can define property in same container.
//Object literals and JSON are different

let arr =  [] ;
console.log(typeof arr)
let Car = {
    make : "BMW",
    model : "7018i",
    year : 2015,
    getPrice : function(){
        return 5000;
    },
    printDescription : function(){
        console.log(this.make + ' ' + this.model);
    }
}

Car.printDescription();
console.log(Car.year);
console.log(Car['year']);
console.log(Car[1]);

var anotherCar = {};
anotherCar.whatever = 'Pranay';
console.log(anotherCar.whatever);

var a = {
    myProperty: {b : 'hi'}
};

console.log(a.myProperty.b);

var c = {
    myProperty : [
        {d: 'this'},
        {e: 'can'},
        {f: 'get'},
        {g: 'crazy'}    

    ]
}
