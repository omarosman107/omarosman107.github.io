// var x2js = new X2JS();
var player=videojs('LS');
player.ready(function() {
  this.hotkeys({
    volumeStep: 0.1,
    seekStep: 5,
    enableModifiersForNumbers: false
  });
});





//jwplayer.defaults.preload = "auto"
//jwplayer.defaults.autostart = "true"
function bg(url){
   document.getElementById('blockLoader').style.background = 'url(' +url+ ")"

}
function meta(s,e,a){
  document.getElementById('season').innerHTML = s
  document.getElementById('episode').innerHTML = e
  document.getElementById('airdate').innerHTML = a
}
function loadURL(url,type){

      jwplayer("myElement1").setup({
        cast:{},
  file: url,
  width: "100%",
  aspectratio: "16:9",
type:type
});


resume();
}
var played = false;

function resumePlayback(state){
  if (played == false) {


    document.getElementsByClassName('resume')[0].style.display = 'none'

      document.getElementsByClassName('resume')[0].style.opacity = 0
if (state == false) {
  return ;
}

 


                    if(localStorage[window.location.search]){

                    if(parseInt(localStorage[window.location.search + "_perc" == 100])){
console.log('finished')
                    }


player.currentTime(localStorage[window.location.search])
played = true;
 
}


  }
    



 }


function fmtMSS(s){return(s-(s%=60))/60+(9<s?':':':0')+s}

function resume(){



var vid = document.getElementById('LS_html5_api');

if (Hls) {
var vid = document.getElementById('LS_Hlsjs_api');


}
var vid = document.getElementById(player.el().children[0].id);

vid.onerror = function(e) {
  alert(e)
}

vid.oncanplay = function() {
  document.getElementById('LS').style.opacity = 1
//  document.getElementsByClassName('video-duration')[0].innerHTML = "( " + Math.round(vid.duration / 60) + " min )"
  document.getElementById('blockLoader').style.opacity = "0"
  document.getElementById('blockLoader').style.display='absolute';
    document.getElementById('blockLoader').style.zIndex ='-99999';

  var played = true;
resumePlayback()
player.play()

setInterval(function(){
  localStorage[window.location.search]  = player.currentTime()
  localStorage[window.location.search + '_perc']  = player.currentTime() / player.duration() * 100;
  if (player.currentTime() == player.duration()) {
    localStorage[window.location.search + '_perc']  = 0;
    localStorage.removeItem(window.location.search + '_perc')
        localStorage.removeItem(window.location.search )
  }


},
2000)

document.body.onunload = function(){
  localStorage[window.location.search]  = player.currentTime()

};

window.onunload = function() {
  localStorage[window.location.search]  = player.currentTime()
}
};


function on_progress( event ) {
    console.log( 'buffered',(player.bufferedEnd() / player.duration() *100) + "%" );
    document.getElementById('progressplayer').style.width = (player.bufferedEnd() / player.duration() *100) + "%" 
    // it will log always 0
}

player.on( 'progress', on_progress );






        document.getElementsByClassName('resume')[0].style.display = 'none'

      document.getElementsByClassName('resume')[0].style.opacity = 0

    if(!localStorage[window.location.search] == '' || !localStorage[window.location.search] == 'undefined'){

//  document.getElementsByClassName('resume')[0].style.opacity = 1
 // document.getElementById('timestamp').innerHTML = fmtMSS(localStorage[window.location.search]).split('.')[0] 

}else{

}
}



if (localStorage[window.location.search] == '' || localStorage[window.location.search] == 'undefined') {
  console.log("No cookie for position found");
  var currentPosition = 0;
} else {
  if (localStorage[window.location.search] == "null") {
    localStorage[window.location.search] = 0;
  } else {
    var currentPosition = localStorage[window.location.search]; 
  }
  console.log("Position cookie found: "+localStorage[window.location.search]);
}







var foxwholescript
if (!String.prototype.includes) {
   String.prototype.includes = function() {
      'use strict';
      return String.prototype.indexOf.apply(this, arguments) !== -1;
   };
}
  var parser = new DOMParser()
