// multidimensional array

var hotelName = "Javascript Function Hotel";
var hotelMotto = "What's your function";

var roomTypes = ['twin', 'single', 'double', 'queen', 'king'];
var roomNumbers = [[101, 102, 103, 104], [105, 106, 107], [201, 202], [203, 204], [301]];
var roomPrices = [75, 85, 100, 150, 200];

var bookedRooms = [[], [], [], [], []];

function availableRoomQty(){
    var totalRoomQty = 0;
    for(var i = 0; i < roomNumbers.length; i++){
        totalRoomQty += roomNumbers[i].length;
    }
    return totalRoomQty;
}

function availableRoomsReport(){
    console.log("Total rooms available:", availableRoomQty());
}

function bookTwin(){
    bookedRooms[0].sort(bookedRooms[0].push(roomNumbers[0].pop()));
}

function bookSingle(){
    bookedRooms[1].push(roomNumbers[1].pop());
}

function salesReport(){
    var totalSales = 0;
    for(var i = 0; i < bookedRooms.length; i++){
        for(var j = 0; j < bookedRooms[i].length; j++){
            totalSales += bookedRooms[i].length * roomPrices[i];
        }
    }
    return totalSales;
}
