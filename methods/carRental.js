// create a rental car object, total num car, car name, 

var carRental = {
    rentalName: "Enterprise Rent-A-Car",
    pricePerDay: 56,
    carsRented: 0,
    daysForRent: 14,
    oneEachLot: ["Lot 1", "Lot 2", "Lot 3", "Lot 4"],
    type: "Economy",
    
    totalLotsCarIsIn: function() {
        return this.oneEachLot.length;
    },

     carsAvailable: function() {
        return this.totalLotsCarIsIn() - this.carsRented;
    },
    
    totalCost: function() {
        return this.pricePerDay * this.daysForRent; // $784
    }
};

