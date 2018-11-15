function cars(qty, model){
    
    var price = [34, 45, 67];
    
    var carModel = {
        model2: model,
    };
    
    var result = price[qty] * carModel.model2;
    console.log(result);
    return result;
}

console.log(cars([1], 2));
