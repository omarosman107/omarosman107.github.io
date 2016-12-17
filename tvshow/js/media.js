function addJS(url) {
   var s = document.createElement('script'); // Create a script element
   s.type = "text/javascript"; // optional in html5
   s.async = true; // asynchronous? true/false
   s.src = url;
   var fs = document.getElementsByTagName('script')[0]; // Get the first script
   fs.parentNode.insertBefore(s, fs);
};

// CWTV Fetch 
function fetchcwjson(value) {
   var lastSegment = value.split('/').pop();
   var stripped = lastSegment.substring(6);
   $.getJSON("https://query.yahooapis.com/v1/public/yql?q=select%20videos.variantplaylist.uri%20%2C%20assetFields.seriesName%20%2C%20assetFields.title%20%2C%20assetFields.description%20from%20json%20where%20url%3D%27http%3A%2F%2Fmetaframe.digitalsmiths.tv%2Fv2%2FCWtv%2Fassets%2F" + stripped + "%2Fpartner%2F154%3Fformat%3Djson%27%20%20&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&_maxage=604800&callback=", function(data) {
      finalurl = data.query.results.json.videos.variantplaylist.uri;
      console.log(finalurl)
      showname.innerHTML = data.query.results.json.assetFields.seriesName + " - " + data.query.results.json.assetFields.title
      showdesc.innerHTML = data.query.results.json.assetFields.description
      document.getElementById('downloader').href = finalurl
      player.src({
         "type": "application/x-mpegURL",
         "src": finalurl
      });
      player.play();
   });
}
// ABC Fetch 
var sessionKey
function fetchabcjson(value) {
   var xhttp = new XMLHttpRequest();
   xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
         html = this.responseText;
         var showidjson = JSON.parse(this.responseText).query.results.div['data-video-id']
         console.log(showidjson)
            // console.log(parseHTML(html).getElementById('playerContainer').getAttribute('data-video-id'))
            //  var showid = parseHTML(html).getElementById('playerContainer').getAttribute('data-video-id')

         $.getJSON("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20json%20where%20url%3D%22http%3A%2F%2Fapi.contents.watchabc.go.com%2Fvp2%2Fws%2Fs%2Fcontents%2F3000%2Fvideos%2F001%2F001%2F-1%2F-1%2F-1%2F" + showidjson + "%2F-1%2F-1.json%22%20&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=", function(data) {
            showname.innerHTML = data.query.results.json.video.show.title + "- " + data.query.results.json.video.title
            showdesc.innerHTML = data.query.results.json.video.longdescription
       


         $.post("https://api.entitlement.watchabc.go.com/vp2/ws-secure/entitlement/2020/authorize.json", {
            video_type: "lf",
            brand: "001",
            device: "001",
            video_id: showidjson
         }, function(sessionkey, status) {
            sessionKey = sessionkey.uplynkData.sessionKey
                              console.log(sessionKey)
                                   videourl = data.query.results.json.video.assets.asset.value + "?" + sessionKey;
            document.getElementById('downloader').href = videourl
            console.log(videourl)

                  player.src({
               "type": "application/x-mpegURL",
               "src": videourl
            });
            player.play();

         });

      
         });
      }
   };
   if (currenturl.includes('http')) {
      value = currenturl

   }

   xhttp.open("GET", 'https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20html%20where%20url%3D%27' + value + '%27%20and%20compat%3D"html5"%20and%20xpath%3D%27%2F%2Fdiv%5B%40class%3D"datgPlayer%20m-videoplayer-container"%5D%27&format=json&callback=', true);
   xhttp.send();

}


// FOX Fetch
function fetchfoxjson(value) {
   var x2js = new X2JS();
   console.log(value)
   $.getJSON("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20html%20where%20url%3D%27" + value + '%27%20and%20compat%3D"html5"%20and%20xpath%3D"%2F%2Fh3%5B%40class%3D%27video-show-title%27%5D%2Fa%7C%2F%2Fh3%5B%40class%3D%27video-title%27%5D"&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&_maxage=2592000&callback=', function(data) {
      console.log(data.query.results.a.content, data.query.results.h3.content)
      $.getJSON("https://feed.theplatform.com/f/fox-mobile/fullepisodes?validFeed=false&types=none&byCustomValue=%7Bseries%7D%7B" + data.query.results.a.content + "%7D&count=true&range=1-50&adapterParams=mvpd%253D&byContent=byFormat=m3u%7Cmpeg4&form=json", function(episodecode) {
         var cuttitle = data.query.results.h3.content.slice(0, -1)
         console.log(cuttitle)
         for (var i = 0; i < episodecode.entries.length; i++) {
            if (episodecode.entries[i].title == cuttitle) {
               console.log(episodecode.entries[i].media$content[9]["plfile$url"])
               showname.innerHTML = episodecode.entries[i]["fox$series"] + "- " + episodecode.entries[i].title
               showdesc.innerHTML = episodecode.entries[i].description
               var xhttp = new XMLHttpRequest();
               xhttp.onreadystatechange = function() {
                  if (this.readyState == 4 && this.status == 200) {
                     xml = this.responseText;
                     var jsonfirst = JSON.stringify(x2js.xml_str2json(this.response))
                     json = JSON.parse(jsonfirst);
                     var videofile = json.smil.body.seq.par["0"].video._src
                     console.log(videofile)
                     document.getElementById('downloader').href = videofile
                     player.src({
                        "type": "application/x-mpegURL",
                        "src": videofile
                     });
                     player.play();
                     return videofile
                  }
               };
               xhttp.open("GET", episodecode.entries[i].media$content[9]["plfile$url"], true);
               xhttp.send();
            }
         }
      });
   });
}
// WatchCartoon Fetch
function fetchcartoonjson(value) {
   //	var "link1" = "select * from html where url="
   //	var "link2" = ' and compat="html5" and xpath="//a"'
   $.post("https://developer.yahoo.com/yql/console/proxy.php", {
      format: "json",
      q: "link1" + value + "link2"
   }, function(data, status) {
      console.log(data)
   });
}
// Netflix Fetch
function fetchnetflixjson(value) {
   console.log(value)
   return value;
}
// CBS Fetch
function fetchcbsjson(value) {
   if (value.includes('http')) {
      searchValue = value.split('/')[6]
   } else {
      searchValue = value.split('/')[4]
   }
   if (value.slice(-1) == "/") {
      value = value.slice(0, -1)
   }
   console.log(searchValue)
   $.getJSON("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20html%20where%20url%3D'" + value + "%2F'%20and%20compat%3D%22html5%22%20and%20xpath%3D%22%2F%2Fa%5B%40class%3D'show-title'%5D%7C%2F%2Fdiv%5B%40class%3D'title'%5D%7C%2F%2Fhead%2Fmeta%5B%40property%3D'og%3Adescription'%5D%22&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&_maxage=2592000&callback=", function(data) {
      showname.innerHTML = data.query.results.a[0].content + "- " + data.query.results.div.content
      showdesc.innerHTML = data.query.results.meta.content
      videourl = "https://link.theplatform.com/s/dJ5BDC/media/guid/2198311517/" + searchValue + "?mbr=true&manifest=m3u&form=json"
      document.getElementById('downloader').href = videourl
      player.src({
         "type": "application/x-mpegURL",
         "src": videourl
      });
      player.play();
   });
}