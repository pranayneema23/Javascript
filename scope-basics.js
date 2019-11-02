let a = 'first';
var a1 = 'varFirst'
function scopeTest(){
    console.log(a);
    console.log(a1);
    let b = 'Second';
    var b1 = 'varSecond';
    if(a=='first'){
        var c1 = 'varThree';
    }
    a = 'change';
    console.log(c1);
}


scopeTest();
console.log(a1);
console.log(a);
