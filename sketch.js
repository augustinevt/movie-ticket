var movies = { moth: { showings: [{time: "10:45", price: "$12.00"}, {time: "11:52", price: "$12.00"}, {time: "12:45", price: "$12.00"}], rating: "R", title: "Moth"}};

function findMovieInfo(title, time) {

  var ticketArray = [];
  if (movies.hasOwnProperty(title)) {
     var movie = movies[title];
     var title = movie["title"];
     var rating = movie['rating'];
     var showings = movie['showings'];
     var showTimes;
     var price;
     ticketArray.push(title, rating);

     showings.forEach(function(showing) {
        if (time === showing["time"]) {
        //  showTime = showing['time'];
        //  price = showing['price'];
         ticketArray.push(showing['time'], showing['price']);
        }
     });
   console.log(ticketArray);
   return ticketArray;
  }
  
}

findMovieInfo("krab sushi", "12:89");
findMovieInfo("moth", "10:45");
