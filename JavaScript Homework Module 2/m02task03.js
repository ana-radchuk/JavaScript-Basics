// Task03 - create 2 functions: task03a and task03b
// First function should pass parameter and divide it on 2
// result function should return.
// Second function should call first function and 
// return it result concat with string "result - "
//
// For example: you get in second function a number 6
// Result of call both function shoul be like "result - 3"

function task03a(a){
    var result = a / 2;
    return result;
}

function task03b(){
    var b = task03a(a);
    return "result - " + b;
}
