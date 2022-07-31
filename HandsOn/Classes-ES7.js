//ES7 Syntex
class Human {
  gender = 'Male';
  //Methods
  printGender= () => console.log(this.gender);
}

//Inheritance
class Person extends Human{
  name = 'Pranay';
  printName = () => console.log(this.name);
}

const person = new Person();
person.printGender();
person.printName();
