"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function createCar(manufacturer, modelName, optional) {
    return {
        manufacturer,
        modelName,
        ...optional
    };
}
const mycar = createCar("toyota", "corolla", { color: "silver", year: "2024" });
console.log(mycar);
