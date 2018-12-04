var pizza = ["green pepper", "bacon", "onions", "chicken", "pinapple" ]

var itemRemove = [];

itemRemove = itemRemove.concat(pizza.splice(pizza.indexOf(pizza), 1)); // ['pinapple']

console.log(itemRemove); // ['pinapple']
