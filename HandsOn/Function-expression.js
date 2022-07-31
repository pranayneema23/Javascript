setTimeout(function() {
    console.log('I waited 2 second.');
    },2000);

let counter = 0;
function timeout(){
    setTimeout(function(){
        console.log('Hi..'+ counter++);
        timeout();
    },2000);
}

timeout();
(function(){
    console.log('Immediately Invoked Function EXpression (IIFE)');
})();