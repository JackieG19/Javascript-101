// create new 2 object with 2 keys that are 2 string value and 2 number value
// multiply 2 of the number value in console.log
// loop thru output all the key and values


var fruits = {
  type: "Apple", 
  name: "Honeycrisp",
  seeds: 6,
  colors: 3
 };
 
 for(var i in fruits){
  console.log(i, "--", fruits[i]);
}

console.log(fruits.seeds * fruits.colors); // 18
 

var veggies = {
  type: "Tomatos",
  name: "Valencia",
  seeds: 25,
  colors: 7
};


console.log(veggies.seeds * veggies.colors); // 175

for(var i in veggies){
  console.log(i, "--", veggies[i]);
}


// node
console.log(fruits.colors * veggies.colors); // 21
console.log(veggies.seeds * fruits.seeds); // 150


