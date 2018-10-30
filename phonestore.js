var storeName = "Phone Galore Store";
var addreww = "Providence Place Mall";

var models = ["iPhone X", "Galaxy 10", "Pixel 3"];
var price = [999.99, 799.99, 699.99];
var sales = [20, 15, 7]


var i;
for(i = 0; i < price.length; i++) {
    console.log("Units sold total for", models[i], "is", price[i] * sales[1]);
}