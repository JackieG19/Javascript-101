function paper(price1, price2){
    
    var OfficeMax = {
       color: "white",
       sheets: price2,
       pounds: 2
    };
   
    var Staple = {
       color: "white",
       sheets: price1,
       pounds: 2
    };
    
    // finding the differ amount between the two paper store
    var priceDiffer =  OfficeMax.sheets - Staple.sheets;
    
    console.log(priceDiffer);

    
    return priceDiffer;
}

console.log(paper(54.49, 56.99));

// $2.50 difference
