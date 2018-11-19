var hotel = {
    name: "Hilton Hotel",
    rating: 5.0,
    numOfRoom: 10,
    roomRate: 320,
    roomNumber: ["101", "102", "103", "104", "105", "106"],
    roomsBooked: ["107", "108", "109", "110"],
    roomType: "Queen",
    
    roomsAvailable: function(){
        // length of the number of rooms available
       return this.roomNumber.length; // an integer
    },
    
    numOfRoomsBooked: function() {
        return this.roomsBooked.length;
    },
    
    numberOfRooms: function(){
        // Available rooms plus booked rooms
       return this.roomsAvailable.length + this.numOfRoomsBooked.length;
    },
    
    bookedRooms: function(){
    // only book a room if one or more is available
     if(this.roomNumber.length > 0){
        // select a random available room 
        var randomRoomSelected =  this.roomNumber[Math.floor(Math.random()*this.roomNumber.length)];
        console.log("this random room is:" + randomRoomSelected);
        return randomRoomSelected;
        }
     },
     
     removeBookedRoom: function(){
        var roomNumber = ["101", "102", "103", "104", "105", "106"];
         roomNumber = roomNumber.splice(roomNumber.indexOf(roomNumber), 1);
        // remove the booked room roomsAvailable using the indexOf and splice method
     }
};

// Note:
// ex. var items = item[Math.floor(Math.random()*item.length)];
// Math.random - 0 to 1 * the length of the array
// Math.floor = nearest low int