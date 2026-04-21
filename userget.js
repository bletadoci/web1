//ver1
let age = prompt("How old are you?");
let nextYear = Number(age) + 1; // Convert string to number

//ver2
//html part:
/*
<html>
    <script src="script.js" defer></script>
<input type="text" id="userInput" placeholder="Type something...">
<button onclick="getValue()">Submit</button>
</html>*/
function getValue() {
    // 1. Find the element
    let inputField = document.getElementById("userInput");
    
    // 2. Grab the text inside it
    let data = inputField.value;
    
    alert("You typed: " + data);
}

let input = prompt("Enter names separated by commas (e.g. Ben, Ana, Leo):");

// .split(",") takes the string and cuts it everywhere it sees a comma
let namesArray = input.split(","); 

console.log(namesArray); // Output: ["Ben", " Ana", " Leo"]
/*Pro Tip: Users often add accidental spaces. You can clean them up using map and trim:
let cleanArray = input.split(",").map(item => item.trim());*/

//Number.isInt(), Number.parseInt -> from string to int