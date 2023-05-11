"use strict";
// interface
// interface IVehicle{
//     name: string;
//     model: string;
// }
// const vehicle: IVehicle ={
//     name:'Car',
//     model:'2000'
// }
// interface IVehicle{
//     startEngine(): void;
//     stopEngine(): void;
//     move(): void;
// }
// class Vehicle implements IVehicle{
//     constructor(
//         public name:string,
//         public brand:string,
//         public model:number,
//         ){}
//     startEngine(): void {
//         console.log("I am starting engine..... ");
//     }
//     stopEngine(): void {
//         console.log("I am stopping engine......");
//     }
//     move(): void {
//         console.log(" I am stopping engine.....");
//     }
//     test(){
//         console.log('I Am for testing purpose');
//     }
// }
// const vehicle1= new Vehicle('car','toyota',2000)
// abstract class
class Vehicle {
    constructor(name, brand, model) {
        this.name = name;
        this.brand = brand;
        this.model = model;
    }
}
class Car extends Vehicle {
    startEngine() {
        console.log('I am starting engine....');
    }
    stopEngine() {
        console.log(" I am stopping engine.....");
    }
}
const car1 = new Car('Car', "honda", 2015);