function tohtml(data,type){
	if(type != 'xml'){
	return  parser.parseFromString(data, "text/html");
}
 if(type == 'xml'){
	return  parser.parseFromString(data, "text/xml");
}

}
function toTitleCase(str)
{
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}
// CWTV Fetch 
function fetchcwjson(value) {
	console.log(value)
   document.getElementById('progress').style.width = "35%"
   var stripped = value.split('?')[1].split('=')[1]
   console.log(stripped)
   // HLS = 154 | 206
   // MP4 = 213
   var url = "http://metaframe.digitalsmiths.tv/v2/CWtv/assets/" + stripped + "/partner/206?format=json"
   fetch(url, {
      method: 'get'
   }).then(function(response) { 
      return response.json();
   }).then(function(data) {
      document.getElementById('progress').style.width = "50%"
     // finalurl = data.videos.hls5128.uri;
        finalurl = data.videos.variantplaylist.uri;

      console.log(finalurl)
      getShowinfo(data.assetFields.seriesName)
      showname.innerHTML = data.assetFields.seriesName 
      showdesc.innerHTML = data.assetFields.description
      document.title = data.assetFields.seriesName + " - " + data.assetFields.title
      document.getElementById('progress').style.width = "60%"
      document.getElementById('downloader').href = finalurl

    /*  player.src({
         "type": "application/x-mpegURL",
         "src": finalurl 
      }); */

      bg( data.images.cwtv1920x1080.uri)

      player.src({"type":"application/x-mpegURL", "src":finalurl});
   player.play();


resume()
document.getElementById('epname').innerHTML =  data.assetFields.title
      document.getElementById('progress').style.width = "100%"
      $('#projpar').hide()
                                isDone = true

   })
}
// ABC Fetch 
var sessionKey
var videourl
function om(data){
	console.log(data.video[0].assets.asset[0].value)
	            document.getElementById('progress').style.width = "60%"
            showname.innerHTML = data.video[0].show.title 
            showdesc.innerHTML = data.video[0].longdescription
                  document.title = data.video[0].show.title + "- " + data.video[0].title

            var brand = "001"
            if (data.video[0].url.includes('disneyxd')) {
brand = "009"
            }
            $.post("https://api.entitlement.watchabc.go.com/vp2/ws-secure/entitlement/2020/authorize.json", {
               video_type: "lf",
               brand: brand,
               device: "001",
               video_id: data.video[0].id
            }, function(sessionkey, status) {
               document.getElementById('progress').style.width = "70%"
               sessionKey = sessionkey.uplynkData.sessionKey
               console.log(sessionKey)
               videourl = data.video[0].assets.asset[0].value + "?" + sessionKey;
               document.getElementById('downloader').href = videourl
               console.log(videourl)



                           player.src({"type":"application/x-mpegURL", "src":videourl});
   player.play();
                     resume()
                     document.getElementById('epname').innerHTML = data.video[0].title

               document.getElementById('progress').style.width = "100%"
      $('#projpar').hide()

});
}
function fetchabcjson(value) {
   document.getElementById('progress').style.width = "35%"


if (value.includes('abc.go.com/disvidcode=')) {
	console.log(value.split('=')[1])
  addJS('https://api.contents.watchabc.go.com/vp2/ws/contents/3000/videos/009/001/-1/-1/-1/' + value.split('=')[1] + '/-1/-1.jsonp?callback=om')


}


if (value.includes('abc.go.com/vidcode=')) {
	console.log(value.split('=')[1])
  addJS('https://api.contents.watchabc.go.com/vp2/ws/contents/3000/videos/001/001/-1/-1/-1/' + value.split('=')[1] + '/-1/-1.jsonp?callback=om')


}else{

   var xhttp = new XMLHttpRequest();
   xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
         document.getElementById('progress').style.width = "50%"
         html = this.responseText;
         var showidjson = JSON.parse(this.responseText).query.results.div['data-video-id']
         console.log(showidjson)
            addJS('https://api.contents.watchabc.go.com/vp2/ws/contents/3000/videos/001/001/-1/-1/-1/' + showidjson + '/-1/-1.jsonp?callback=om')

      }
   };
   xhttp.open("GET", 'https://query.yahooapis.com/v1/public/yql?q=select%20data-video-id%20from%20html%20where%20url%3D%27' + value + '%27%20and%20compat%3D"html5"%20and%20xpath%3D%27%2F%2Fdiv%5B%40class%3D"videoContainer%20m-videoplayer-embed%20m-videoplayer-embed-lf"%5D%27&format=json&callback=', true);
 
   xhttp.send();
}
}

