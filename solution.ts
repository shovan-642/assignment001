function formatValue (value: string | number | boolean) : string | number | boolean {
  if(typeof value === "string"){
    return value.toUpperCase();
  }
  if(typeof value === "number"){
    return value*10
  }
  else return !value
}

// console.log(formatValue('hello'));
// console.log(formatValue(5));
// console.log(formatValue(true));




function getLength(input: string | any[]): number{
  if(Array.isArray(input)){
    return input.length
  }
  return input.length
}

// console.log(getLength('typescript'));
// console.log(getLength([10, 20, 30, 40]));

class Person {
  name: string;
  age: number;


  constructor (name: string, age: number){
    this.name = name;
    this.age = age;
  }

  getDetails(): string{
    return `Name: ${this.name}, Age: ${this.age}`
  }
}


const person1 = new Person('John Doe', 30);
console.log(person1.getDetails());

const person2 = new Person('Alice', 25);
console.log(person2.getDetails());
