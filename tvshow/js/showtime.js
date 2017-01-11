  var googleurl

  function pad(n) {
     return (n < 10) ? ("0" + n) : n;
  }
  var spinner = document.getElementById('spinner')
  var finalurl
  var clickablelink
  var div = document.getElementById('tablediv')
  var googlejson
  var tempel = ""
  var i
  var progress
  var finishjson
  fetchshows()

  function mark(id) {
     var details = {
        episode_id: id,
        access_token: accesstoken
     };
     var formBody = [];
     for (var property in details) {
        var encodedKey = encodeURIComponent(property);
        var encodedValue = encodeURIComponent(details[property]);
        formBody.push(encodedKey + "=" + encodedValue);
     }
     formBody = formBody.join("&");
     var request = {
        method: 'POST',
        headers: {
           'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
        },
        body: formBody
     };
     fetch("https://api.tvshowtime.com/v1/checkin", request).then(function(res) {
        console.log(res)
     })
     tempel = ""
     fetchshows();
  }

  function fetchshows() {
     fetch('https://api.tvshowtime.com/v1/to_watch?access_token=' + accesstoken)
.then(function(response) {
  return response.json();}).then(function(json) {
            finishjson = json
        for (var i = 0; i < json.episodes.length; i++) {
           var showprog = (finishjson.episodes[i].show.seen_episodes * 1 / finishjson.episodes[i].show.aired_episodes * 1)
           console.log(showprog)
           var mathleft = (finishjson.episodes[i].show.aired_episodes * 1 - finishjson.episodes[i].show.seen_episodes * 1 - 1)
           if (mathleft == 0) {
              mathleft = "Last!"
           }
           if (mathleft >= 1) {
              mathleft = "+" + mathleft
           }
           if (finishjson.episodes[i].show.aired_episodes * 1 - finishjson.episodes[i].show.seen_episodes * 1 == finishjson.episodes[i].show.aired_episodes * 1) {
              progress = "display:none;"
           }
           tempel = tempel + ' <tr><th scope="row"><a href="' + "player.html?" + finishjson.episodes[i].show.name.replace("(2015)", "") + " , " + finishjson.episodes[i].name + '"><div class="showimg"><img width="100%" src="' + finishjson.episodes[i].show.images.poster["0"] + '" ><div class="w3-progress-container"><div class="w3-progressbar" style="color:#f8d637;width:' + showprog * 100 + '%;' + progress + '"></div></a></div></div></th><td><h1>' + finishjson.episodes[i].show.name + '</h1><p class="episodenum">' + "S" + pad(finishjson.episodes[i].season_number) + "E" + pad(finishjson.episodes[i].number) + '</p><h5 class="epileft">' + mathleft + '</h5><h5>' + finishjson.episodes[i].name + '</h5><a data-target="#loadvideo" href="' + "player.html?" + finishjson.episodes[i].show.name.replace("(2015)", "") + " , " + finishjson.episodes[i].name + '" class="btn btn-outline-success"><i class="fa fa-play" aria-hidden="true"></i></a><a onclick="mark(' + finishjson.episodes[i].id + ')" class="btn btn-outline-success"><i class="fa fa-check" aria-hidden="true"></i></a></td><td></td></tr>';
        }
        div.innerHTML = tempel
        spinner.style.display = "none";
});
  }