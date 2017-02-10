var x2js = new X2JS();
var foxwholescript
if (!String.prototype.includes) {
   String.prototype.includes = function() {
      'use strict';
      return String.prototype.indexOf.apply(this, arguments) !== -1;
   };
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
      showname.innerHTML = data.assetFields.seriesName + " - " + data.assetFields.title
      showdesc.innerHTML = data.assetFields.description
      document.title = data.assetFields.seriesName + " - " + data.assetFields.title
      document.getElementById('progress').style.width = "60%"
      document.getElementById('downloader').href = finalurl
    /*  player.src({
         "type": "application/x-mpegURL",
         "src": finalurl 
      }); */
      jwplayer("myElement1").setup({
  file: finalurl,
  width: "100%",
  aspectratio: "16:9",
 autostart: true,
 title: data.assetFields.seriesName + " - " + data.assetFields.title
});

      document.getElementById('progress').style.width = "100%"
      $('#progress').hide()
                                isDone = true

   })
}
// ABC Fetch 
var sessionKey
var videourl
function om(data){
	console.log(data.video[0].assets.asset[0].value)
	            document.getElementById('progress').style.width = "60%"
            showname.innerHTML = data.video[0].show.title + "- " + data.video[0].title
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

                     jwplayer("myElement1").setup({
  file: videourl,
  width: "100%",
  aspectratio: "16:9",
 autostart: true
});
               document.getElementById('progress').style.width = "100%"

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

      showname.innerHTML = toTitleCase(data['fox$showcode'].replace('-',' ')) + " - " + data.title
                        document.title = toTitleCase(data['fox$showcode'].replace('-',' ')) + " - " + data.title

      showdesc.innerHTML = data.description
      })





               document.getElementById('downloader').href = value.split('?')[0] + "?mbr=true&manifest=m3u&metafile=false"


                  jwplayer("myElement1").setup({
  "playlist": [
    {
      "sources": [
        {
          "default": false,
          "file": value.split('?')[0] + "?mbr=true&manifest=m3u&metafile=false",
          "type": "hls",
          "autoplay": true
        }
      ]
    }
  ],
  "primary": "html5",
  "hlshtml": true
});

                 document.getElementById('progress').style.width = "90%"


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
      showname.innerHTML = data.entries["0"].fox$series + " - " + (data.entries["0"].title)
                              document.title = data.entries["0"].fox$series + " - " + (data.entries["0"].title)

      getShowinfo(data.entries["0"].fox$series)
      showdesc.innerHTML = data.entries["0"].description
         // url (required), options (optional)
      fetch('https://feed.theplatform.com/f/fox.com/metadata?count=true&byCustomValue={fullEpisode}{true}&range=0-1&q=' + epiname, {
         method: 'get'
      }).then(function(response) {
         return response.json()
      }).then(function(final) {
         document.getElementById('progress').style.width = "90%"
               document.getElementById('downloader').href = final.results["0"].videoURL.split('?')[0] + "?mbr=true&manifest=m3u&metafile=false"

                  jwplayer("myElement1").setup({
  "playlist": [
    {
      "sources": [
        {
          "default": false,
          "file": final.results["0"].videoURL.split('?')[0] + "?mbr=true&manifest=m3u&metafile=false",
          "type": "hls"
        }
      ]
    }
  ],
  "primary": "html5",
  "hlshtml": true
});
       
         document.getElementById('progress').style.width = "100%"
         $('#progress').hide()
                                   isDone = true

      })
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

                              jwplayer("myElement1").setup({
  "playlist": [
    {
      "sources": [
        {
          "default": false,
          "file": videourl,
          "type": "hls"
        }
      ]
    }
  ],
  "primary": "html5",
  "hlshtml": true
});
      document.getElementById('progress').style.width = "100%"
      $('#progress').hide()
                                isDone = true

   });
}
// Nickelodeon
var playlist = ""
var arr = ''

