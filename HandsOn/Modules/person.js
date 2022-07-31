const person = {
	name: 'Pranay',
	age: 21
}

var sayName = () => console.log(person.name);

sayName();
//Default export - only person object is export to other files
export default person