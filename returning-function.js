var myVariable = 'I am at global scope';
var myFunction = function(){
    console.log('Me too!!');
}

function One(){
    return 'one';
}
let value = One();
console.log(value);
console.log(One());
let fxnRefrence = One;
console.log(typeof fxnRefrence);
console.log(typeof One);
console.log(fxnRefrence());
//string
//number 
//boolean
//undefined
//function    

function Two(){
    return function(){
        console.log('TWO');
    }
}

let returningFxn = Two();
returningFxn();

function Three(){
    return function(){
        return 'Three';
    }
}

console.log(Three()());



