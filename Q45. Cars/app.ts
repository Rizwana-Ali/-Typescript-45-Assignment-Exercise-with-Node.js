
type car = {

    manufacturer: string
    modelName: string
    [key: string]: any;

}

function createCar(manufacturer: string, modelName: string, optional: Record<string, any>): car {
  return{
    manufacturer,
    modelName,
    ...optional
  }
}

const mycar: car = createCar("toyota","corolla", { color: "silver", year: "2024"});
console.log(mycar);