// FOX Fetch
function fetchfoxjson(value) {
	if (value.includes('link.theplatform.com/s/fox.com/')) {

 fetch(value.split('?')[0] + "?format=preview", {
         method: 'get'
      }).then(function(response) {
         return response.json()
      }).then(function(data) {
         document.getElementById('progress').style.width = "100%"

      showname.innerHTML = toTitleCase(data['fox$showcode'].replace('-',' ')) 
                        document.title = toTitleCase(data['fox$showcode'].replace('-',' ')) + " - " + data.title

      showdesc.innerHTML = data.description
      })





               document.getElementById('downloader').href = value.split('?')[0] + "?mbr=true&auto=true&manifest=m3u&metafile=false"

                        player.src({"type":"application/x-mpegURL", "src":value.split('?')[0] + "?mbr=true&manifest=m3u&metafile=false"});
   player.play();

resume()
                 document.getElementById('progress').style.width = "90%"
      $('#projpar').hide()


	}else{
   var epiname
      // url (required), options (optional)
   document.getElementById('progress').style.width = "30%"
   fetch("https://feed.theplatform.com/f/fox.com/fullepisodes?form=json&range=1-1&byCustomValue={fox:freewheelId}{" + value.split('watch/')[1].split("/")[0] + "}", {
      method: 'get'
   }).then(function(response) {
      return response.json()
   }).then(function(data) {
   	console.log(data.entryCount)
   	if (data.entryCount == 0) {
   		      showname.innerHTML = "THIS VIDEO IS NOT AVALIABLE"
   		               document.getElementById('progress').style.width = "100%"


   	}else{
      document.getElementById('progress').style.width = "50%"
      epiname = (data.entries["0"].title)
      showname.innerHTML = data.entries["0"].fox$series 
                              document.title = data.entries["0"].fox$series + " - " + (data.entries["0"].title)
      bg(data.entries["0"].media$thumbnails[0].plfile$url)

      getShowinfo(data.entries["0"].fox$series)
      showdesc.innerHTML = data.entries["0"].description
         // url (required), options (optional)
              document.getElementById('progress').style.width = "90%"
              mediaurl = data.entries["0"].media$content["0"].plfile$url
              console.log(mediaurl)
               document.getElementById('downloader').href = mediaurl.split('?')[0] + "?mbr=true&auto=true&manifest=m3u&metafile=false"


                                          player.src({"type":"application/x-mpegURL", "src":mediaurl.split('?')[0] + "?mbr=true&manifest=m3u&metafile=false"});
   player.play();
                  resume()

                                       document.getElementById('epname').innerHTML = (data.entries["0"].title)

       
         document.getElementById('progress').style.width = "100%"
      $('#projpar').hide()
                                   isDone = true


  }
   })
}
}
// WatchCartoon Fetch
function fetchcartoonjson(value) {

}
// Netflix Fetch
function fetchnetflixjson(value) {
   console.log(value)
   return value;
}
// CBS Fetch
function fetchcbsjson(value) {
   document.getElementById('progress').style.width = "35%"
   if (value.includes('http')) {
      searchValue = value.split('/')[6]
   } else {
      searchValue = value.split('/')[4]
   }
   if (value.slice(-1) == "/") {
      value = value.slice(0, -1)
   }
   console.log(searchValue)
   $.getJSON("https://link.theplatform.com/s/dJ5BDC/media/guid/2198311517/" + searchValue + "?format=preview", function(data) {
      document.getElementById('progress').style.width = "50%"
      getShowinfo(data.cbs$SeriesTitle)
      showname.innerHTML = data.title
      showdesc.innerHTML = data.description
                                    document.title =  data.title
      videourl = "https://link.theplatform.com/s/dJ5BDC/media/guid/2198311517/" + searchValue + "?mbr=true&manifest=m3u&form=json"
      document.getElementById('downloader').href = videourl

                                                       player.src({"type":"application/x-mpegURL", "src":videourl});
   player.play();
                              resume()
      document.getElementById('progress').style.width = "100%"
      $('#projpar').hide()
                                isDone = true

   });
}
// Nickelodeon
var arr = ''
                                var playlist = []

