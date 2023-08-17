/*let personSimple = "john Doe"

const personObject = new Object();
personObject.firstName = "jonh";
personObject.lastName = "Doe";
personObject.age = 50;
personObject.eyeColor = "blue";

console.log(personSimple);
console.log(personObject);*/
/*
let personSimple = "john Doe"

const personObject = {
    firstName:"jonh",
    lastName:"Doe",
    age:50,
    eyeColor:"blue"
}
personObject.age = 10;

console.log(personSimple);
console.log(personObject);
*/

/*
class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    introduce(){
        console.log(`Olá, meu nome ${this.name} e tenho ${this.age} anos.`);
    }
}
const user1 = new User('João', 30);
user1.introduce();
*/
/*
class Pizza {
    constructor(base, sauce, toppings, cheese){
        this.base = base;
        this.sauce = sauce;
        this.toppings = toppings;
        this.cheese = cheese;
    }

    getDescription(){
        return `A delicious pizza with ${this.base} base, ${this.sauce} sauce, ${this.toppings} toppings, and ${this.cheese} lots of cheese.`;
    }

    getTimerBase(){
        if(this.base == 'traditional'){
            return 10;
        }else if (this.base == 'integral'){
            return 15;
        }else{
            return 'This base does not exist!'
        }
    }
    getTimerSauce(){
        if(this.sauce == 'White sauce '){
            return 20;
        }else if (this.sauce == 'integral'){
            return 15;
        }else{
            return 'This base does not exist!'
        }
    }
    getTimerToppings(){
        if(this.toppings == 'chicken'){
            return 25;
        }else if (this.toppings == 'integral'){
            return 15;
        }else{
            return 'This base does not exist!'
        }
    }
    getTimerCheese(){
        if(this.cheese == 'Mozzarella '){
            return 5;
        }
        else if (this.cheese == 'integral'){
            return 15;
        }else{
            return 'This base does not exist!'
        }
    }
}

const myPizza = new Pizza('Tradition', 'White sauce', 'chicken', 'Mozzarella');
console.log(myPizza.getDescription());
console.log('Time to cook the pizza =' + myPizza.getTimerBase());


console.log('Time to cook the pizza =' + myPizza.getTimerCheese());
console.log('Time to cook the pizza =' + myPizza.getTimerSauce());
console.log('Time to cook the pizza =' + myPizza.getTimerToppings());
const timetotal = myPizza.getTimerBase() + myPizza.getTimerCheese() + myPizza.getTimerSauce() + myPizza.getTimerToppings();
console.log('Tempo total' + timetotal);
*/
/*
class Calculator{
    add(a,b){
        return a + b
    }
    multiply(a,b){
        return a * b;
    }
    subtract(a,b){
        return a - b;
    }
}
const calculator = new Calculator();

const sumResult = calculator.add(5,3);
console.log("Sum:", sumResult);

const multiplicationResult = calculator.multiply(4,2);
console.log("Multiplication:", multiplicationResult);

const subtractionResult = calculator.subtract(10,4);
console.log("Subtraction:", subtractionResult);
*/
/*
class Witch{
    constructor(name, patron, house, colorEyes){
        this.name = name;
        this.patron = patron;
        this.house = house;
        this.colorEyes = colorEyes;
    }

    getName(){
        return `O nome do bruxo(a) é: ${this.name}`;
    }
    getHouse(){
        return `Ele(a) está na casa ${this.house}`;
    }
    getPatron(){
        return `Seu patron é: ${this.patron}`;
    }
}

const witch1 = new Witch('Harry Potter', 'Deer', 'Grynffindor', 'green');

console.log(witch1.getName());

class TypeWitch extends Witch {
    constructor(name, patron, house, colorEyes, typeWitch) {
        super(name, patron, house, colorEyes);
        this.typeWitch = typeWitch;
    }

    getTypeWitch() {
        if(this.typeWitch === "P") {
            return "Este bruxo é sangue puro";
        } else if (this.typeWitch === "M") {
            return "Este bruxo é Mestiço";
        } else {
            return "Este é um trouxa";
        }
    }
}

const harry = new TypeWitch('Harry Potter', 'Cervo', 'Sonserina', 'Verde/Azul?', 'M');
*/

class CameraSecreta {
    constructor(name, pwd){
        this.name = name;
        let _pwd = pwd; // Atributo privado.

        this.verifyPwd = (pwdInput) => {
            return pwdInput == _pwd; // True or false
        }
        //Metodo privado, mas não no JS
        this.accessToChamber = () =>{
            let pwdInput = prompt("Digite a senha");
            if(this.verifyPwd(pwdInput)){
                console.log(`Bem vindo a camara secreta ${this.name}`);
            }else{
                console.log("Acesso negado trouxa!")
            }
        };
    }
    //Metodos publicos
    showName(){
        console.log(`Nome do bruxo: ${this.name}`);
    }
}

const myAccess1 = new CameraSecreta('HP', 'senha123')

//Metodo publico
myAccess1.showName(); //top

myAccess1.name = 'HP'; // Funciona pois o atributo é publico
myAccess1.pwd = '123'; //Nao funciona, atributo privado


myAccess1.accessToChamber(); //Na teoria não deveria funcionar mais no JS funciona