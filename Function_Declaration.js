function SayHello(name){
    console.log("___________________________")
    console.log(name);
    console.log("---------------------------");
}

SayHello("Pranay");
let a = SayHello;
a("Ritika"); 

function calculateTax(amount){
    let result = amount * 0.0825
    return result; 
}

console.log(calculateTax(100));