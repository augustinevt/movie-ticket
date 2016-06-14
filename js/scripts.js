var movies = { moth: { showings: [{time: "10:45", price: "$12.00"}, {time: "11:52", price: "$12.00"}, {time: "12:45", price: "$12.00"}], rating: "R", title: "Moth"}};

function Ticket(title, rating, showTime, price) {
  this.title = title;
  this.rating = rating;
  this.showtime = showTime;
  this.price = price;
}

function findMovieInfo(title, time) {
  var ticketArray = [];
  if (movies.hasOwnProperty(title)) {
     var movie = movies[title];
    //  var title = movie["title"];
    //  var rating = movie['rating'];
     var showings = movie['showings'];
     ticketArray.push(movie["title"], movie['rating']);

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




$(function() {

  $("#ticketForm").submit(function(e) {
    e.preventDefault();
    var movie = $('#movie').val();
    var time = $('#time').val();

    var info = findMovieInfo(movie, time);

    var title = info[0];
    var rating = info[1];
    var showTime = info[2];
    var price = info[3];

    var ticket = new Ticket(title, rating, showTime, price);

    $("#output").append("<h1>" + ticket.title + "</h1>", "<p>" + ticket.rating + "</p>", "<p>" + ticket.showtime + "</p>", "<p>" + ticket.price + "</p>");
    $("#output").show();
    $("#ticketForm").toggle();
    console.log(ticket);


  });


});
