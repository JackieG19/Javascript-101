var hotel = {
    name: "Hilton Hotel",
    rating: 5.0,
    roomRate: 325.00,
    roomNumAvailable: ["101", "102", "103", "104", "105", "106"],
    roomsBooked: [],
    roomType: "Queen",
    
    roomsAvailable: function(){
        // length of the number of rooms available
       return this.roomNumAvailable.length; // returns an integer
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
     if(this.roomsAvailable() > 0){
         
        // select a random available room :
        var randomRoom =  this.roomNumAvailable[Math.floor(Math.random()*this.roomNumAvailable.length)];
        // this array [rounds down to the nearest whole integer(by returning a number between 0 to 1(w/e num) * the length of the array)]
        
        console.log("this random room is:" + randomRoom); // test the output = Room ['102']
        //return randomRoomSelected;
        
        // remove booked room from roomsAvailable using splice/indexOf :
        //this.roomNumAvailable.splice(this.roomNumAvailable.indexOf(randomRoom), 1);
        
        this.roomsBooked = this.roomsBooked.concat(this.roomNumAvailable.splice(this.roomNumAvailable.indexOf(randomRoom), 1));
        // adds the removed room to roomsBooked array by
        // (going into roomNumAvailable array which is subtractin/or adding(depnding on what your doing) a room from the array
        // (from the array index place of the array), and whatever number of items to remove/replace/add into the array)
        
        console.log(this.roomsBooked); // ['102'] is added to the roomsBooked array
        }
    },
    
    addToAvailableRooms: function(){
        // add a room in the roomNumAvailable array
         return this.roomNumAvailable;
    }
};

// Note:
// ex. var items = item[Math.floor(Math.random()*item.length)];
// Math.random - a number between 0 to 1 
// Math.floor = rounds down a number

// splice adds or remove an item from an array
// indexOf returns the position of an array
