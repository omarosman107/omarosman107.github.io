  
   var x2js = new X2JS();

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
   $.getJSON("http://metaframe.digitalsmiths.tv/v2/CWtv/assets/" + stripped + "/partner/154" , function(data) {
      finalurl = data.videos.variantplaylist.uri;
      console.log(finalurl)
      getShowinfo(data.assetFields.seriesName)
      showname.innerHTML = data.assetFields.seriesName + " - " + data.assetFields.title
      showdesc.innerHTML = data.assetFields.description
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
            getShowinfo(data.query.results.json.show.title)
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
	var signature
   console.log(value)
   $.getJSON("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20html%20where%20url%3D%27" + value + '%27%20and%20compat%3D"html5"%20and%20xpath%3D"%2F%2Fh3%5B%40class%3D%27video-show-title%27%5D%2Fa%7C%2F%2Fh3%5B%40class%3D%27video-title%27%5D%7C%2F%2Fscript%5B%40type%3D%27application%2Fld%2Bjson%27%5D%7C%2F%2Fscript"&_maxage=400000&format=json&callback=', function(data) {

var mediaurl
var episodedetails


for (var i = 0; i < data.query.results.script.length; i++) {

var jstype = (data.query.results.script[i].type)

if (jstype == ('application/ld+json')) {

 episodedetails = JSON.parse(data.query.results.script[i].content)


}


}
mediaurl = (JSON.parse((data.query.results.script[11].split('jQuery.extend(Drupal.settings,'))[1].split(');')[0]).fox_pdk_player.release_url)



               getShowinfo(episodedetails.partOfSeries.name)


               showname.innerHTML = episodedetails.partOfSeries.name + "- " + episodedetails.name
               showdesc.innerHTML = episodedetails.description






               var xhttp = new XMLHttpRequest();
               xhttp.onreadystatechange = function() {
                  if (this.readyState == 4 && this.status == 200) {
                     xml = this.responseText;
                     var jsonfirst = JSON.stringify(x2js.xml_str2json(this.response))
                     json = JSON.parse(jsonfirst);
                     console.log(json)
                     var videofile = json.smil.body.seq.par["0"].switch.video[0]._src
                     console.log(videofile)
                     document.getElementById('downloader').href = videofile
                     player.src({
                        "type": "video/mp4",
                        "src": videofile
                     });
                     player.play();
                     return videofile
                  }
               };
               xhttp.open("GET", mediaurl + "&switch=http", true);
               xhttp.send();
            
         
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
      getShowinfo(data.query.results.a[0].content)
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



// Nickelodeon
var playlist = ""
    var arr = ''

function fetchnickjson(value){
	value = value.split('/')[5]
	var split = value.split('.')[0]
	console.log(split)



   $.getJSON("https://query.yahooapis.com/v1/public/yql?q=select%20id%2Ctitle%2Cdescription%20from%20json%20where%20url%3D%27http%3A%2F%2Fwww.nick.com%2Fdata%2FvideoEndLevel%3FurlKey%3D"+ split +"'%20%20&format=json" , function(data) {
    
      showname.innerHTML = data.query.results.json.title 
      showdesc.innerHTML = data.query.results.json.description

         console.log(data.query.results.json.id)
      
   $.getJSON("https://query.yahooapis.com/v1/public/yql?q=select%20channel.item.group.content.url%20from%20xml%20where%20url%3D%27http%3A%2F%2Fudat.mtvnservices.com%2Fservice1%2Fdispatch.htm%3Ffeed%3Dnick_arc_player_prime%26mgid%3Dmgid%253Aarc%253Aepisode%253Anick.com%253A"+ data.query.results.json.id +'%27%20%20and%20itemPath%3D"rss"&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=' , function(data) {
    console.log(data.query.results.rss)
    if(data.query.count > 1){


         for (var i = 0; i < data.query.results.rss.length; i++) {
         arr = 	arr + "{sources: [{src: '" + gatherData(data.query.results.rss[i].channel.item.group.content.url) + "',type: 'video/mp4'}],},"

         }
         player.playlist(eval("[" + (arr.substring(0, arr.length - 1)) + "]"))
     }


         

if(data.query.count == 1){


   player.src({
         "type": "video/mp4",
         "src": gatherData(data.query.results.rss.channel.item.group.content.url)
      });
      player.play();

}
    
              
              player.playlist.autoadvance(0);













   });


        });
	}


function gatherData(info){
	var final

 var xhttp = new XMLHttpRequest();

               xhttp.onreadystatechange = function() {
                  if (this.readyState == 4 && this.status == 200) {
                     xml = this.responseText;
                     console.log((x2js.xml_str2json(this.response)).package.video.item[0].rendition.length - 1)
                     var jsonfirst = (x2js.xml_str2json(this.response)).package.video.item[0].rendition[(x2js.xml_str2json(this.response)).package.video.item[0].rendition.length - 1].src
                     console.log(jsonfirst)
                      videourl = jsonfirst.replace("rtmpe://cp5289.edgefcs.net/ondemand/mtvnorigin/","http://viacommtvstrmfs.fplive.net/")


      document.getElementById('downloader').href = videourl
    
           final = videourl
               };
           }
           xhttp.open("GET", info, false);
 
              xhttp.send();
      return final

}



// South Park

function fetchsouthpjson(value){

	   $.getJSON("https://query.yahooapis.com/v1/public/yql?q=select%20%20data-itemid%2Ccontent%20from%20html%20where%20url%3D%27" + value + '%27%20and%20compat%3D"html5"%20and%20xpath%3D"%2F%2Fdiv%5B%40id%3D%27player_page_player%27%5D%7C%2F%2Fmeta%5B%40property%3D%27og%3Atitle%27%5D%7C%2F%2Fmeta%5B%40property%3D%27sm4%3Acategory%27%5D%7C%2F%2Fmeta%5B%40property%3D%27og%3Adescription%27%5D"&format=json&callback=', function(data) {
console.log(data.query.results.div["data-itemid"])
showname.innerHTML =  data.query.results.meta[2].content +" - " +  data.query.results.meta["0"].content
showdesc.innerHTML = data.query.results.meta[1].content

  $.getJSON("https://query.yahooapis.com/v1/public/yql?q=select%20channel.item.group.content.url%20from%20xml%20where%20url%3D%27http%3A%2F%2Fsouthpark.cc.com%2Ffeeds%2Fvideo-player%2Fmrss%3Furi%3Dmgid%253Aarc%253Aepisode%253Asouthparkstudios.com%253A" + data.query.results.div["data-itemid"] + '%27%20%20and%20itemPath%3D"rss"&format=json&callback=', function(data1) {

  if(data1.query.count > 1){


         for (var i = 0; i < data1.query.results.rss.length; i++) {
         arr = 	arr + "{sources: [{src: '" + gatherSouthParkData(data1.query.results.rss[i].channel.item.group.content.url) + "',type: 'video/mp4'}],},"

         }
         player.playlist(eval("[" + (arr.substring(0, arr.length - 1)) + "]"))

player.playlist.autoadvance(0);



// Play through the playlist automatically.





}

if(data1.query.count == 1){

	 player.src({
         "type": "video/mp4",
         "src": gatherSouthParkData(data1.query.results.rss.channel.item.group.content.url)
      });


}

   });



function gatherSouthParkData(info){
	var final

 var xhttp = new XMLHttpRequest();

               xhttp.onreadystatechange = function() {
                  if (this.readyState == 4 && this.status == 200) {
                     xml = this.responseText;

                     var jsonfirst = (x2js.xml_str2json(this.response)).package.video.item.rendition[(x2js.xml_str2json(this.response)).package.video.item.rendition.length -1].src
                     console.log(jsonfirst)

                      videourl = jsonfirst.replace( "rtmpe://cp9950.edgefcs.net/ondemand/mtvnorigin/", "http://viacommtvstrmfs.fplive.net/")


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




var stringConstructor = "test".constructor;
var arrayConstructor = [].constructor;
var objectConstructor = {}.constructor;

function whatIsIt(object) {
    if (object === null) {
        return "null";
    }
    else if (object === undefined) {
        return "undefined";
    }
    else if (object.constructor === stringConstructor) {
        return "String";
    }
    else if (object.constructor === arrayConstructor) {
        return "Array";
    }
    else if (object.constructor === objectConstructor) {
        return "Object";
    }
    else {
        return "don't know";
    }
}

var testSubjects = ["string", [1,2,3], {foo: "bar"}, 4];

for (var i=0, len = testSubjects.length; i < len; i++) {
}

