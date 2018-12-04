var hotel = {
    name: "CareerDevs Hotel",
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

document.getElementById("name").innerText = "CareerDevs Super Mega Hotel";

// in this for ( the variable i will stay at the 0 position of the array)
for (var i = 0; i < hotel.roomNumAvailable.length; i++) { 
        document.getElementById("available").innerHTML += "<li>" + hotel.roomNumAvailable[i] + "</li>";
    }
