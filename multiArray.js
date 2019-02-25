// multidimensional array

var hotelName = "Javascript Function Hotel";
var hotelMotto = "What's your function";

var roomTypes = ['twin', 'single', 'double', 'queen', 'king'];
var roomNumbers = [[101, 102, 103, 104], [105, 106, 107, 108], [201, 202], [203, 204], [301, 302, 303], [304, 305]];
var roomPrices = [75, 85, 100, 150, 200];
var bookedRooms = [[], [], [], [], []];

// loop and push empty subarrays into bookedRooms for as many elements that exists in roomTypes
for(var i = 0; i < roomTypes.lenght; i++){
    bookedRooms.push([]);
}

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
    // looks at the first array in bookedRooms sorting the rooms in the first subarray 
    // and pops out the last number in the array which is roomNumber 104
}

function bookSingle(){
    bookedRooms[1].push(roomNumbers[1].pop());
}

// 1. calculate bookedRoom[0].length * roomPrices
function salesReport(){
    var totalSales = 0;
    for(var i = 0; i < bookedRooms.length; i++){
        for(var j = 0; j < bookedRooms[i].length; j++){
            totalSales += bookedRooms[i].length * roomPrices[i];
        }
    }
    return totalSales;
}
