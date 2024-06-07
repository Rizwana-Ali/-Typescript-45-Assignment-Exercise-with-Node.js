
let placetovisit:string[] = ["Hongkong","America", "Pakistan", "Brazil", "Iran"];
// print in original order
console.log("Original order:", placetovisit);

// Print array in alphabatical order
console.log("Alphabatical order:", placetovisit.slice().sort());

// array is still in  its original order
console.log("Original order after sorting:", placetovisit);

// Print  array in reverse alphabetical order without changing the order of the original list.
console.log("Reverse alphabatical order:", placetovisit.slice().sort().reverse());

// array is still in its original order 
console.log("Original order aftet reverse sorting:", placetovisit);

// Reverse the order of  list
placetovisit.reverse();
console.log("Reverse order:",placetovisit);

// Reverse the order of  list again. 
placetovisit.reverse();
console.log("Back to original order:",placetovisit);

// Sort  array so it’s stored in alphabetical order.
console.log("Sorted in alphabatical order:", placetovisit.slice().sort());

// Sort to change  array so it’s stored in reverse alphabetical order.
console.log(" Stored in reverse alphabatical order:", placetovisit.slice().sort().reverse());