function fetchnickjson(value) {
   document.getElementById('progress').style.width = "35%"
   $.getJSON("https://query.yahooapis.com/v1/public/yql?q=select%20data-contenturi%20from%20html%20where%20url%3D'"+value+"'%20and%20xpath%3D%22%2F%2Fdiv%5B%40class%3D'video-player'%5D%22&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=", function(data) {
      document.getElementById('progress').style.width = "50%"
      console.log(data.query.results.div["data-contenturi"])

      $.getJSON("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20xml%20where%20url%3D%27http://feeds.mtvnservices.com/od/feed/nick-mrss-player-prime-external/?mgid="+data.query.results.div["data-contenturi"]+"%27%20&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=", function(data) {
         console.log(data.query.results.rss.channel.description)


      showdesc.innerHTML = data.query.results.rss.channel.description

         document.getElementById('progress').style.width = "60%"



         if (data.query.results.rss.channel.item.length > 1) {
                showname.innerHTML = data.query.results.rss.channel.title + " - " +data.query.results.rss.channel.item[0].title
                                          document.title =  data.query.results.rss.channel.title + " - " +data.query.results.rss.channel.item[0].title

            for (var i = 0; i < data.query.results.rss.channel.item.length; i++) {


          var newItem = {
            sources: [{

               src: gatherData(data.query.results.rss.channel.item[i].group.content.url + "?format=json&acceptMethods=hls"),
                type: "application/x-mpegURL"


            }]
               
            };
                        playlist.push(newItem);

            }

         }
         if (data.query.results.rss.channel.item.length == 1) {
                showname.innerHTML = data.query.results.rss.channel.title + " - " +data.query.results.rss.channel.item.title
                                          document.title =  data.query.results.rss.channel.title + " - " +data.query.results.rss.channel.item.title
            var newItem = {
                src: gatherData(data.query.results.rss.channel.item.group.content.url + "?format=json&acceptMethods=hls"),
                type: "application/x-mpegURL"
            };
                        playlist.push(newItem);
         }
         document.getElementById('progress').style.width = "100%"
      $('#projpar').hide()
                                   isDone = true



                        player.playlist(playlist)
                        player.load()
                        player.playlist.autoadvance(0);
                          document.getElementById('blockLoader').style.opacity = "0"
    document.getElementById('blockLoader').style.display = 'none'

      });
   });
}

function gatherData(info) {
   var final
   var xhttp = new XMLHttpRequest();
   xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
         xml = JSON.parse(this.responseText);
         //var jsonfirst = (JSON.parse(this.response)).package.video.item[0].rendition[(JSON.parse(this.response)).package.video.item[0].rendition.length - 1].src
         var jsonfirst = xml.package.video.item["0"].rendition["0"].src
         console.log(jsonfirst)
         final = jsonfirst
         player.src()
      };
   }
   xhttp.open("GET", info, false);
   xhttp.send();
   return final
}
// South Park
function fetchsouthpjson(value) {
   document.getElementById('progress').style.width = "20%"
   $.getJSON("https://query.yahooapis.com/v1/public/yql?q=select%20%20data-itemid%2Ccontent%20from%20html%20where%20url%3D%27" + value + '%27%20and%20compat%3D"html5"%20and%20xpath%3D"%2F%2Fdiv%5B%40id%3D%27player_page_player%27%5D%7C%2F%2Fmeta%5B%40property%3D%27og%3Atitle%27%5D%7C%2F%2Fmeta%5B%40property%3D%27sm4%3Acategory%27%5D%7C%2F%2Fmeta%5B%40property%3D%27og%3Adescription%27%5D"&format=json&callback=', function(data) {
      console.log(data.query.results.div["data-itemid"])
      document.getElementById('progress').style.width = "40%"
      showname.innerHTML = data.query.results.meta[2].content + " - " + data.query.results.meta["0"].content
                                                document.title =  data.query.results.meta[2].content + " - " + data.query.results.meta["0"].content

      showdesc.innerHTML = data.query.results.meta[1].content
      $.getJSON("https://query.yahooapis.com/v1/public/yql?q=select%20channel.item.group.content.url%20from%20xml%20where%20url%3D%27http%3A%2F%2Fsouthpark.cc.com%2Ffeeds%2Fvideo-player%2Fmrss%3Furi%3Dmgid%253Aarc%253Aepisode%253Asouthparkstudios.com%253A" + data.query.results.div["data-itemid"] + '%27%20%20and%20itemPath%3D"rss"&format=json&callback=', function(data1) {
         document.getElementById('progress').style.width = "60%"

         var playlist = []  
         if (data1.query.count > 1) {
            for (var i = 0; i < data1.query.results.rss.length; i++) {
var newItem = {
                file: gatherSouthParkData(data1.query.results.rss[i].channel.item.group.content.url.split('?')[0] + "?format=json&acceptMethods=hls"),
                type: "hls"
            };
                                    playlist.push(newItem);

                        }

         }
         if (data1.query.count == 1) {

         	var newItem = {
                file: gatherSouthParkData(data1.query.results.rss.channel.item.group.content.url.split('?')[0] + "?format=json&acceptMethods=hls"),
                type: "hls"
            };



         }
         document.getElementById('progress').style.width = "100%"
      $('#projpar').hide()
                                   isDone = true


                jwplayer("myElement1").setup({
                          cast:{},

playlist: playlist

});
                        jwplayer("myElement1").load(playlist);
      });

      function gatherSouthParkData(info) {
         var final
         var xhttp = new XMLHttpRequest();
         xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
               xml = this.responseText;
               var jsonfirst = (JSON.parse(this.response)).package.video.item[0].rendition[(JSON.parse(this.response)).package.video.item[0].rendition.length - 1].src
               console.log(jsonfirst)
               videourl = jsonfirst.replace("rtmpe://cp9950.edgefcs.net/ondemand/mtvnorigin/", "http://viacommtvstrmfs.fplive.net/")
               document.getElementById('downloader').href = videourl
               final = videourl
            };
         }
         xhttp.open("GET", info, false);
         xhttp.send();
         return final
      }
   });
}
// NBC 
var mediaurl
var iframeDOM = document.createElement('html');
var pageDOM = document.createElement('html');

