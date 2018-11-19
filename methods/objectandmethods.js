console.log("Welcome to the program.");
// code that is written within the main/global scope 
// of a program is excuted automatically

var hotel = {
    name: "CareerDevs Hotel",
    
    doThisThing: function(){ // this in a method (a function within an object)
        // line of js code
        // more lines of code
        console.log("Welcome to the Method"); 
        // local scope to the method and also local to the object
    }
};

console.log("Welcome to the middle of the program");

function doThisThing(){
    // line of js code
    // more lines of code
    console.log("Welcome to the Function") // local scope to the function
}


console.log("Welcome to END of the program");