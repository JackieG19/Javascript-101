var fruits = [ "Pomme", "Apple", "apricot_small", "Apricots", "avocado_small", "Avocado", "banana_small", "Banana", 
              "blackcurrant_small", "Blackcurrant", "blueberries_small", "Blueberries", "breadfruit_small", "Breadfruit", 
              "cantaloupe_small", "Cantaloupe", "carambola_small", "Carambola", "cherimoya_small", "Cherimoya", 
              "cherries_small", "Cherries", "clementine_small", "Clementine", "coconutmeat_small", "Coconut Meat", 
              "Cranberriesforwebsite", "Cranberries", "custardapple_small", "Custard-Apple", "datefruit_small", "Date Fruit", 
              "durian_samll", "Durian", "elderberries_small", "Elderberries", "feijoa_small", "Feijoa", "fig_small", "Figs", 
              "gooseberries_small", "Gooseberries", "grapefruit_samll", "Grapefruit", "grapes_small", "Grapes", "guava_small", 
              "Guava", "honeydewmelon_small", "Honeydew Melon", "jackfruit_small", "Jackfruit", "javplum_small", "Java-Plum", 
              "jujube_small", "Jujube Fruit", "kiwi_small", "Kiwifruit", "kumquat_small", "Kumquat", "lemon_small", "Lemon", 
              "lime small", "Lime", "longan_small", "Longan", "loquat_small", "Loquat", "lychee_small", "Lychee", 
              "mandarin_small", "Mandarin", "mango_small", "Mango", "mangosteen_small", "Mangosteen", "mulberries_small", 
              "Mulberries", "nectarine_small", "Nectarine", "olives_small", "Olives", "orange_small", "Orange", "papaya_small",
              "Papaya", "passionfruit_small", "Passion Fruit", "peach_small", "Peaches", "pear_small", 
              "Pear", "persimmon_small", "Persimmon – Japanese", "pineapple_small", "Pineapple", "pitanga_small", "Pitanga", 
              "plantain_small", "Plantain", "plums_small", "Plums", "pomegranate_small", "Pomegranate", "Prickly Pear", 
              "prunes_small", "Prunes", "pummelo_small", "Pummelo", "quince_small", "Quince", "raspberries_small", 
              "Raspberries", "rhubarb_small", "Rhubarb", "roseapple_small", "Rose-Apple", "sapodilla_small", "Sapodilla", 
              "sapote_small", "Sapote, Mamey", "soursop_small", "Soursop", "strawberries_small", "Strawberries", 
              "sugarapple_small", "Sugar-Apple", "tamarind_small", "Tamarind", "tangerine_small", "Tangerine", 
              "watermelon_small", "Watermelon"];

for(var i = 0; i < fruits.length; i++){

    //if (in the fruits array find the index word "small") then indexOf will not be -1
    if(fruits[i].indexOf("small") != -1){
    
        // from the i position is "small" remove 1 said item
        fruits.splice(i, 1);
    }
    
    // else if (in fruits array find the index word "samll" then indexOf will not be -1)
    else if(fruits[i].indexOf("samll") != -1){
    
        // from the i position is "samll" remove 1 said item
        fruits.splice(i, 1);
    }
}
console.log(fruits);
