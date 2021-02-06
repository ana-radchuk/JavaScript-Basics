// Task03 - create a function with name task03
// function pass array and retun hash with min amd max values from array
// for example: 
// if function take [-1, 8, -3, 0, 7] it should return {min: -3, max: 8}

function task03(params){
    var a = Math.min.apply(Math, array);
    var b = Math.max.apply(Math, array);

    var numbers = {min: a, max: b};
    console.log(numbers);
}

var array = [ -3, -5, 8, 2, 0, 2 ]; 
task03(array);
