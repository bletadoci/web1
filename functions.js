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

//why do we open window function?
let myWindow;

            function openWin() { //declare
            myWindow = window.open("", "myWindow", "width=400,height=200"); /*create an open window -> window.open(URL, target(where), features)
            if URL empty then opens a blank page, if target custom reuses existing window with that name (or u can do _blank new tab)= or 
            _self for same window), features are width, height etc*/
            }

            function closeWin() {
            if (myWindow) { //this is the same thing as in PHP, if the attr has something inside it it is true
                myWindow.close();
            }
            }

            function checkWin() { //
            let text = "";
            if (!myWindow) { //same thing if the first function was never called, myWindow is empty and false so !myWindow
            text = "It has never been opened!";
            } else {
            if (myWindow.closed) { 
                text = "It is closed.";
            } else {
                text = "It is open.";
            }
            }
            document.getElementById("demo").innerHTML = text; //.innerHTML changes the text inside the html attr with that id
        }

        //myWindow.document.write() -> nese don me shkru diqka mrena

        //window.alert() -> alert something bro
        //munesh me pas edhe ncosole alert: console.alert

    //Constructor functions ig bro
        /*
        <!DOCTYPE html>
<html>
<body>

<h2>JavaScript Object Constructors</h2>

<p id="demo"></p>
<p id="demo1"></p>

<script>
function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
}

const myFather = new Person("John", "Doe", 50, "blue");
const myMother = new Person("Sally", "Rally", 48, "green");

document.getElementById("demo").innerHTML =
"My father is " + myFather.age + "."; //te inner html munesh me e bo + edhe , si nconsole log HAHA

document.getElementById("demo1").innerHTML =
"My mother is " + myMother.age + ".";
</script>

</body>
</html> */
