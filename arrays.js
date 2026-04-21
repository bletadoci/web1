//array functions:
arr.reverse();
arr.length(); //starts from 1
arr.join(", "); //make an array into a string by joining the components tg with ", "
//other array functions include map, filter, reduce but they're explained in different folders
arr.length;
arr.includes(); //includes an arr item, could be .includes("a", 3) -> 3 represents the index
//to start search at
arr.indexOf(); //instance of arr item
arr.lastIndexOf(); //last instance of an array item
arr.sort(); //sipas alfabet
arr.sort(function(a, b) { return a - b; }); //ascending
arr.sort(function(a, b) { return b - a; }); //descending
let studentet = [
  { emri: "Altin", mosha: 20 },
  { emri: "Bora", mosha: 18 },
  { emri: "Driton", mosha: 22 }
];

studentet.sort((a, b) => a.mosha - b.mosha); //for object arrays
const users = [{ name: 'Zoe' }, { name: 'Alice' }];
users.sort((a, b) => a.name.localeCompare(b.name)); //this is for alphabetical
//this doesn't change the place of the attr, just sorts attr selected
employees.sort((a, b) =>

a.lastName.localeCompare(b.lastName) || a.firstName.localeCompare(b.firstName)

); //sort based on 2 attr selected -> first one then second
arr.push(); //works for obj arrays and numeric and all basically, adds at end
arr.pop(); //same here, removes from end
arr.toString(); //array to string bro opposite of this is let num2 = parseInt(str); or let num3 = +str; -> ONLY FOR VAL NO ARRAYS
arr.at(1); //what is at index 1? also if -1 then start from end

console.log(namesArray); //you can output normal arrays like this btw idk why
