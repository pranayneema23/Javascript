for(let i=0;i<10;i++){
    console.log(i);
}

let a = [1,2,3,4,5,6,7,8,9,10];

for (i = 0;i < a.length ; i++){
    console.log(a[i]);
}

//JS builtin Code snippit 
// for (let index = 0; index < array.length; index++) {
//     const element = array[int];
    
// }

let x = 1;
while(x < 10){
    console.log(x++);
    if(x == 7)
        continue;
}

do{
    x = 11;
    console.log("This is DO.");
}while(x<10)