function fetchnbcjson(value) {
   document.getElementById('progress').style.width = "35%"
   console.log(value)
   $.get(value, function(data) {
      document.getElementById('progress').style.width = "50%"
      var episodedetails
      var htmlparsed = tohtml(data)
      pageDOM.innerHTML = htmlparsed.getElementsByTagName('iframe')[0].outerHTML
      console.log(pageDOM)
      console.log(pageDOM.getElementsByTagName('iframe')[0].src)
      var jsonfirst = pageDOM.getElementsByTagName('iframe')[0].src;
      episodedetails = JSON.parse(htmlparsed.querySelector('script[type="application/ld+json"]').innerHTML)
      console.log(jsonfirst)
      getShowinfo(episodedetails.partOfSeries.name)
      showname.innerHTML = episodedetails.partOfSeries.name + "- " + episodedetails.name
      showdesc.innerHTML = episodedetails.description
                                                      document.title = episodedetails.partOfSeries.name + "- " + episodedetails.name

      var iframefetchajax = new XMLHttpRequest();
      iframefetchajax.onreadystatechange = function() {
         if (this.readyState == 4 && this.status == 200) {
            document.getElementById('progress').style.width = "75%"
            var htmlframe = tohtml(this.responseText)
            console.log(htmlframe)
            var jsonfirst = htmlframe.getElementsByTagName('link')[1].href;
            mediaurl = jsonfirst
            var videofile = mediaurl.split('?')[0] + "?manifest=m3u&mbr=true&metafile=false"
            console.log(videofile)

                                                            player.src({"type":"application/x-mpegURL", "src":videofile});
   player.play();
resume()
            document.getElementById('progress').style.width = "100%"
      $('#projpar').hide()
                                      isDone = true

         }
      };
      iframefetchajax.open("GET", jsonfirst, true);
      iframefetchajax.send();
   });
}
// AdultSwim
function fetchaswimjson(value) {
  if (value.includes('asdir=')) {
value = value.split('asdir=')[1]



fetch('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20json%20where%20url%3D"http%3A%2F%2Fwww.adultswim.com%2Fvideos%2Fapi%2Fv2%2Fvideos%2F' + value + '%3Ffields%3Dtitle%252Ctype%252Cduration%252Ccollection_title%252Cimages%252Cstream%252Csegments%252Ctitle_id%26iframe%3Dfalse"%20&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=').then(function(response) {
                  return response.json();
               }).then(function(returnedValue) {
                  document.getElementById('progress').style.width = "75%"
                  showname.innerHTML = returnedValue.query.results.json.data.collection_title + "- " + returnedValue.query.results.json.data.title
                                                                        document.title = returnedValue.query.results.json.data.collection_title + "- " + returnedValue.query.results.json.data.title;

              //    showdesc.innerHTML = returnedValue.query.results.video.description
                                  console.log(returnedValue.query.results.json.data.stream.assets)


for (var i = 0; i < returnedValue.query.results.json.data.stream.assets.length; i++) {
  console.log(returnedValue.query.results.json.data.stream.assets[i]);

if (returnedValue.query.results.json.data.stream.assets[i].mime_type == "application/x-mpegURL") {
  console.log(returnedValue.query.results.json.data.stream.assets[i].url)
  videofile = returnedValue.query.results.json.data.stream.assets[i].url
                             document.getElementById('downloader').href = videofile
                                                                                                                     player.src({"type":"application/x-mpegURL", "src":videofile});
   player.play();
  resume()
                                 document.getElementById('downloader').href = videofile

                        
                        document.getElementById('progress').style.width = "100%"
      $('#projpar').hide()


return ; 

}
}


                  // ...
               })

return ; 
  }
   console.log(value)
   fetch("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20html%20where%20url%3D%27" + value + '%27%20and%20compat%3D"html5"%20and%20xpath%3D"%2F%2Fscript"&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=', {
      method: 'get'
   }).then(function(response) {
      return response.json()
   }).then(function(final) {
      document.getElementById('progress').style.width = "50%"
      for (var i = final.query.results.script.length - 1; i >= 0; i--) {
         var script = final.query.results.script[i]
         if (whatIsIt(script) == 'String') {
            if (script.includes('_AS_INITIAL_DATA')) {
               eval(final.query.results.script[i])
               console.log(__AS_INITIAL_DATA__.show.sluggedVideo.id)
               fetch('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20json%20where%20url%3D"http%3A%2F%2Fwww.adultswim.com%2Fvideos%2Fapi%2Fv2%2Fvideos%2F' + __AS_INITIAL_DATA__.show.sluggedVideo.id + '%3Ffields%3Dtitle%252Ctype%252Cduration%252Ccollection_title%252Cimages%252Cstream%252Csegments%252Ctitle_id%26iframe%3Dfalse"%20&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=').then(function(response) {
                  return response.json();
               }).then(function(returnedValue) {
                  document.getElementById('progress').style.width = "75%"
                  showname.innerHTML = returnedValue.query.results.json.data.collection_title + "- " + returnedValue.query.results.json.data.title
                                                                        document.title = returnedValue.query.results.json.data.collection_title + "- " + returnedValue.query.results.json.data.title;

              //    showdesc.innerHTML = returnedValue.query.results.video.description
                                  console.log(returnedValue.query.results.json.data.stream.assets)


for (var i = 0; i < returnedValue.query.results.json.data.stream.assets.length; i++) {
  console.log(returnedValue.query.results.json.data.stream.assets[i]);

if (returnedValue.query.results.json.data.stream.assets[i].mime_type == "application/x-mpegURL") {
  console.log(returnedValue.query.results.json.data.stream.assets[i].url)
  videofile = returnedValue.query.results.json.data.stream.assets[i].url
                             document.getElementById('downloader').href = videofile
                                                            player.src({"type":"application/x-mpegURL", "src":videofile});
   player.play();
  resume()
                                 document.getElementById('downloader').href = videofile

                        
                        document.getElementById('progress').style.width = "100%"
      $('#projpar').hide()


return ; 

}
}


                  // ...
               })
            }
         }
      }
      // ...
   })
}
// AMC Fetcher
function fetchamcjson(value) {
   console.log(value)
   fetch("https://query.yahooapis.com/v1/public/yql?q=select%20data-video-id%2Ccontent%2Cproperty%20from%20html%20where%20url%3D%27" + value + '%27%20and%20compat%3D"html5"%20and%20xpath%3D"%2F%2Fdiv%5B%40class%3D%20%27platform-container%27%5D%7C%2F%2Fmeta%5B%40property%3D%27og%3Atitle%27%5D%7C%2F%2Fmeta%5B%40property%3D%27og%3Adescription%27%5D"&format=json&callback=').then(function(response) {
      return response.json()
   }).then(function(data) {
      document.getElementById('progress').style.width = "50%"
      console.log(data)
      showname.innerHTML = data.query.results.meta[0].content
                                                                              document.title = data.query.results.meta[0].content

      showdesc.innerHTML = data.query.results.meta[1].content
            document.getElementById('downloader').href = "https://link.theplatform.com/s/M_UwQC/media/" + data.query.results.div['data-video-id'] + '?mbr=true&manifest=m3u&metafile=false'

   player.src({"type":"application/x-mpegURL", "src":"https://link.theplatform.com/s/M_UwQC/media/" + data.query.results.div['data-video-id'] + '?mbr=true&manifest=m3u&metafile=false'});
   player.play();

                                       resume()
      document.getElementById('progress').style.width = "100%"
      $('#projpar').hide()
                                isDone = true

   })
}
// diziay.com
function fetchdiziayjson(value){



fetch('https://query.yahooapis.com/v1/public/yql?q=select%20src%2Ccontent%20from%20html%20where%20url%3D%27' + value + '%27%20and%20compat%3D"html5"%20and%20xpath%3D"%2F%2Fiframe%7C%2F%2Fspan%5B%40class%3D%27bolumisim%27%5D%7C%2F%2Fname%5B%40itemprop%3D%27name%27%5D"&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=')
.then(function(response) {


	      document.getElementById('progress').style.width = "40%"

  return response.json();
})
.then(function(data) {
	      showname.innerHTML = data.query.results.name.split('Sezon')[0] +" - "+ data.query.results.span
	                                                                                    document.title = data.query.results.name.split('Sezon')[0] +" - "+ data.query.results.span


console.log(data.query.results.iframe["0"].src)
  
  
  for (var i = 0; i < data.query.results.iframe.length; i++) {
    
    if(data.query.results.iframe[i].src.includes('http://dizipas.org/player/dizi-oynat.php')){
    	      document.getElementById('progress').style.width = "70%"

      
      console.log(data.query.results.iframe[i].src.split('=')[1])
      fetch('https://dizipas.org/player/ajax.php?dizi=' + data.query.results.iframe[i].src.split('=')[1])
.then(function(response) {
	      document.getElementById('progress').style.width = "90%"

  return response.json();
})
.then(function(ajaxinfo) {
        
        console.log(ajaxinfo.success[0].src)

          document.getElementById('downloader').href = ajaxinfo.success[0].src
          var obj = []
for (var i = ajaxinfo.success.length - 1; i >= 0; i--) {
  console.log(ajaxinfo.success[i].src)
  obj.push({file:ajaxinfo.success[i].src,type:"mp4",label:ajaxinfo.success[i].label})
}
console.log(obj)
                        jwplayer("myElement1").setup({
                                  cast:{},

  sources: obj
});
                        resume()
                  document.getElementById('progress').style.width = "100%"
            $('#projpar').hide()

                                            isDone = true



});
    }



}
});
}
var _cnglobal
var cnvideoid
function fetchcartoonnjson(value){



fetch('https://cors-anywhere.herokuapp.com/' + value)
.then(function(response) {


	      document.getElementById('progress').style.width = "40%"

  return response.text();
})
.then(function(data) {
data  = tohtml(data)
for (var i = data.getElementsByTagName('script').length - 1; i >= 0; i--) {
if(data.getElementsByTagName('script')[i].innerHTML.includes('_cnglobal.cvpVideoId = ')){
	
	cnvideoid = (data.getElementsByTagName('script')[i].innerHTML.split(';')[0].split("'")[1])
	console.log(_cnglobal)
	fetch('https://cors-anywhere.herokuapp.com/http://www.cartoonnetwork.com/cntv/mvpd/services/cvpXML.do?id=' + data.getElementsByTagName('script')[i].innerHTML.split(';')[0].split("'")[1])
.then(function(response) {


	      document.getElementById('progress').style.width = "40%"

  return response.text();
})
.then(function(apidat) {


$.ajax("https://cors-anywhere.herokuapp.com/http://www.cartoonnetwork.com/cntv/mvpd/processors/services/token_ipadAdobe.do?path="+tohtml(apidat,'xml').querySelector('file[bitrate="androidphone"]').innerHTML +"&videoId=" + cnvideoid,{
    'type': 'GET',
     success: function(result){
        console.log(result.querySelector('token').innerHTML);


                                                    player.src({"type":"application/x-mpegURL", "src":'http://androidhls-secure.cdn.turner.com/toon/big' + tohtml(apidat,'xml').querySelector('file[bitrate="androidphone"]').innerHTML +'?hdnea=' +result.querySelector('token').innerHTML});
   player.play();
                              resume()
    } 
});




	      document.getElementById('progress').style.width = "100%"
      $('#projpar').hide()

});
}

}

for (var i = data.getElementsByTagName('script').length - 1; i >= 0; i--) {
	if(data.getElementsByTagName('script')[i].getAttribute("type") == 'application/ld+json'){
		var metadata = JSON.parse(data.getElementsByTagName('script')[i].innerHTML)
		console.log(metadata)
		      showname.innerHTML = metadata.partOfSeries.name+ " - " + metadata.name
                   document.title = metadata.partOfSeries.name+ " - " +  metadata.name
 showdesc.innerHTML = metadata.description
 

	}
}
  
  
 
});

}



