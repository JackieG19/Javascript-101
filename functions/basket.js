function basket(frut, vege){
    var fruits = ["apple", "pear", "plum", "kiwi", "avocado"];

    var veggie = ["tomato", "broccolio", "carrot", "cumber", "zuchini"];
    
    var result = "I ate a " + fruits[frut] + " and a " + veggie[vege] + ".";
    
    console.log(result);
    
    return result;
}

console.log(basket([1], [3]));