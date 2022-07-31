
/*
#####Variable Scope in JS####
-Global Scope - variable not define inside any function 
-Functional scope - var
-Statement level Scope - let,const

#Hoisting only works with var.
*/

let a = 'first'; //Global scope
var a1 = 'varFirst'; //Global scope
function scopeTest(){
    console.log(a);//first
    console.log(a1);//varFirst
    console.log(b1);//undefine because of hosting
    console.log(b);//undefine accessable bcoz of block level
    console.log(c1);//undefine because of hosting
    //console.log(c);//error (no hosting with let)
    console.log(ct);////undefine accessable bcoz of block level
    let b = 'Second';//block level
    const ct = 'This is constant';
    var b1 = 'varSecond';//functional scop(Hoisting)
    if(a=='first'){
        let c = 'InsideIfBlock';
        var c1 = 'varThree';
    }
    a = 'change';
    //console.log(c);//Error bcoz of block scope of let
    console.log(c1);//varThree
    console.log(ct);//This is constant
}


scopeTest();
console.log(a1);//varFirst
console.log(a);//change
//console.log(ct);//Error -ct is block level scope
//console.log(b1);//Error -b1 is functional scope 
