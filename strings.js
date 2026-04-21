stringj.split(","); //split a string into an array where theres ","
let str = "hi hello the beautiful world of Bob!";
str.length //length of a string starts from 1
str.toUpperCase(); //uppercase
str.toLowerCase(); //lowercase
str.includes("hi"); //bool return
str.startsWith("hi");
str.endsWith("Bib!");
str.indexOf("h"); //counts forwards
str.lastIndexOf("h"); //last instance of character/word
str.slice(0, 3); //prej 0 dej te 3 bone slice (3 osht space dmth e merr parasysh) -> if you input negative numbers it thinks ok
//start from the end then
str.substring(0,3); //create substring-> counts negative numbers as 0
str.replaceAll("a", "*"); //replace all a with *
let stri = "Go!";
stri.repeat(3); //repeat the string 3 times, output would be: Go!Go!Go!
str.charAt(1); //what is the char at index 1
str.padStart(30, "*"); //make sure string is 30 chars long, if not add as many * as you need at the start to make it so
str.padEnd(35, "Hi"); //same thing but pad the end
str.concat(" There we are! The Bibs!" , stri); //str bohet bashk me everything inside there, you can just use console.log po hajt
let sto = " HEY ";
sto.trim(); //remove spaces and such \n, \r whatever bro
sto.trimStart();
sto.trimEnd(); //self explanatory

//numeroni sa fjale jane ne fjaline....
let fjalia = "Kemi me numeru sa fjale jane brenda kesaj fjalie."

let fjalet = fjalia.split(" ").length;
console.log(fjalet);
