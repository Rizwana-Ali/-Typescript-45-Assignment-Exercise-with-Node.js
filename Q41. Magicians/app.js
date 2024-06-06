"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Define a function to print each magician name from an array
function show_magicians(magicians) {
    magicians.forEach(name => console.log(name));
}
// Define an array containing magicians name 
let magician_names = ["alisha", "husnain", "balaj"];
// Call the function to print each magician name
show_magicians(magician_names);
