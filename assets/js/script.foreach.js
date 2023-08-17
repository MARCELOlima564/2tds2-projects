/*
const companies = ["Apple", "Google", "Facebook"];

companies.forEach(company => {
    console.log(`Hey, ${company}!`);
});
*/
/*
const names = ["Whinds", "Freeway", "Teste", "Maria"];

names.forEach((name) => {
    console.log(`Hi, ${name}!`)
});
*/
/*
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(numbers);

numbers.forEach((number, index) => {
    if (number % 2 == 0){

        console.log(`O indice ${number} está na pisiçaõ ${index} do array`);
    }
});
*/

/*
const cars = [
{
    marca: "Ford",
    modelo: "Focus",
},
{
    marca: "BMW",
    modelo: "BMW Z4",
},
{
    marca: "Fiat",
    modelo: "Palio",
},
{
    marca: "Audi",
    modelo: "A3"
},
];

cars.forEach((car) => {
    console.log(`Marca: ${car.marca} -
    Modelo: ${car.modelo}`);
})
*/

class Car{
    constructor(brand, model){
        this.brand = brand;
        this.model = model;
    }
}
class CarsList {
    constructor(){
        this.cars = [];
    }
    addCar(car) {
        this.cars.push(car)
    }
}

const carsList = new CarsList();

function modelcars(){
    const brand = document.getElementById("brand").value;
    const model =  document.getElementById("model").value;

    const car = new Car(brand, model);

    carsList.addCar(car);

    document.getElementById("brand").value = "";
    document.getElementById("model").value = "";

    carsList.cars.forEach((car) => {
        console.log(`Marca: ${car.marca} - Modelo: ${car.modelo}`);
    });

}