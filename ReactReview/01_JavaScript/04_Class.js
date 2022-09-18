
// ************ A simple class constructor ***********
class Car {
    constructor(name) {
      this.brand = name;
    }
  }


// ************ Create an object called "mycar" based on the Car class *****************
// The constructor function is called automatically when the object is initialized.

class Car {
    constructor(name) {
      this.brand = name;
    }
  }
  
  const mycar = new Car("Ford");


  // **************** Create a method named "present" *************
  class Car {
    constructor(name) {
      this.brand = name;
    }
    
    present() {
      return 'I have a ' + this.brand;
    }
  }
  
  const mycar = new Car("Ford");
  mycar.present();


  
  
  // ****************** Create a class named "Model" which will inherit the methods from the "Car" class:   *********************

  class Car {
    constructor(name) {
      this.brand = name;
    }
  
    present() {
      return 'I have a ' + this.brand;
    }
  }
  
  class Model extends Car {
    constructor(name, mod) {
      super(name);
      this.model = mod;
    }  
    show() {
        return this.present() + ', it is a ' + this.model
    }
  }
  const mycar = new Model("Ford", "Mustang");
  mycar.show();



  /* 
  The super() method refers to the parent class.

  By calling the super() method in the constructor method, we call the parent's constructor method and gets access to the parent's properties and methods.

  */

  // ******************** 