require("dotenv").config();

let keys = require("./key");
let axios = require("axios");
let moment = require("moment");
let fs = require("fs");
let Spotify = require("node-spotify-api");
let request = require("request");

let spotify = new Spotify({
    id: "6ab6f6a9326c4c9590a99fe063fa8ab2",
    secret: "cbb7019ce1da4e218d6883e42ca0234b"
});
let userSearch = process.argv.splice(3);
let userRequest = process.argv[2];



function userInput() {
    switch (userRequest) {
        case "concert-this":
            concertThis(userSearch);
            break;

        case "spotify-this-song":
            spotifySong(userSearch);
            break;

        case "movie-this":
            movieThis(userSearch);
            break;

        case "do-what-it-says":
            asItSays();
            break;

        default:
            console.log("Please enter valid information");
            break;
    }
};








//Liri needs to take in the follow commands


//concert-this-------------------------------------------------------------------------------------

/*node liri.js concert-this <artist/band name here>
This will search the Bands in Town Artist Events API ("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp") for an artist and render the following information about each event to the terminal:

Name of the venue
Venue location
Date of the Event (use moment to format this as "MM/DD/YYYY") */

 function concertThis(artist) {
    if (userRequest === "concert-this") {
        let artist = "";
        for (var i = 3; i < process.argv.length; i++) {
            band += process.argv[i];
        }
        console.log(artist);
    } else {
        artist = userSearch;
    }

    axios.get("http://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp").then(

        function (response) {
            if (response.data[0].venue != undefined) {
                console.log("Name of Venue: " + response.data[0].venue.name);
                console.log("Venue Location: " + response.data[0].venue.city);

                let eventDate = moment(response.data[0].datetime);
                console.log("Date of Event: " + eventDate.format("MM/DD/YYYY"));
            } else {
                console.log("Sorry - we can't find what you're looking for.");
            }
        }
    ).catch(function (error) {
        console.log(error);
        console.log("Error");
    });
};


  
           /* var data = JSON.parse(body);

                //Get date of show
                var date = data[i].datetime;
                date = moment(date).format("MM/DD/YYYY");
                console.log("Date: " + date);
                //Append data to log.txt

*/






//spotify-this-song ----------------------------------------------------------------------------------
/* node liri.js spotify-this-song '<song name here>'

This will show the following information about the song in your terminal/bash window

Artist(s)
The song's name
A preview link of the song from Spotify
The album that the song is from */


function spotifySong(userSearch) {

    let song;
    if (userSearch === "") {
        song = "Wilson Phillips Hold On";
    } else {
        song = userSearch;
    }

    spotify.search({
        type: "track",
        query: song
    }, function (error, data) {
        if (error) {
            return console.log("Error: " + error);
        } else {
            console.log("Artist: " + data.tracks.items[0].artists[0].name);
            console.log("Song Title: " + data.tracks.items[0].name);
            console.log("Album: " + data.tracks.items[0].album.name);
            console.log("Preview of song: " + data.tracks.items[3].preview_url);
        }
    });
};








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


    if (userSearch === undefined) {
        movie = "Mr. Nobody";
        console.log("Go watch Mr. Nobody");
    } else {
        movie = userSearch;
    };

    let queryUrl = "http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy";


    axios.get(queryUrl).then(
        function (response) {
            if (response.data.Title != undefined) {
                console.log("Title: " + response.data.Title);
                console.log("Release Year: " + response.data.Year);
                console.log("IMDB Rating " + response.data.imdbRating);
                // console.log("Rotten Tomatoes Rating: " + response.data);
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

userInput();