// fxfetch
function fetchfxjson(value) {
	if (value.includes('link.theplatform.com/s/fng-fx/')) {

 fetch(value.split('?')[0] + "?format=preview", {
         method: 'get'
      }).then(function(response) {
         return response.json()
      }).then(function(data) {
         document.getElementById('progress').style.width = "100%"

      showname.innerHTML = toTitleCase(data['fx$showcode'].replace('-',' ')) + " - " + data.title
                        document.title = toTitleCase(data['fx$showcode'].replace('-',' ')) + " - " + data.title

      showdesc.innerHTML = data.description
      })





               document.getElementById('downloader').href = value.split('?')[0] + "?mbr=true&manifest=m3u&metafile=false"



                      player.src({"type":"application/x-mpegURL", "src":value.split('?')[0] + "?mbr=true&manifest=m3u&metafile=false"});
   player.play();
resume()
                 document.getElementById('progress').style.width = "90%"
      $('#projpar').hide()


	}else{
   var epiname
      // url (required), options (optional)
   document.getElementById('progress').style.width = "30%"
            // url (required), options (optional)
      fetch(value, {
         method: 'get'
      }).then(function(response) {
         return response.text()
      }).then(function(final) {

final = (JSON.parse(tohtml(final).getElementById('seo-data').innerHTML))
         document.getElementById('progress').style.width = "90%"
               showname.innerHTML = final.name 
               console.log(final)
                        document.title = final.name 

      showdesc.innerHTML = final.description
console.log(final.mainEntityOfPage.video.contentUrl.split('&releaseURL=')[1].split('?')[0])
               document.getElementById('downloader').href = final.mainEntityOfPage.video.contentUrl.split('&releaseURL=')[1].split('?')[0] + "?mbr=true&manifest=m3u&metafile=false"


    player.src({"type":"application/x-mpegURL", "src":final.mainEntityOfPage.video.contentUrl.split('&releaseURL=')[1].split('?')[0] + "?mbr=true&manifest=m3u&metafile=false"});
   player.play();
      resume() 
         document.getElementById('progress').style.width = "100%"
      $('#projpar').hide()
                                   isDone = true

      })






  }
   
}

