const car = {
    model: "Mustang",
    color: "red",
    year: "2024",

    drive: function() { console.log("You drive the car"); },
    brake: function() { console.log("You step on the brake"); }
}
console.log(car.model);
console.log(car.color);
console.log(car.year);
car.drive()
    // car.brake()