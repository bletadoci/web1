//this file has stringify, parse, arrays, forloops specific, hashmaps and some very random things

//no difference between "" and ''

//you add js on a <script src="javascript.js"></script>

var  oldName = "avoid this"   // function-scoped, hoisted - bon
let   score   = 42            // block-scoped, reassignable - sbon me perdor para se me definu
const PI      = 3.14          // block-scoped, can't reassign

//getElementById
document.getElementById("demo") //this basically gets an html element by id, usually input, so if youre trying to get user input this is how

//`${x}` -> nje var brenda nje funct nese don me marr se osht let edhe const, also nese don me
//si string mi print

console.log(5, 6) // , basically qet spaces
console.log("Hello" + "Bob") //concat
console.log(`My score is ${scores.Math}`) //-> per obj e mir
console.log(`Hello Bob: ${math}`) //per var si let edhe const

//vargjet numerike:
const vargu1 = ["nje","dy","tre"];

//vargjet asociative -- objekte/hashmap smundesh me push se sosht array
const asociative = {
    "Lenda1" : 9,  
    "Lenda2" : 7
}
//nese don me print edhe key edhe value
const asociativ = { "Math": 9, "Science": 7 };

// Object.entries turns it into: [ ["Math", 9], ["Science", 7] ]
Object.entries(scores).forEach(([key, value]) => {
    console.log(`${key}: ${value}`); //turns into string
});

const scores = { Math: 9, Science: 7 };

//for hashmaps
for (const key of Object.keys(scores)) {
    console.log(key); // Prints: Math, Science
}

for (const value of Object.values(scores)) { //ose per key, value const [key, value] of Object.entries()
    console.log(`${value}`); // Prints: Math, Science 
}

console.log(asociativ["Lenda1"]) //give value attached
console.log(asociativ.Lenda1) //give value
asociativ.Lenda3 = 6;
asociativ["Lenda3"] = 6; //- add new obj basically me "index" lenda3 edhe value 6 njejt si previous
console.log(asociativ["Lenda3"]) // print 6

//object array
const students = [
    { id: 20, name: 'Student 1' },
    { id: 24, name: 'Student 2' },
    { id: 56, name: 'Student 3' },
    { id: 88, name: 'Student 4' }
  ];

//matricat
const matrica = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]
console.log(matrica[1][1]) //-> 5
matrica.push([3,3,1]); //-> at the end push this
matrica[4] = [4,4,4] //-> other way of saying push this at the end or replaces, if index 3
//wasnt filled it creates an empty row
console.log(matrica[4][0])
//; needed when console.log(); console.log(); -> me ni 

//stringify - turns obj
console.log("Students: ", JSON.stringify(students, null, 4));  // JSON.stringify(value, replacer, space)
console.log("Student id-s: ", studentIds.toString());
//stringify basically (qkado, qetu basically e qet qa po don specifikisht me output: ['lenda1'], spaces)
const aso = { "Lenda1": 9, "Lenda2": 7 };
asociativ.Lenda3 = 10;

console.log(JSON.stringify(aso));
// Output: '{"Lenda1":9,"Lenda2":7,"Lenda3":10}' -> : edhe {} jo in case u need to reverse
const user = {
  name: "gemini",
  level: 5,
  password: "secret_password_123",
  active: true
  //output: funct() -> munesh edhe funksione me bo map
};

// 1. Value: 'user'
// 2. Replacer: A function to filter and transform
// 3. Space: 2 (for pretty-printing)

const result = JSON.stringify(user, (key, value) => { //this is a ghost function
  if (key === "password") return undefined; // Removes this key entirely
  if (key === "name") return value.toUpperCase(); // Changes the value
  return value; // Returns everything else as is
}, 2);
/* Output me space 2:
{
  -> qitu bohet add space"name": "Alice",
  "stats": {
    "hp": 100,
    "mp": 50
  }
}
 bile munesh me bo me '-->' edhe e bon add qdo her qe ka \n*/

console.log(result);

//vargjet edhe obj qeshtu jon gjith me const tdeklarume


// Opposite of stringify:
const parse = JSON.parse(result);
console.log(parse.name); //specific after turning it back


