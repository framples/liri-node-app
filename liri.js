require("dotenv").config();

let keys = require("./key");
let axios = require("axios");
let moment = require("moment");
let fs = require("fs");
let Spotify = require("node-spotify-api");
let spotify = new Spotify("keys.spotify");

let userSearch = process.argv[3];
let userRequest = process.argv[2];

//Liri needs to take in the follow commands


//concert-this-------------------------------------------------------------------------------------

/*node liri.js concert-this <artist/band name here>
This will search the Bands in Town Artist Events API ("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp") for an artist and render the following information about each event to the terminal:

Name of the venue
Venue location
Date of the Event (use moment to format this as "MM/DD/YYYY") */




//spotify-this-song ----------------------------------------------------------------------------------
/* node liri.js spotify-this-song '<song name here>'

This will show the following information about the song in your terminal/bash window

Artist(s)
The song's name
A preview link of the song from Spotify
The album that the song is from */








//movie-this-----------------------------------------------------------------------------------------------
/* node liri.js movie-this '<movie name here>'


This will output the following information to your terminal/bash window:
  * Title of the movie.
  * Year the movie came out.
  * IMDB Rating of the movie.
  * Rotten Tomatoes Rating of the movie.
  * Country where the movie was produced.
  * Language of the movie.
  * Plot of the movie.
  * Actors in the movie. */

function movieThis(movie) {

    let movie;
    if (userSearch === undefined) {
        movie = "Mr. Nobody";
        console.log("Go watch Mr. Nobody");
    } else {
        movie = userSearch;
    };

var queryUrl = "http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy";
console.log(queryUrl);

axios.get(queryUrl).then(
    function (response) {
        if (response.data.Title != undefined) {
        console.log("Title: " + response.data.Title);
        console.log("Release Year: " + response.data.Year);
        console.log("IMDB Rating " + response.data.imdbRating);
        console.log("Rotten Tomatoes Rating: " + response.data.tomatoRating);
        console.log("Produced in: " + response.data.Country);
        console.log("Language: " + response.data.Language);
        console.log("Plot: " + response.data.Plot);
        console.log("Actors: " + response.data.Actors);
    }
}
    ).catch(function (error) {
        
    console.log(error);
    console.log("Error");
    });
}

    







  //do-what-it-says--------------------------------------------------------------------------------------------
/* node liri.js do-what-it-says


Using the fs Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.


It should run spotify-this-song for "I Want it That Way," as follows the text in random.txt.


Edit the text in random.txt to test out the feature for movie-this and concert-this. */