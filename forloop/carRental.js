var company = ["Enterprise", "Hertz", "Zipcar", "Avis"];
var address = ["1935 Mineral Spring Ave, North Providence", "400 Silver Spring St, Providence", "61 Grove St, Providence", "1 Dorrance St, Providence"];
var Economy = ["Chevrolet Spark", "Ford Fiesta Sedan", "Mitsubishi Mirage", "Hyundai Accent"];
var rentPerDay = [40, 55, 38, 61];
var howManyDays = [2, 11, 5, 7];
var rentedOutPerDay = [10, 8, 14, 9];


var revenue1 =  rentPerDay[0] * howManyDays[0] * rentedOutPerDay[0];
console.log("Revenue for", company[0], "at", address[0], "for a", Economy[0], "total sale is", revenue1, "dollars");


var i;
for(i = 0; i < rentedOutPerDay.length; i++){
    var revenue = rentPerDay[i] * howManyDays[i] * rentedOutPerDay[i];
    console.log("Revenue for", company[i], "at", address[i], "for a", Economy[i], "total sale is", revenue, "dollars");
}

