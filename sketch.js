var movies = { moth: { showings: [{time: "10"}, {time: "11"}, {time: "12"}], rating: "R", title: "Moth"}};

function findMovieInfo(title, time) {
  if (movies.hasOwnProperty(title)) {
    console.log("true");
     var movie = movies[title];
     var title = movie["title"];
     var rating = movie['rating'];
     var showings = movie['showings'];

    //  var time = showings['time'];

     showings.forEach(function(showing) {
      //  if (time === showing["time"]) {
         alert(showing['time']);
      //  }
     });


    // if (showings.hasOwnProperty(time)) {
    //   console.log(showings.time);
    // }

    // showingsArray.forEach(function(showing) {
    //   console.log(showing);
    // });
  }
}

findMovieInfo("krab sushi", "12:89");
findMovieInfo("moth", "10");
