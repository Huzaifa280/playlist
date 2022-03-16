// Complete Day 1 goals here
let kendrick = {
	name: "Family Ties",
	songArtist: "Kendrick Lamar",
	songImages: "https://cdn.glitch.global/ad88b53d-60a2-44c4-81ee-d8e46f67cc97/maxresdefault%20(1).jpg?v=1645661962506", 
  songLinks: "https://www.youtube.com/watch?v=v6HBZC9pZHQ",
  songLength: "4:20",
};

let cordae = {
	name: "Super",
	songArtist: "Cordae",
	songImages: "https://cdn.glitch.global/ad88b53d-60a2-44c4-81ee-d8e46f67cc97/c608fe939ab56e51934fbf2be414b760.998x998x1.png?v=1645662017774", 
  songLinks: "https://www.youtube.com/watch?v=rs0K-KDH09s",
  songLength: "3:04",
};

let cole = {
	name: "pride.is.the.devil",
	songArtist: "J.Cole",
	songImages: "https://cdn.glitch.global/ad88b53d-60a2-44c4-81ee-d8e46f67cc97/maxresdefault%20(2).jpg?v=1645662081778", 
  songLinks: "https://www.youtube.com/watch?v=ZLX-GY0dJgc",
  songLength: "3:39",
};

let a$ap = {
	name: "Praise The Lord",
	songArtist: "A$AP ROCKY",
	songImages: "https://cdn.glitch.global/ad88b53d-60a2-44c4-81ee-d8e46f67cc97/81ADlEPj9sL._SS500_.jpg?v=1645662125877", 
  songLinks: "https://www.youtube.com/watch?v=Kbj2Zss-5GY",
  songLength: "3:47",
};

let songs = ["Family Ties","Super","pride.is.the.devil","Praise The Lord"]

let songArtist= ["Kendrick Lamar","Cordae","J.Cole","A$AP ROCKY"]

let songImages = ["https://cdn.glitch.global/ad88b53d-60a2-44c4-81ee-d8e46f67cc97/maxresdefault%20(1).jpg?v=1645661962506", 
                  "https://cdn.glitch.global/ad88b53d-60a2-44c4-81ee-d8e46f67cc97/c608fe939ab56e51934fbf2be414b760.998x998x1.png?v=1645662017774",
                 "https://cdn.glitch.global/ad88b53d-60a2-44c4-81ee-d8e46f67cc97/maxresdefault%20(2).jpg?v=1645662081778", 
                  "https://cdn.glitch.global/ad88b53d-60a2-44c4-81ee-d8e46f67cc97/81ADlEPj9sL._SS500_.jpg?v=1645662125877"]
let songLinks = [
  "https://www.youtube.com/watch?v=v6HBZC9pZHQ", "https://www.youtube.com/watch?v=rs0K-KDH09s",
  "https://www.youtube.com/watch?v=ZLX-GY0dJgc", "https://www.youtube.com/watch?v=Kbj2Zss-5GY"]

let songLength = ["4:20", "3:04", "3:39", "3:47"];

let info = ["firstSong", "secondSong", "thirdSong", "fourthSong"];

function displaySongInfo() {
  // Complete the Day 2 goals inside this function
  
songs.forEach (function(song){
  $(".songs").append("<p>" + song + "</p>");
});
songArtist.forEach (function(creator){
  $(".artists").append("<p>" + creator + "</p>");
});
songImages.forEach (function(image){
  $(".images").append(`<img src="${image}">`);
});
  songLinks.forEach (function(link){
  $(".links").append(`<a href="${link}">Play song</a>`);
});
   songLength.forEach (function(time){
  $(".lengths").append("<p>" + time + "</p>");
});
}



function emptySongInfo() {
  /* this function empties the divs each time the button is 
  clicked so that your playlist does not repeatedly add the data
  too many times. Try commenting out this function call to see 
  what happens without it! */
  $(".songs").empty();
  $(".images").empty();
  $(".artists").empty();
  $(".lengths").empty();
  $(".links").empty();
}

function addSongInfo() {
  
  let song = $(".title").val();
  songs.push(song);
  
   let name = $(".artist").val();
  songArtist.push(name);

  let pic = $(".image").val();
  songImages.push(pic);
  
  let adress = $(".link").val();
  songLinks .push(adress);
  
}


$(".add").click(function () {
  emptySongInfo();
  addSongInfo();
  displaySongInfo();
});

displaySongInfo();
