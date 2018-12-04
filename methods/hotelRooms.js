var hotel = {
    name: "Hilton Hotel",
    rating: 5.0,
    roomRate: 325.00,
    roomNumAvailable: ["101", "102", "103", "104", "105", "106"],
    roomsBooked: [],
    roomType: "Queen",
    
    roomsAvailable: function(){
       return this.roomNumAvailable.length; 
    },
    
    numOfRoomsBooked: function() {
        return this.roomsBooked.length;
    },
    
    numberOfRooms: function(){
       return this.roomsAvailable.length + this.numOfRoomsBooked.length;
    },
    
    bookedRooms: function(){
     if(this.roomsAvailable() > 0){

        var randomRoom =  this.roomNumAvailable[Math.floor(Math.random()*this.roomNumAvailable.length)];
        console.log("this random room is:" + randomRoom); 
        
        this.roomsBooked = this.roomsBooked.concat(this.roomNumAvailable.splice(this.roomNumAvailable.indexOf(randomRoom), 1));
        console.log(this.roomsBooked);
        }
    }
};
