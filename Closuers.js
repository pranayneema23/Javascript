function sayHello(name){
    return function() {
        console.log('hey ' + name);
    }
}

let pranay = sayHello('pranay');
let ram = sayHello('ram');
let abc = sayHello('abc');
let xyz = sayHello('xyz');
pranay();
ram();
abc();


console.log();