var venue = {
    companyName: "Gillette Stadium",
    url: "https://www.gillettestadium.com",
    seatsAvailable: ["A1", "A2", "A3", "A4", "A5", "A6", "A7", "A8", "A9", "A10"],
    seatsBought:[],
    
    // array in total
    totalSeats: function(){
        return this.seatsAvailable.length;
    },
    
    displaySeatsAvailable: function(){
        document.getElementById("openspots").innerHTML = "";
        for (var i = 0; i < venue.seatsAvailable.length; i++) { 
            document.getElementById("openspots").innerHTML += "<li>" + venue.seatsAvailable[i] + "</li>";
        }
    },
    
    displaySoldSeats: function(){
        document.getElementById("soldseats").innerHTML = "";
        for (var j = 0; j < venue.seatsBought.length; j++){
        document.getElementById("soldseats").innerHTML += "<li>" + venue.seatsBought[j] + "</li>";
        }
    },
    
    displayCanceledSeat: function(){
        document.getElementById("canceled").innerHTML = "";
        for (var p = 0; p < venue.seatsBought.length; p++){
          document.getElementById("canceled").innerHTML = "Seat has be canceled";  
        }
    },
    
    // random seat sold and venuis added to seatsBought array
    sellASeat: function(){
            var sold = this.seatsAvailable[Math.floor(Math.random()*this.seatsAvailable.length)];
            this.seatsBought = this.seatsBought.concat(this.seatsAvailable.splice(this.seatsAvailable.indexOf(sold), 1));
            console.log(this.seatsBought);
            this.displaySeatsAvailable();
    },
    
    // the number of canceled seats in the seatsBought array is moved back to the seatAvaliable array
    cancellation: function(){
        this.seatsAvailable = this.seatsAvailable.concat(this.seatsBought.splice(this.seatsBought.indexOf(this.seatsBought), 1));
        this.seatsAvailable.sort; // will put the the seat number in order of the array
    }
    
};

// shows the list of available seats on the html page
venue.displaySeatsAvailable();
 

