//Create a car object with the items: Make, Model, Year, Milage, and Color. 
//Then create 3 methods in the object; A driveToWork method, driveAroundTheWorld method, and runErrands method.
// Each of these methods should affect the car’s mileage adding to it each time and console logging the old mileage and the new mileage.
// Medium (4)


const car = {
make: "Jeep",
model: "Renegade",
year: 2017,
mileage: 0,
color: "white",
driveToWork() {
console.log(`old mileage: ${this.mileage}`);
this.mileage += 33;
console.log(`new mileage: ${this.mileage}`);
},
driveAroundTheWorld() {
console.log(`old mileage: ${this.mileage}`);
this.mileage += 24000;
console.log(`new mileage: ${this.mileage}`);
},
runErrands() {
console.log(`old mileage: ${this.mileage}`);
this.mileage += 30;
console.log(`new mileage: ${this.mileage}`);
},
};
  
car.driveToWork();
car.driveAroundTheWorld();
car.runErrands();




