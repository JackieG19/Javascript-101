// name, adress, price, orders
// * price by orders - output 

var name = ["Californa Tacos", "Grand Rancho", "La Lupita", "Taqueria Puebla"]; // strings
var address = ["321 Amherst Street", "311 Plainfield Street", "1950 Westminster Street", "1070 Chalkstone Avenue"];
var prices = [1.25, 2, 1, 1.50]; // numeric
var orders = [23, 20, 15, 18];

var i; 
// i will = 0, 0 less than the length of the name array, 0 = 0 + 1
for (i = 0; i < name.length; i++) { 
    
   // prcOrder = price of said restarant multipy by the order
   var prcOrder = prices[i] * orders[i]; 
   
   console.log("Total sale from", name[i], "at", address[i], "is", prcOrder); // prints output
}
// node filename.js to run whole program


