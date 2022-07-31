//Use let insted of var
//var is global scope
//Use moduleer design pattern

var counter = (function(){
    //Private Stuff
    let count = 0;
    function print(message){
        console.log(message + '...' + count);
    }

    //return an object
    return{
        get : function(){
            return count;
        },
        set : function(value){
            count = value; 
        },
        increment : function() {
            count +=1;
            print('After Increment: ')
        },
        reset : function(){
            print('Before reset: ')
            count = 0;
            print('After reset: ')
        }
    }
})();

//console.log(counter.count);
counter.increment();    
counter.increment();
counter.increment();

//Accidently created a closure
//console.log(counter.value);

counter.set(7);
console.log(counter.get());
counter.reset();