// Make Array
let names:string[] = ["sania", "fatima" , "huria"];


// send message
let message:string = "would you like to learn typescript"

console.log(names[0] + " " + message);
console.log(names[1] + " " + message);
console.log(names[2] + " " + message);

// This is second method.
names.forEach(item => console.log(`${item} would you like to learn python?`))