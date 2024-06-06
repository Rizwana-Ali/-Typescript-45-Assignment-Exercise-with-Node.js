"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function sandwich(...items) {
    console.log("sandwich order:");
    for (let i = 0; i < items.length; i++) {
        console.log(`- ${items[i]}`);
    }
}
console.log("enjoy your sandwich Ali");
sandwich('capsicum', 'tomato', 'chicken');
sandwich('beef', 'cheez');
sandwich('garlic chicken', 'mayo sauce');
