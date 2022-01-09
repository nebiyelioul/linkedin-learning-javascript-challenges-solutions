class Movies{
   constructor(title, director, genre, release_year, rating){
      this.title = title;
      this.director = director;
      this.genre = genre;
      this.release_year = release_year;
      this.rating = rating;
   }

   getOverview(){
      console.log(this.title + " a "+ this.genre+ " film was directed by "+
             this.director+" was released in "+ this.release_year+"."+
             " It received a rating of "+this.rating);
   }
}

const spiderMan = new Movies("spiderman", "sam rai", "Action", 2002, 87);
const noTimeTodie = new Movies("no time to die", "Cary Joji Fukunaga", "Action", 2021, 83);

spiderMan.getOverview(); 
noTimeTodie.getOverview();