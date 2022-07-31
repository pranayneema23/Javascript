function X() {
    //using var things goes wrong
    // for(var i=1; i<=5; i++){
    //     setTimeout(function() {
    //         console.log(i);
    //     },i * 1000);
    // }
    
    //use let solve problem.
    // for(let i=1; i<=5; i++){
    //     setTimeout(function() {
    //         console.log(i);
    //     },i * 1000);
    // }

    //Alternative: Using clouser.
    for(var i=1; i<=5; i++){
        function close(x) {
            setTimeout(function() {
                console.log(x);
            },x * 1000);
        }
        close(i);
    }
    console.log("Namaste JS");
}

X();