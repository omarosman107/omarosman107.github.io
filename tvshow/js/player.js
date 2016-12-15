 var player = videojs('LS');
 showname = document.getElementById('showname')
 showdesc = document.getElementById('showdesc')
 var currenturl = window.location.search.split('?')[1];
     var xhttp = new XMLHttpRequest();


 function googleAPI() {
    xhttp.onreadystatechange = function() {
       if (this.readyState == 4 && this.status == 200) {
          googlejson = JSON.parse(this.responseText);
          googleurl = googlejson.results[0].unescapedUrl;
          for (var i = 0; i < googlejson.results.length; i++) {
             if (googlejson.results[i].richSnippet.metatags.ogType == "video.episode") {
                console.log(googlejson.results[i].richSnippet.metatags.ogType)
                foxurl = googlejson.results[i].unescapedUrl
             }
          }
          if (googlejson.results[0].unescapedUrl.includes("cwtv")) {
             console.log(googlejson.results["0"].richSnippet.metatags.ogUrl)
             cwurl = googlejson.results["0"].richSnippet.metatags.ogUrl
          }
          if (googleurl.includes("cw")) {
             console.log(" CW Detected")
             fetchcwjson(cwurl)
          }
          if (googleurl.includes("abc")) {
             console.log(" ABC Detected")
             fetchabcjson(googleurl)
          }
          if (googleurl.includes("cbs")) {
             console.log(" CBS Detected")
             fetchcbsjson(googleurl)
          }
          if (googleurl.includes("cartoon")) {
             console.log(" Cartoon Detected")
             fetchcartoonjson(googleurl)
          }
          if (googleurl.includes("fox")) {
             console.log("Fox Detected")
             fetchfoxjson(foxurl)
          }
          if (googleurl.includes("netflix")) {
             console.log(" Netflix Detected")
             fetchnetflixjson(googleurl)
          }
       }
    };
    xhttp.open("GET", "https://www.googleapis.com/customsearch/v1element?key=AIzaSyCVAXiUzRYsML1Pv6RwSG1gunmMikTzQqY&rsz=filtered_cse&num=2&hl=en&prettyPrint=false&source=gcsc&gss=.com&sig=0c3990ce7a056ed50667fe0c3873c9b6&cx=009916453314335219988:-0yvqrz4snu&q=" + currenturl, true);
 }

  if (currenturl == undefined) {}else{
googleAPI();
xhttp.send();
}