function fetchnickjson(value) {
   document.getElementById('progress').style.width = "35%"
   value = value.split('/')[5]
   var split = value.split('.')[0]
   console.log(split)
   $.getJSON("https://query.yahooapis.com/v1/public/yql?q=select%20id%2Ctitle%2Cdescription%20from%20json%20where%20url%3D%27http%3A%2F%2Fwww.nick.com%2Fdata%2FvideoEndLevel%3FurlKey%3D" + split + "'%20%20&format=json", function(data) {
      document.getElementById('progress').style.width = "50%"
      showname.innerHTML = data.query.results.json.title
                                          document.title =  data.query.results.json.title

      showdesc.innerHTML = data.query.results.json.description
      console.log(data.query.results.json.id)
      $.getJSON("https://query.yahooapis.com/v1/public/yql?q=select%20channel.item.group.content.url%20from%20xml%20where%20url%3D%27http%3A%2F%2Fudat.mtvnservices.com%2Fservice1%2Fdispatch.htm%3Ffeed%3Dnick_arc_player_prime%26mgid%3Dmgid%253Aarc%253Aepisode%253Anick.com%253A" + data.query.results.json.id + '%27%20%20and%20itemPath%3D"rss"&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=', function(data) {
         console.log(data.query.results.rss)
         document.getElementById('progress').style.width = "60%"


         	                      var playlist = []

         if (data.query.count > 1) {

            for (var i = 0; i < data.query.results.rss.length; i++) {



          var newItem = {
                file: gatherData(data.query.results.rss[i].channel.item.group.content.url + "?format=json&acceptMethods=hls"),
                type: "hls"
            };
                        playlist.push(newItem);

         //      arr = arr + "{sources: [{src: '" + gatherData(data.query.results.rss[i].channel.item.group.content.url + "?format=json") + "',type: 'video/mp4'}],},"
            }



         //   player.playlist(eval("[" + (arr.substring(0, arr.length - 1)) + "]"))
           // player.load();
            // player.play();
         }
         if (data.query.count == 1) {
            var newItem = {
                file: gatherData(data.query.results.rss[i].channel.item.group.content.url + "?format=json&acceptMethods=hls"),
                type: "hls"
            };
                        playlist.push(newItem);
         }
         document.getElementById('progress').style.width = "100%"
         $('#progress').hide()
                                   isDone = true


                        jwplayer("myElement1").setup({
playlist: playlist

});
                        jwplayer("myElement1").load(playlist);
      });
   });
}

function gatherData(info) {
   var final
   var xhttp = new XMLHttpRequest();
   xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
         xml = this.responseText;
         var jsonfirst = (JSON.parse(this.response)).package.video.item[0].rendition[(JSON.parse(this.response)).package.video.item[0].rendition.length - 1].src
         console.log(jsonfirst)
         videourl = jsonfirst.replace("rtmpe://cp5289.edgefcs.net/ondemand/mtvnorigin/", "http://viacommtvstrmfs.fplive.net/")
         document.getElementById('downloader').href = videourl
         final = videourl
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
         $('#progress').hide()
                                   isDone = true


                jwplayer("myElement1").setup({
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
      pageDOM.innerHTML = data
      var jsonfirst = pageDOM.getElementsByTagName('iframe')[0].src;
      episodedetails = JSON.parse(pageDOM.querySelector('script[type="application/ld+json"]').innerHTML)
      console.log(jsonfirst)
      getShowinfo(episodedetails.partOfSeries.name)
      showname.innerHTML = episodedetails.partOfSeries.name + "- " + episodedetails.name
      showdesc.innerHTML = episodedetails.description
                                                      document.title = episodedetails.partOfSeries.name + "- " + episodedetails.name

      var iframefetchajax = new XMLHttpRequest();
      iframefetchajax.onreadystatechange = function() {
         if (this.readyState == 4 && this.status == 200) {
            document.getElementById('progress').style.width = "75%"
            iframeDOM.innerHTML = this.responseText
            var jsonfirst = iframeDOM.getElementsByTagName('link')[1].href;
            mediaurl = jsonfirst
            var videofile = mediaurl.split('?')[0] + "?manifest=m3u&mbr=true&metafile=false"
            console.log(videofile)
            document.getElementById('downloader').href = videofile
         jwplayer("myElement1").setup({
  "playlist": [
    {
      "sources": [
        {
          "default": false,
          "file": videofile,
          "type": "hls"
        }
      ]
    }
  ],
  "primary": "html5",
  "hlshtml": true
});


            document.getElementById('progress').style.width = "100%"
            $('#progress').hide()
                                      isDone = true

         }
      };
      iframefetchajax.open("GET", pageDOM.getElementsByTagName('iframe')[0].src, true);
      iframefetchajax.send();
   });
}
// AdultSwim
function fetchaswimjson(value) {
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
               fetch("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20xml%20where%20url%3D%27https%3A%2F%2Fwww.adultswim.com%2Fvideos%2Fapi%2Fv0%2Fassets%3Fplatform%3Ddesktop%26id%3D" + __AS_INITIAL_DATA__.show.sluggedVideo.id + '%27%20%20&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=').then(function(response) {
                  return response.json();
               }).then(function(returnedValue) {
                  document.getElementById('progress').style.width = "75%"
                  showname.innerHTML = returnedValue.query.results.video.franchise + "- " + returnedValue.query.results.video.title
                                                                        document.title = returnedValue.query.results.video.franchise + "- " + returnedValue.query.results.video.title

                  showdesc.innerHTML = returnedValue.query.results.video.description
                  for (var i = returnedValue.query.results.video.files.file.length; i >= 0; i--) {
                     if (returnedValue.query.results.video.files.file[i - 1].content.includes("m3u8")) {
                        if (returnedValue.query.results.video.files.file[i - 1].type == "hd") {
                           var videofile = returnedValue.query.results.video.files.file[i - 1].content
                           document.getElementById('downloader').href = videofile

                                                         jwplayer("myElement1").setup({
  file: videofile,
  width: "100%",
  aspectratio: "16:9",
 autostart: true
});
                                 document.getElementById('downloader').href = videofile

                        }
                        document.getElementById('progress').style.width = "100%"
                        $('#progress').hide()
                                                  isDone = true

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

 
                                       jwplayer("myElement1").setup({
  "playlist": [
    {
      "sources": [
        {
          "default": false,
          "file": "https://link.theplatform.com/s/M_UwQC/media/" + data.query.results.div['data-video-id'] + '?mbr=true&manifest=m3u&metafile=false',
          "type": "hls"
        }
      ]
    }
  ],
  "primary": "html5",
  "hlshtml": true
});
      document.getElementById('progress').style.width = "100%"
      $('#progress').hide()
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

                        jwplayer("myElement1").setup({
  file: ajaxinfo.success[0].src,
  width: "100%",
  aspectratio: "16:9",
  provider: "video",
  autoplay: true,
  type:"mp4"
});
                  document.getElementById('progress').style.width = "100%"
                                            isDone = true



});
    }



}
});
}

