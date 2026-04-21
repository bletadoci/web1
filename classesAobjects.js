//Klasat ne javascript

//1. Objekte me klasa normal
        class Personeli {
            //konstruktori
            constructor(emri, mbiemri, paga){
                this.emri = emri;
                this.mbiemri = mbiemri;
                this.paga = paga;
            }

            printo(){
                console.log(this.emri +  "  " + this.paga);
            }
        }
        class Product {
  // 1. The setup (runs when you say 'new')
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  // 2. A Method (what the object can DO)
  displayPrice() {
    console.log(`${this.name} costs $${this.price}`);
  }
}

// 3. Creating an "Instance"
const item1 = new Product("Keyboard", 50);
item1.displayPrice(); // Prints: Keyboard costs $50

//2. Objekte me const funct
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
"My father is " + myFather.age + ".";

document.getElementById("demo1").innerHTML =
"My mother is " + myMother.age + ".";
</script>

</body>
</html> */

//3. Objekte literal {key:value} mrena ni array
const array ={
  emri: "Hi",
  mosha: 22
};

//inheritance
class A{
   a = 0; //init like this, you dont have to
   #c=0; //this is a private variable
   _d; //protected
  constructor(a, c, d){
    this.a = a;
    this.#c = c;
    _this.d=d;
  }
  login(){ //si thu function
    console.log("Hello.");
  }
}
class B extends A{
  constructor(a, c, d, b){
    super(a,c,d,b);
    this.b =b;
  }
}