class Human {
  constructor(){
    //Property
    this.gender = 'Male';
  }
  
  //Methods
  printGender(){
    console.log(this.gender);
  }
}

//Inheritance
class Person extends Human{
  constructor(){
    super();//call parent class constructor
    this.name = 'Pranay';
  }
  
  printName(){
    console.log(this.name);
  }
}

const person = new Person();
person.printGender();
person.printName();
