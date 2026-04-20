//void functions
function show(){
    console.log("Hello.")
}
show(); //calling of void funct

//functions
function get(get){
    return get;
}

//arrow functions/ghost function
const ghost = (value) => {return value;}
const add = (a, b) => {
    return a + b;
};
//callback
const getghost = ghost(5);



const car = {
    brand: "Tesla",
    // This is a method
    drive: function() {
        console.log("Vroom!");
    }
};

car.drive(); // Calling the method

//iife immediately invoked function
(function(){
    console.log("This runs immediately!");
})();

//defined in loops:
//foreach() 
//filter()
//reduce()
