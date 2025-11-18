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

console.log(getLength('typescript'));
console.log(getLength([10, 20, 30, 40]));
