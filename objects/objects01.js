var phoneStore = {
    company: "Apple",
    phone: "iPhone X",
    cost: 999.999,
    monthlySales: 500
};

var fruits = {
  type: "Apple", // key: value pair
  category: "Macintosh",
  seeds: "true",
  taste: "sweet",
  color: ["Red", "black", "gold"]
};

// var i = fruits
for(var i in fruits){
  console.log(i, "--", fruits[i]);  // goes though all the keys
}


