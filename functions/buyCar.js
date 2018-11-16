function carBuy(priceValue, numOfcar){
    
    var market = {
        store: "Toyota",
        price: priceValue,
        color: "black",
        size: "Economy"
    };
    
    var numCar = {
        inStock: numOfcar,
        outOfStock: 12,
        pending: 60
    };
    
    var result = market.price * numCar.numOfcar;
    console.log(result);
    return result;
}

console.log(carBuy(19500, 2));