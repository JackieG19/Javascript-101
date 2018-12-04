var months = ["jan", "feb", "mar", "apr", "may", "jun"]

months.splice(months.indexOf('jan'));
// [ 'jan', 'feb', 'mar', 'apr', 'may', 'jun' ]

console.log(months); // [] 
// return an empty array because the splice method was no specific after indexOf

months.splice(months.indexOf('jan'), 1); // [ 'jan' ]

var deleteAmonth = months.splice(months.indexOf('jan'), 1);
console.log(deleteAmonth); //["jan"]

console.log(months);
// [ 'feb', 'mar', 'apr', 'may', 'jun' ]

deleteAmonth.concat(months.splice(months.indexOf('feb'), 1)); // [ 'feb' ]

deleteAmonth // [] empty array

var deletedMonths = []; 

deletedMonths = deletedMonths.concat(months.splice(months.indexOf('feb'), 1)); // [ 'feb' ]

deletedMonths = deletedMonths.concat(months.splice(months.indexOf('jan'), 1)); // [ 'feb', 'jan' ]