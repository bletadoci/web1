//Klasat ne javascript
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