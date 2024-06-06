"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function city_country(city, country) {
    return `${city}, ${country}`;
}
let c1 = city_country('lahore', 'Pkistan');
let c2 = city_country('tokyo', 'japan');
let c3 = city_country('peris', 'france');
console.log(c1);
console.log(c2);
console.log(c3);
