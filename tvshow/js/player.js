function addJS(url) {
   var s = document.createElement('script'); // Create a script element
   s.type = "text/javascript"; // optional in html5
   s.async = true; // asynchronous? true/false
   s.src = url;
   var fs = document.getElementsByTagName('script')[0]; // Get the first script
   fs.parentNode.insertBefore(s, fs);
};
$('showname').bind('DOMNodeInserted DOMNodeRemoved', function() {
  alert('changed');
});

if (location.protocol != 'http:')
{
 location.href = 'http:' + window.location.href.substring(window.location.protocol.length);
}

if (window.fetch) {}else{

	addJS('js/fetch.min.js');
}
function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split('&');
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split('=');
        if (decodeURIComponent(pair[0]) == variable) {
            return decodeURIComponent(pair[1]);
        }
    }
    console.log('Query variable %s not found', variable);
} 




var nickactive = false
var foxactive = false
var cbsactive = false
var cwtv = false
var abcactive = false
var spactive = false
var cwactive = false
var nbcactive = false
var isDone = false
var aswim = false
var amcactive = false
var diziayactive = false
var cwurl
var sitefunctions = {
"link.theplatform.com":"fetchlplatjson(url)",
"cwtv.com":"fetchcwjson(url)",
"diziay.com":"fetchdiziayjson(url)",
"adultswim.com":"fetchaswimjson(url)",
"cwseed.com":"fetchcwjson(url)",
"nick.com":"fetchnickjson(url)",
"abc.go.com":"fetchabcjson(url)",
"southpark.cc.com":"fetchsouthpjson(url)",
"amc.com":"fetchamcjson(url)",
"cbs.com":"fetchcbsjson(url)",
"nbc.com":"fetchnbcjson(url)",
"cartoonnetwork.com":"fetchcartoonnjson(url)",
"fox.com":"fetchfoxjson(url)",
"fxnetworks.com":"fetchfxjson(url)"


} 

/* var player = videojs('LS');;
 player.ready(function() {
  this.hotkeys({
    volumeStep: 0.1,
    seekStep: 5,
    enableModifiersForNumbers: false
  });
});
*/

var url

 showname = document.getElementById('showname')
 showdesc = document.getElementById('showdesc')



	 var currenturl = window.location.search.split('?')[1];

	 if (window.location.search.split('?').length == 3) {


	 	currenturl = window.location.search.split('?')[1] + "?" +window.location.search.split('?')[2]
	 }
	  	     var xhttp = new XMLHttpRequest();


function findName(){

document.getElementById('progress').style.width = "0%"
for (tv in sitefunctions) {

	if (isDone == false) {

		if (currenturl.includes(tv)) {
console.log(tv + " "+"Detected")
url = currenturl
             eval(sitefunctions[tv]);
             isDone = true
             break;
}

	}



}
 
} 
document.getElementById('progress').style.width = "15%"

 function googleAPI() {

    xhttp.onreadystatechange = function() {
       if (this.readyState == 4 && this.status == 200) {
       	document.getElementById('progress').style.width = "25%"
          googlejson = JSON.parse(this.responseText);
          googleurl = googlejson.results[0].unescapedUrl;
                       	foxurl = googlejson.results[0].unescapedUrl

          for (var i = 0; i < googlejson.results.length; i++) {



if (JSON.stringify(googlejson.results[i]).includes('ogUrl')) {
	console.log("worked")

              cwurl = googlejson.results[i].richSnippet.metatags.ogUrl
             
}


if (JSON.stringify(googlejson.results[i]).includes('ogType')) {
	console.log("worked")
	if(typeof(googlejson.results[i].richSnippet.metatags.ogType) == "string"){
  if (googlejson.results[i].richSnippet.metatags.ogType == "video.episode") {
             
              foxurl = googlejson.results[i].unescapedUrl
           break
             }

               if (googlejson.results[i].richSnippet.metatags.ogType == "video.other") {
             
              foxurl = googlejson.results[0].unescapedUrl
           break
             }


         }




}



}
  
  for (tv in sitefunctions) {
  	if (isDone == false) {


		if (googleurl.includes(tv)) {
console.log(tv + " "+"Detected")
url = googleurl
if (tv == "fox.com") {
	url = foxurl

}
if (tv == "cwtv.com") {
	url = cwurl

}
console.log(url)
             eval(sitefunctions[tv]);
             isDone = true
             break;
}


  	}

}


          i
       }
    };
    xhttp.open("GET", "https://www.googleapis.com/customsearch/v1element?key=AIzaSyCVAXiUzRYsML1Pv6RwSG1gunmMikTzQqY&rsz=filtered_cse&hl=en&prettyPrint=false&source=gcsc&gss=.com&sig=0c3990ce7a056ed50667fe0c3873c9b6&cx=009916453314335219988:-0yvqrz4snu&q=" + currenturl, true);
 }

findName();

if (isDone == false) {
googleAPI();
xhttp.send();

}


$(window).on('hashchange', function() {
  console.log(location.hash)
  window.location.reload()
  findName();


});

 function getShowinfo(name) {


var showFetch = new XMLHttpRequest();
/**
 showFetch.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {

   var data = JSON.parse(this.responseText)
console.log(data)
document.getElementsByClassName('showImg')[0].innerHTML = '<img width="100%" src="'+ data.image.medium   +'">'
console.log(data.rating.average / 2)

    }
  };
  showFetch.open("GET", 'http://api.tvmaze.com/singlesearch/shows?q=' +  name, true);
  showFetch.send();
  */


}