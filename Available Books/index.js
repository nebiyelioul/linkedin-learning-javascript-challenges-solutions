// ****** class component ****** //
class Book{
   constructor(title, author, isbn, numOfcopies)
   {
      this.title = title;
      this.author = author;
      this.isbn = isbn;
      this.numOfcopies = numOfcopies;
   }

   getAvailablity()
   {
      if(this.numOfcopies == 0)
         console.log("Out of stock");
      else if(this.numOfcopies <10)
         console.log("low stock");
      else
         console.log("in stock");
   }

   sell(numOfSold = 5)
   {
      this.numOfcopies -= numOfSold;
   }

   restock(numOfBook = 5)
   {
      this.numOfcopies += numOfBook;
   }
}

const book = new Book("my discoveries", "neb", 1234, 5);
book.getAvailablity();
book.sell(2);
book.getAvailablity();
book.restock(15);
book.getAvailablity();
book.sell();


// ****** function component *******//

// function Book(title, author, isbn, numOfcopies)
// {
//    this.title = title;
//    this.author = author;
//    this.isbn = isbn;
//    this.numOfcopies = numOfcopies;

//    this.getAvailablity = function(){
//       if(this.numOfcopies == 0)
//          console.log("Out of stock");
//       else if(this.numOfcopies <10)
//          console.log("low stock");
//       else
//          console.log("in stock");
//    }

//    this.sell = function(numOfSold){
//       if(numOfSold === undefined)
//          numOfSold = 5;

//       this.numOfcopies -= numOfSold;
//    } 

//    this.restock = function(numOfBook){
//       if(numOfBook === undefined)
//          numOfBook = 5;
//       this.numOfcopies += numOfBook;
//    }

// }
