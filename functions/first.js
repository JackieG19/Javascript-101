function cars(qty, price){
    var carStore = {
        qty: qty,
        price: price
    };
    
    var result = carStore.qty * carStore.price;
    
    return result;
}

console.log(cars(4,10));

