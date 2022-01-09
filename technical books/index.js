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
      if(this.numOfcopies < 1)
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

class TechnicalBooks extends Book{
   constructor(title, author, isbn, numOfcopies, edition){
      super(title, author, isbn, numOfcopies);
      this.edition = edition;
   }

   getEdition(){
      console.log(this.edition);
   }
}

const techBooks = new TechnicalBooks("my discoveries", "neb", 1234, 5, 2);
techBooks.getAvailablity();
techBooks.sell(10);
techBooks.getAvailablity();
techBooks.restock(15);
techBooks.getAvailablity();
techBooks.getEdition();
