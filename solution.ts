function formatValue (value: string | number | boolean) : string | number | boolean {
  if(typeof value === "string"){
    return value.toUpperCase();
  }
  if(typeof value === "number"){
    return value*10
  }
  else return !value
}






function getLength(input: string | any[]): number{
  if(Array.isArray(input)){
    return input.length
  }
  return input.length
}



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




type RatedItem = {
  title: string;
  rating: number;
}

function filterByRating(items: RatedItem[]): RatedItem[]{
  const filteredItems = items.filter((item)=>item.rating >= 4);
  return filteredItems;
}




type User = {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
}

function filterActiveUsers(users: User[]): User[] {
  const active = users.filter((user) => user.isActive);
  return active;
}


interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}

function printBookDetails(book: Book): void {
  const status = book.isAvailable ? "Yes" : "No";

  console.log(`Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${status}`)
}







function getUniqueValues(
  array1: (number | string)[], 
  array2: (number | string)[]): (number | string)[] {
  const combined = [...array1, ...array2]
  const unique: (number | string)[] = []

  for (const item of combined){
    let isFound = false; 
    for (const  value of unique){
      if(value === item){
        isFound = true; 
        break;

      }
    }

    if(!isFound){
      unique.push(item);
    }
  }
  return unique;
}



type Product = {
  name: string;
  price: number;
  quantity: number;
  discount: number;
}

function calculateTotalPrice(products: Product[]): number {
  if(!products.length){
    return 0;
  }
  let total = 0;

  for (const product of products) {
    const discount = product.discount ? product.discount : 0;
    const priceAfterDiscount = product.price - (product.price * discount)/100

    total += priceAfterDiscount * product.quantity;
  }
  return total;
}

