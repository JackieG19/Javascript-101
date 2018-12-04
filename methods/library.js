var library = {
    name: "Providencen Public Library",
    address: "150 Empire St, Providence, RI 02903",
    booksAvailable: ["Oliver Twist by Charles Dickens", "Divine Comedy by Dante Alighieri", "Monster by Walter Dean Myers", "The Great Gatsby by F. Scott Fitzgerald", "Library of Souls by Ransom Riggs"],
    booksCheckedOut: [],
    daysOfCheckOut: [5, 8, 10, 6, 12],
    
    numOfBooksAvailable: function() {
        return this.booksAvailable.length; 
        // return an integer of 5 books available
    },
    
    numOfDaysForCheckout: function() {
        return this.daysOfCheckOut.length;
        // returns an integer of 5 different days to check out a book
    },
    
    
    checkOutBook: function(){
        if(this.numOfBooksAvailable() > 0) {
            
            // will select a random book to check out
<<<<<<< HEAD
            var checkOut =  this.booksAvailable[Math.floor(Math.random()*this.booksAvailable.length)];
            this.booksCheckedOut = this.booksCheckedOut.concat(this.booksAvailable.splice(this. booksAvailable.indexOf(checkOut), 1));
=======
            var checkOut =  this.booksAvailable[Math.floor(Math.random()*this.booksAvailable.length)]; 
            // ex. Oliver Twist by Charles Dickens will be checked out
            
            this.booksCheckedOut = this.booksCheckedOut.concat(this.booksAvailable.splice(this. booksAvailable.indexOf(checkOut), 1));
            // this becomes the new arrays:
            // ex. ["Divine Comedy by Dante Alighieri", "Monster by Walter Dean Myers", "The Great Gatsby by F. Scott Fitzgerald", "Library of Souls by Ransom Riggs"]
            // booksCheckedOut: ["Oliver Twist by Charles Dickens"]
>>>>>>> 909a7e0dbce68b530d5ac30e5777929f727e61ef
        }
    },
    
    checkOutdays: function() {
        if(this.numOfDaysForCheckout() > 0){
<<<<<<< HEAD
            var daysCheckedOut = this.daysOfCheckOut[Math.floor(Math.random()*this.daysOfCheckOut.length)];
            return daysCheckedOut;
        }
    }
    
};
=======
            // will pick a random of days the book will be checked out for
            var daysCheckedOut = this.daysOfCheckOut[Math.floor(Math.random()*this.daysOfCheckOut.length)]; 
            return daysCheckedOut; // ex. Oliver Twist by Charles Dickens will be checked out for 8 days
        }
    }
    
};
>>>>>>> 909a7e0dbce68b530d5ac30e5777929f727e61ef
