//this file contains things about the console, window & document

//window
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

        //window.alert() -> alert something bro */

        //console
        console.warn("Warning!"); //Warning
        console.alert("Alerting"); //On the console alert
        console.time("Time");
        console.timeEnd("Time"); //must be similar to time
        console.table(["Audi", "Volvo", "Ford"]); //display arrays as tables -> works for object arrays!
        console.count(); //the console counts every iteration
        console.log("Hello world!");
          console.group();
          console.log("Hello again, this time inside a group!");
          console.groupEnd();
          console.log("and we are back."); //just a grouping
          alert("Something."); //not a console.log but this gets used a lot for some reason

          /*document.getElementById("ID")
you attr .innerHTML, .src, .style.display() to this to change something
Basically prsh nese e ki ni button e bon onlick="document.getEle...src="e ndrron imazhin"
we have onclick, onload... etc.

//getElementByClassName("name")

//getElementByTagName("tag"); -> p, div etc

//querySelector(".selector") -> .class or #ID first one that it finds

//querySelectorAll(".selector") -> all of them puts into NodeList

//you can also do const listItems = document.querySelectorAll("ul > li"); -> this means grab all direct child of ul, if you do
("ul li") it thinks oh, let me find all li that are inside a ul and put them there!

Since the list thats created is not an array but a NodeList, you can turn it in one by:
// 1. Get the NodeList
const nodeList = document.querySelectorAll("p");

// 2. Turn it into an Array
const myArr = [...nodeList];

// Now you can use array-only methods! -> cause you couldn't before with a NodeList
myArr.map(p => p.innerText);
*/


