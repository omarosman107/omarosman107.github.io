
var nickactive = false
var foxactive = false
var cbsactive = false
var cwtv = false
var abcactive = false
var spactive = false
var cwactive = false
var nbcactive = false
var isDone = false
 var player = videojs('LS');;
 player.ready(function() {
  this.hotkeys({
    volumeStep: 0.1,
    seekStep: 5,
    enableModifiersForNumbers: false
  });
});



 showname = document.getElementById('showname')
 showdesc = document.getElementById('showdesc')
 var currenturl = window.location.search.split('?')[1];
     var xhttp = new XMLHttpRequest();


          function getcwurl(url) {

             var cwjsonextract = new XMLHttpRequest();
  cwjsonextract.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {

                      fetchcwjson(JSON.parse(JSON.parse(this.responseText).query.results.postresult.html.body).query.results.link.href)

    }
  };
  cwjsonextract.open("GET", 'https://query.yahooapis.com/v1/public/yql?q=use%20"https%3A%2F%2Fyoungyt.ml%2Fhtmlpost.xml"%20as%20htmlpost%3B%0Aselect%20html.body%20from%20htmlpost%20where%0Aurl%3D%27https%3A%2F%2Fdeveloper.yahoo.com%2Fyql%2Fconsole%2Fproxy.php%27%0Aand%20postdata%3D"diagnostics%3Dtrue%26q%3Dselect%2520*%2520from%2520html%2520where%2520url%253D%27' +  url  + '2F%27%2520and%2520compat%253D%2522html5%2522%2520and%2520xpath%253D%2522%252F%252Fhtml%252Fhead%252Flink%255B%2540rel%253D%27canonical%27%255D%2522%26format%3Djson%26crumb%3DHxjPU6IC%2F0R%26_rand%3D257%26_p%3Dhs"%20and%20xpath%3D"*"&format=json&diagnostics=true&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&_maxage=36000&callback=', true);
  cwjsonextract.send();



          }
               if (currenturl.includes("cwtv")) {

 console.log(" CW Detected")
             fetchcwjson(currenturl);
             cwactive = true
             isDone = true


          }
           if (currenturl.includes("cwseed")) {

 console.log(" CWSEED Detected")
             fetchcwjson(currenturl);
             cwactive = true
             isDone = true


          }
          if (currenturl.includes("nick")) {
             console.log(" Nickelodeon Detected")
             fetchnickjson(currenturl)
             nickactive = true
                          isDone = true


          }
                if (currenturl.includes("abc")) {
             console.log(" ABC Detected")
             fetchabcjson(currenturl)
                 abcactive = true
                              isDone = true

          }
          if (currenturl.includes("southpark")) {
             console.log(" South Park Detected")
             fetchsouthpjson(currenturl)
             spactive = true
                          isDone = true

          }
if (currenturl.includes("cbs")) {
             console.log(" CBS Detected")
             fetchcbsjson(currenturl)
             cbsactive = true
                          isDone = true

          }
          if (currenturl.includes("nbc")) {
             console.log(" NBC Detected")
             fetchnbcjson(currenturl)
             nbcactive = true
                          isDone = true

          }
           if (currenturl.includes("fox")) {
             console.log("Fox Detected")
             fetchfoxjson(currenturl)
             foxactive = true
                          isDone = true

          }


 function googleAPI() {
    xhttp.onreadystatechange = function() {
       if (this.readyState == 4 && this.status == 200) {
          googlejson = JSON.parse(this.responseText);
          googleurl = googlejson.results[0].unescapedUrl;
                       	foxurl = googlejson.results[0].unescapedUrl

          for (var i = 0; i < googlejson.results.length; i++) {

          	if (typeof googlejson.results[i].richSnippet != "undefined") {

  if (googlejson.results[i].richSnippet.metatags.ogType == "video.episode") {
                console.log(googlejson.results[i].richSnippet.metatags.ogType)
                foxurl = googlejson.results[i].unescapedUrl
             }

}


           
          }
          if (googlejson.results[0].unescapedUrl.includes("cwtv")) {
             console.log(googlejson.results["0"].richSnippet.metatags.ogUrl)
             cwurl = googlejson.results["0"].richSnippet.metatags.ogUrl
          }
          if (googleurl.includes("cw")) {
          	if (cwactive == false) {
             console.log(" CW Detected")
             fetchcwjson(googleurl);
}

          }
          
      


          if (googleurl.includes("abc")) {
          	if (abcactive == false) {
             console.log(" ABC Detected")
             fetchabcjson(googleurl)}
          }
          if (googleurl.includes("nbc")) {
          	if (nbcactive == false) {
             console.log(" NBC Detected")
             fetchnbcjson(googleurl)}
          }
          if (googleurl.includes("southpark")) {
          	if(spactive == false){
             console.log(" South Park Detected")
             fetchsouthpjson(googleurl)
         }
          }
          if (googleurl.includes("nick")) {
          	if(nickactive == false){
             console.log(" Nickelodeon Detected")

             fetchnickjson(googleurl)
            }
          }
          if (googleurl.includes("cbs")) {
          	if (cbsactive == false) {
             console.log(" CBS Detected")
             fetchcbsjson(googleurl)}
          }
          if (googleurl.includes("cartoon")) {
             console.log(" Cartoon Detected")
             fetchcartoonjson(googleurl)
          }
          if (googleurl.includes("fox")) {
          	if (foxactive == false) {
             console.log("Fox Detected")
             fetchfoxjson(foxurl)}
          }
          if (googleurl.includes("netflix")) {
             console.log(" Netflix Detected")
             fetchnetflixjson(googleurl)
          }
       }
    };
    xhttp.open("GET", "https://www.googleapis.com/customsearch/v1element?key=AIzaSyCVAXiUzRYsML1Pv6RwSG1gunmMikTzQqY&rsz=filtered_cse&num=2&hl=en&prettyPrint=false&source=gcsc&gss=.com&sig=0c3990ce7a056ed50667fe0c3873c9b6&cx=009916453314335219988:-0yvqrz4snu&q=" + currenturl, true);
 }


if (isDone == false) {
googleAPI();
xhttp.send();

}
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