function fetchcartoonnjson(value){



fetch('https://query.yahooapis.com/v1/public/yql?q=select%20src%2Ccontent%20from%20html%20where%20url%3D%27' + value + '%27%20and%20compat%3D"html5"%20and%20xpath%3D"%2F%2Fiframe%7C%2F%2Fspan%5B%40class%3D%27bolumisim%27%5D%7C%2F%2Fname%5B%40itemprop%3D%27name%27%5D"&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=')
.then(function(response) {


	      document.getElementById('progress').style.width = "40%"

  return response.json();
})
.then(function(data) {

  
  
  for (var i = 0; i < data.query.results.script.length; i++) {
    
    if(data.query.results.script[i].content.includes('_cnglobal.cvpVideoId = ')){
    	      document.getElementById('progress').style.width = "70%"
var id =  data.query.results.script[i].content.split(';')[0]   	      


 fetch('https://query.yahooapis.com/v1/public/yql?q=select%20description%2Cfranchise%2Cfiles%20from%20xml%20where%20url%3D%27http%3A%2F%2Fwww.cartoonnetwork.com%2Fcntv%2Fmvpd%2Fservices%2FcvpXML.do%3Fid%3D' + id  + '%27%20%20and%20itemPath%3D"video"&format=json&callback=')
.then(function(response) {
	      document.getElementById('progress').style.width = "90%"
 return response.json();
})
.then(function(ajaxinfo) {
console.log(ajaxinfo.results.files.file)
 fetch('https://query.yahooapis.com/v1/public/yql?q=select%20token%20from%20xml%20where%20url%3D%27http%3A%2F%2Fwww.cartoonnetwork.com%2Fcntv%2Fmvpd%2Fprocessors%2Fservices%2Ftoken_ipadAdobe.do%3Fpath%3D%2Ftoon%2F*%26videoId%3D' + id + '%27%20%20and%20itemPath%3D"auth"&format=json&callback=')
.then(function(response) {
	      document.getElementById('progress').style.width = "90%"
 return response.json();
})
.then(function(token) {
var token = token.results.auth.token
console.log(token)
var finalurl = finalurl +"?hdnea="+  token
player.src({
               "type": "application/x-mpegURL",
               "src": finalurl
            });
            player.play();
                  document.getElementById('progress').style.width = "100%"
                                            isDone = true
                                        });



});
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


                  jwplayer("myElement1").setup({
  "playlist": [
    {
      "sources": [
        {
          "default": false,
          "file": value.split('?')[0] + "?mbr=true&manifest=m3u&metafile=false",
          "type": "hls",
          "autoplay": true
        }
      ]
    }
  ],
  "primary": "html5",
  "hlshtml": true
});

                 document.getElementById('progress').style.width = "90%"


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
  var parser = new DOMParser()
var final =   parser.parseFromString(final, "text/html");

final = (JSON.parse(final.getElementById('seo-data').innerHTML))
         document.getElementById('progress').style.width = "90%"
               showname.innerHTML = final.name 
               console.log(final)
                        document.title = final.name 

      showdesc.innerHTML = final.description
console.log(final.mainEntityOfPage.video.contentUrl.split('&releaseURL=')[1].split('?')[0])
               document.getElementById('downloader').href = final.mainEntityOfPage.video.contentUrl.split('&releaseURL=')[1].split('?')[0] + "?mbr=true&manifest=m3u&metafile=false"

                  jwplayer("myElement1").setup({
  "playlist": [
    {
      "sources": [
        {
          "default": false,
          "file": final.mainEntityOfPage.video.contentUrl.split('&releaseURL=')[1].split('?')[0] + "?mbr=true&manifest=m3u&metafile=false",
          "type": "hls"
        }
      ]
    }
  ],
  "primary": "html5",
  "hlshtml": true
});
       
         document.getElementById('progress').style.width = "100%"
         $('#progress').hide()
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

      showname.innerHTML =   data.title
                        document.title = data.title

      showdesc.innerHTML = data.description
      })
                  jwplayer("myElement1").setup({
  "playlist": [
    {
      "sources": [
        {
          "default": false,
          "file": value.split('?')[0] + "?mbr=true&manifest=m3u&format=redirect",
          "type": "hls"
        }
      ]
    }
  ],
  "primary": "html5",
  "hlshtml": true
});



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