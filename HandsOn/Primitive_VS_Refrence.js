//Primitive Types number, bool, string etc...
const number = 1;
//Actually create the copy of num2
const num2 = number;
console.log(num2); //1

//Refrence Type Object, Array
//Create a memory for Object
//then assign address of that memory to person variable
const person = {
  name: 'Max'
};
//Assign address store in person to secondPerson variable
const secondPerson = person;
console.log(secondPerson.name);//Max
person.name = 'Pranay';
console.log(secondPerson.name);//Pranay

//To actually copy the original Object and not the refrence
//use spread operator
thirdPerson = {...person};//Real copy of person array
console.log(thirdPerson.name);//Pranay
person.name = 'Ritika';
console.log(thirdPerson.name);//Pranay
