// Task01 - create a function with name task01
// function pass three numbers and multiples those that less than zero
// if all numbers are positive function should return undefined
// for example: 
// if function take 3, -2 and -5 it should return 10

function task01(a, b, c){
    var array = [a, b, c];
    p = 1;
    for(i = 0; i < array.length; i++){       
        if(array[i] < 0){
           p *= array[i]
        } 
    }
    console.log(p);
}

