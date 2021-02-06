// Task02 - create a function with name task02
// function pass array and replace each negative number on 0 and other numbers on 1
// for example: 
// if function take array [-1, 8, -3, 0, 7] it should return [0, 1, 0, 1, 1]

function task02(params) {
  for(i = 0; i < params.length; i++){
        if(params[i] < 0){
            params[i] = 0
        } else if(params[i] >= 0){
            params[i] = 1;
        }
    }
    console.log(params);
}

var array = [ -3, -5, 8, 2, 0, 2 ]; 
task02(array);