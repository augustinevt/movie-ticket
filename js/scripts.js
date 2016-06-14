var tickets = [];
var movies = {
batman: { showings: [ { time: "10:45", price: "$12.00"}, {"10:45" : "$12.00"}, {"12:05" :
"$25.00"} ], rating: "PG"},
wessyfilm: { showings: [ {time: "10:45", price: "$12.00"}, {"10:45" : "$12.00"}, {"12:05" :
"$25.00"} ], rating: "R"}
}

function Ticket(time, price) {
  // this.title = title;
  this.time = time;
  this.price = price;
  // this.rating = rating;
}

function movieMatch(userMovie, userTime) {
  debugger;
  for (movie in movies) {



    if (movie === userMovie) {

      var batman = movies[movie].showings;

      console.log(batman);



      batman.forEach(function(showing) {
        // if (showing.time === userTime) {
          var showTime = showing.time;
          var showPrice = showing.price;
          var newTicket = Ticket(showTime, showPrice);
          tickets.push(newTicket);
          console.log(tickets);
        // }
      });
    }else {
      alert("This movie doesn't exist");
    }
  }
}

// // # for movie in movies
// //   # see if user input matches key
// //     # if true puts the matching object into a ticket array/object
// //   # once we have a matched object
//     # we will see if user time intput matches a time in the movies time array
//       # if matches take put in ticket obj/array
//   # if user age is less 17 and movie rating is R, display warning abort ticket

$(function() {

  $("#ticketForm").submit(function(e) {
    e.preventDefault();
    var movie = $('#movie').val();
    var time = $('#time').val();

    movieMatch(movie, time);

  });


});
