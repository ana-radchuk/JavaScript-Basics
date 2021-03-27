// Task02 - Create constructor Cat reproducing it objects
// constructor should set 2 parameters - name and color
// and and use it as a object attributes 

function task02(color, name) {
    return new Cat(color, name); // don't change this code
}

function Cat(color, name){
    this.color = color;
    this.name = name;
    return this;
} 