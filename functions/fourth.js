function cars(qty, model){
    
    var market = {
        price: qty
    };
    
    var carModel = {
        car: model
    };
    
    var result = market.price * carModel.car;
    console.log(result);
    return result;
}

console.log(cars(1, 2));