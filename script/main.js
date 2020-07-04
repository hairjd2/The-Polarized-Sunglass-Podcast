var plays;

function setup() {
  randomMessage();
  $.get({
    url: "script/stats.json",
    dataType: "json",
    error: (xhr, textStatus, error) => {
      console.log("Error!");
      console.log(xhr);
      console.log(textStatus);
      console.log(error);
    },
    success: function(data) {
        console.log("Success!");
        console.log(Object.keys(data.episodes).length);
        loadStats(data);
    }
  });
}

function playit(audioid, imageid) {
    if(document.getElementById(audioid).paused) {
      document.getElementById(audioid).play();
      document.getElementById(imageid).src = "src/pause.png";
    }else {
      document.getElementById(audioid).pause();
      document.getElementById(imageid).src = "src/play.png";
    }
}

function randomMessage() {
    var num = Math.floor(Math.random() * Math.floor(4));
    var messag = document.getElementById("randomMessage");
    switch(num) {
      case 0:
        messag.innerHTML = "Where the girl's booties clap and Shakira's hips don't cap!"
        break;
      case 1:
        messag.innerHTML = "Where we don’t drink beer and as the Black Eyed Peas once said, let’s get it started in here!";
        break;
      case 2:
        messag.innerHTML = "Where Maguire works and Lizzo twerks!";
        break;
      case 3:
        messag.innerHTML = "Where crayons are pronounced crayon and we always stick it to the man!";
        break;
      // case 4:
      //   messag.innerHTML = "Where we don’t steal and the batmobile lost a wheel!";
      //   break;
      // case 5:
      //   messag.innerHTML = "Where we record on discord and I broke my motherboard!";
      //   break;
      // case 6:
      //   messag.innerHTML = "Where down by the bay the watermelons grow, and back to our homes we shall not go!";
      //   break;
    }
}

function loadStats(data) {
  document.getElementById("Episode1plays").innerHTML = data.episodes.one.plays;
  document.getElementById("Episode2plays").innerHTML = data.episodes.two.plays;
  plays = data.episodes.one.plays;
}

function like(id) {
  $.get({
    url: "script/stats.json",
    dataType: "json",
    error: (xhr, textStatus, error) => {
      console.log("Error!");
      console.log(xhr);
      console.log(textStatus);
      console.log(error);
    },
    success: function(data) {
        console.log("Success!");
        $.ajax
          ({
              type: "POST",
              //the url where you want to sent the userName and password to
              url: "script/stats.json",
              dataType: 'json',
              //json object to sent to the authentication url
              data: JSON.stringify(data.episodes.one.plays++),
              success: function () {

              }
          });
    }
  });
}
