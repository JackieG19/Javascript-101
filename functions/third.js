function carRental(qty, per){
    
    var price = [34, 45, 67];
    
    var days = [10, 20, 30];
    
    var result = price[qty] * days[per];
    
    console.log(result);
    
    return result;
}

console.log(carRental([1], [0]))