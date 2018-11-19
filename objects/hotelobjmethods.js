var hotel = {
    name: "Marriot",
    //numRooms: 5,
    roomsBooked: 0,
    roomNumbers: ["100", "101", "102", "103", "104", "105"],
    roomCost: 100,
    roomType: "Single",
    
    totalRooms: function() {
        return this.roomNumbers.length;
    },
    
    roomsAvailable: function() {
        return this.totalRooms() - this.roomsBooked;
    }
};

