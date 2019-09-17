# LIRI Bot 

## Overview
In this assignment, you will make LIRI. LIRI is like iPhone's SIRI. However, while SIRI is a Speech Interpretation and Recognition Interface, LIRI is a Language Interpretation and Recognition Interface. LIRI will be a command line node app that takes in parameters and gives you back data.

## What Did I Use?
Javascript
Axios
Moment
DotEnv
OMDB API
Bands in Town API
Node-Spotify-API

## Organization and How to Use

The application is essentially split up in to 4 different parts. 

Part 1: Movie searcher.  By typing 'node liri.js movie-this _whatever movie you want_ you are able to search for detailed information on the movie.  
    You can see: Title, Year, Country, Language, Plot, Actors, IMDB Rating, Rotten Tomatoes Rating

    Information is taken from the argument that the user inputs and send to OMDB API for information.  The information is then returned and consoled into Bash. 


Part 2: Spotify Song Finder.  By typing 'node liri.js spotify-this-song _whatever song you want_ you are able to search for a song on spotify.  
    You can see: Song Title, Album Title, Artist, Preview URL

    Information is again taken from the argument from the user and used to fill an a query for the spotify API.  


Part 3: Concert Finder.  By typing in 'node liri.js concert-this _whatever concert youre interested in_ you can find an event or concert for a band/artist you are          interested in.  This will show you the Venue, the Location, and the Date of the event. 

    By combining OMBD API and Moment API we can take a band name from the user and give the wanted information. 


Part 4: Random.  One of the 3 earlier parts will run for the user at random. 



![Example](/Images/liribotexample.png)