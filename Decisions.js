var count = 3;
if(count == 4){
    console.log('Count  is 4');
}
else if(count > 4 ){
    console.log('Count is greater then 4');
}
else if(count < 4 ){
    console.log('Count is smaller then 4');
}
else {
    console.log('Count is not initilised properly');
}

let hero = 'superman'
switch(hero.toLowerCase()){
    case 'superman':
        console.log('Super strength');
        console.log('x-ray vision');
        break;
    case 'batman':
        console.log('Inteligence');
        console.log('Fighting skills');
        break;
    default:
    console.log('Not a hero we like');
}

//ternary operater 
let a = 1,b = '1';
let result = (a == b ) ? 'equal' : 'Inequal';
let result1 = (a === b ) ? 'equal' : 'Inequal';
let result2  = (a != b ) ? 'not equal' : 'equal' ;
console.log(result);
console.log(result1);
console.log(result2);