function fetchlplatjson(value){

 fetch(value.split('?')[0] + "?format=preview", {
         method: 'get'
      }).then(function(response) {
         return response.json()
      }).then(function(data) {
         document.getElementById('progress').style.width = "100%"
bg(data.defaultThumbnailUrl)
      showname.innerHTML =   data.categories[0].name.split('/')[1] 
                                             document.getElementById('epname').innerHTML = data.title


                        document.title = data.categories[0].name.split('/')[1] +' - '+ data.title
getShowinfo(data.categories[0].name.split('/')[1])

      showdesc.innerHTML = data.description
      })
                document.getElementById('downloader').href =  value.split('?')[0] + "?mbr=true&manifest=m3u&format=redirect"



    player.src({"type":"application/x-mpegURL", "src":value.split('?')[0] + "?mbr=true&manifest=m3u&format=redirect"});
   player.play();
resume()
      $('#projpar').hide()


}
function raw(url){
  console.log(url)
url = url.split('_=')[1]
console.log(url)
      showname.innerHTML = url;
               document.getElementById('downloader').href = url

    player.src({"type":"application/x-mpegURL", "src":url});
   player.play();
resume()
}


function foxsite(url){
  url = url.split('_=')[1]
var fox = document.referrer
console.log(fox)
console.log(url.split('&auth=')[1])
 fetch("https://feed.theplatform.com/f/fox.com/fullepisodes?form=json&range=1-1&byCustomValue={fox:freewheelId}{" + fox.split('watch/')[1].split("/")[0] + "}", {
      method: 'get'
   }).then(function(response) {
      return response.json()
   }).then(function(data) {
    console.log(data.entryCount)
    if (data.entryCount == 0) {
            showname.innerHTML = "THIS VIDEO IS NOT AVALIABLE"
                     document.getElementById('progress').style.width = "100%"
}else{
      document.getElementById('progress').style.width = "50%"

var a = data.entries[0].media$content[0].plfile$url + '&auth=' + url.split('&auth=')[1] + '&format=redirect&manifest=m3u'
if(new Date(data.entries[0].fox$requiresAuth) == true){
  var a = data.entries[0].media$content[0].plfile$url + '&format=redirect&manifest=m3u'

}
  console.log(a )

               document.getElementById('downloader').href = a

    player.src({"type":"application/x-mpegURL", "src":a});
   player.play();
resume()


      epiname = (data.entries["0"].title)
      showname.innerHTML = data.entries["0"].fox$series 
                              document.title = data.entries["0"].fox$series + " - " + (data.entries["0"].title)
      bg(data.entries["0"].media$thumbnails[0].plfile$url)

      getShowinfo(data.entries["0"].fox$series)
      showdesc.innerHTML = data.entries["0"].description


                                       document.getElementById('epname').innerHTML = (data.entries["0"].title)

       
         document.getElementById('progress').style.width = "100%"
      $('#projpar').hide()
                                   isDone = true


  }
   })





}









var stringConstructor = "test".constructor;
var arrayConstructor = [].constructor;
var objectConstructor = {}.constructor;

function whatIsIt(object) {
   if (object === null) {
      return "null";
   } else if (object === undefined) {
      return "undefined";
   } else if (object.constructor === stringConstructor) {
      return "String";
   } else if (object.constructor === arrayConstructor) {
      return "Array";
   } else if (object.constructor === objectConstructor) {
      return "Object";
   } else {
      return "don't know";
   }
}
var testSubjects = ["string", [1, 2, 3], {
   foo: "bar"
}, 4];
for (var i = 0, len = testSubjects.length; i < len; i++) {}