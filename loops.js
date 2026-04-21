//normal for loops
const varg = [1, 2, 4];
for(let i = 0; i<10; i++){
    console.log(varg[i] , "\n")
}

//forloops for hashmaps

for (const key in scores) { //si njava bre
    const value = scores[key]; // Use the key to get the value
    console.log(`${key}: ${value}`);
}

//dont need index/key? -> get val immediately also can be used with object.entries/values/keys
for (const student of students) {
    console.log(student);
}

//while, do while jon njejt

//foreach()
//deklarim per spjegim
const students = [
    { id: 20, name: 'Student 1' },
    { id: 24, name: 'Student 2' },
    { id: 56, name: 'Student 3' },
    { id: 88, name: 'Student 4' }
  ];
  
  /* neve na duhet vetem [20, 24, 56, 88], id-te e studenteve */

  //me forEach() 

  const studentIds = []; //deklarojme nje varg te zbrazet
  students.forEach(function (student) { //-> ose (student => studentIds.push(student.id))
    studentIds.push(student.id); //e shtin value nnew array
}); //loop normal nuk ka return type

// foreach(name, index) -> default (_, i) -> dont need name only index

//if you want to print key AND value in an object array
const studente = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" }
];

studente.forEach(student => {
    // You can print specific keys
    console.log(`ID: ${student.id}, Name: ${student.name}`);
    
    // OR if you don't know the keys, loop through the student object:
    /*
    Object.entries(student).forEach(([key, val]) => {
        console.log(`${key} is ${val}`);
    });
    */
});

//otherwise if its just a simple hashmap:
 // OR if you don't know the keys, loop through the student object:
    /*
    Object.entries(name_hashmap).forEach(([key, val], index) => {
        console.log(`${key} is ${val}`); ---> ose console.log(key); console.log(val);
    });
    */


//map() -- e bon return ni new array based on the qualifications, GJITH return
const stdID = students.map(function (std) { //-> std qysh dush e bon name
    //ose mundesh .map(std => return std.id)
    return std.id;
  });
  //resulting array always same size

  //reduce() -> returns a value .reduce()
  const coins = [1, 5, 10];
const total = coins.reduce((sum, coin) => sum + coin, 0); //sum is accumulator it iterates
//while coin is the value of the one sum is iterating on, 0 means sum is 0

//filter() -> filtron based on a category
const items = [
        {
          id: 10,
          name: "item 1",
          price: 14,
          category : "Vegetable"
        },
        {
          id: 2,
          name: "item 2",
          price: 30,
          category : "Meat"
        },
        {
          id: 41,
          name: "item 3",
          price: 16,
          category : "Vegetable"
        },
        {
          id: 99,
          name: "item 4",
          price: 22,
          category : "Meat"
        }
      ];
var meats = items.filter(function (item) {
        return item.category === "Meat";
      }); // e bon ni new array veq me krejt objektin qe e ka meat category tani mundesh me specifiku

      
      //Kombinimi i funskioneve BRO MUNESH KREJT BASHK MI BO WTFFFF njo ka njo mas
      const totalcategoryPrice = items
        .filter(item => item.category === "Meat")
        .map(Itemprice => Itemprice.price + Itemprice.price * 0.1)
        .reduce((acc, total) => acc + total, 0);

        //basically nese don me filter tani me qit veq njo specifike
        const meatNames = items
  .filter(item => item.category === "Meat") // Step 1: Keep only meat objects
  .map(item => item.name);