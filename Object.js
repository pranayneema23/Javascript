let Car = {
    make : 'bru',
    model : '745i',
    year : 2018,
    getPrice : function(){
        return 5000; 
    },
    printDescription : function(){
        console.log(this.make + " " + this.model);
    }
}

Car.printDescription();
console.log(Car.year);

