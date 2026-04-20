//ver1
//html part:
<html>
<input type="text" id="userInput" placeholder="Type something...">
<button onclick="getValue()">Submit</button>
</html>
let age = prompt("How old are you?");
let nextYear = Number(age) + 1; // Convert string to number

//ver2
function getValue() {
    // 1. Find the element
    let inputField = document.getElementById("userInput");
    
    // 2. Grab the text inside it
    let data = inputField.value;
    
    alert("You typed: " + data);
}