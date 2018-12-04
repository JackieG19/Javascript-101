// 1. create an array for booked cars. Initially this should be empty
// 2. create an array with 5 cars 
// 3. remove an item from the 5 item array and put it into the empty array


var carTypeToRent = ["Economcy", "Compact", "Full Size", "Premium", "Luxury"];
var carsRentedOut = [];

carsRentedOut = carsRentedOut.concat(carTypeToRent.splice(carTypeToRent.indexOf(carTypeToRent), 1));