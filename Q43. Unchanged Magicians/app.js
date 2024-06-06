"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function show_magicians(magicians) {
    magicians.forEach(name => console.log(name));
}
// Function to make magicians great through  .map( )it will modify array
function make_great(magicians) {
    return magicians.map(name => `The Great ${name}`);
}
// Define an array of  magicians name
let magician_names = ["alisha", "husnain", "balaj"];
// Making a copy of original array through .slice() function
let copy_magician_names = magician_names.slice();
// Modify the copied of array to include "the Great" with their names
let copy_great_magicians = make_great(copy_magician_names);
// show both arrays original and copied
// original
show_magicians(magician_names);
// copied
show_magicians(copy_great_magicians);
