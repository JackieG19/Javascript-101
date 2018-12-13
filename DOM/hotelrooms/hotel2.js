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
     if(this.roomsAvailable() > 0){ // if roomNumAvailable lenght is greater than 0
        var selectedRoom = document.getElementById("selectedRoom").value;
        // the variable selectedRoom = returns an element object representing the element whose id in the html with a property sets or returns the value of the attribute
        
        this.roomsBooked = this.roomsBooked.concat(this.roomNumAvailable.splice(this.roomNumAvailable.indexOf(selectedRoom), 1)).sort();
         // adds the booked room to roomsBooked array by
        // (going into roomNumAvailable array which is subtractin/or adding(depnding on what your doing) a room from the array
        // (from the array index place of the array), and whatever number of items to remove/replace/add into the array).and sort the number in order
     }
         displayRooms(); // will update 
    },
    
    returnBookedRooms: function(){
     if(this.numOfRoomsBooked() > 0){ 
        var bookRoom = document.getElementById("bookedARoom").value;
        this.roomNumAvailable = this.roomNumAvailable.concat(this.roomsBooked.splice(this.roomsBooked.indexOf(bookRoom), 1)).sort();
     }
         displayRooms();
    }
};
// this will change the h1 tag text
document.getElementById("name").innerText = hotel.name;

// this function will creates html tags to place the lists of available and booked rooms and display it
function displayRooms(){
    var roomsListed = "<form> <select id='selectedRoom'>";
        for (var i = 0; i < hotel.roomNumAvailable.length; i++) { 
            roomsListed += "<option value=" + hotel.roomNumAvailable[i] + ">" + hotel.roomNumAvailable[i] + "</option>";
        }
    roomsListed += "</select> </form>";
    document.getElementById("selectARoom").innerHTML = roomsListed;

    var bookedList = "<form> <select id='bookedARoom'>";
        for (var j = 0; j < hotel.roomsBooked.length; j++) {
            bookedList += "<option value=" + hotel.roomsBooked[j] + ">" + hotel.roomsBooked[j] + "</option>";
        }
    bookedList += "</select> </form>";
    document.getElementById("bookedRoom").innerHTML = bookedList;
}
 displayRooms();
