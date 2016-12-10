 var player=videojs('LS');

showname = document.getElementById('showname')
showdesc = document.getElementById('showdesc')

 var currenturl  = window.location.search.split('?')[1];




var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      	googlejson = JSON.parse(this.responseText);
       
      	googleurl = googlejson.results[0].unescapedUrl;


      	 for (var i = 0; i < googlejson.results.length; i++){


      	if (googlejson.results[i].richSnippet.metatags.ogType == "video.episode"){
      		console.log(googlejson.results[i].richSnippet.metatags.ogType)
      		foxurl = googlejson.results[i].url

      	}

            
            }


      	if (googlejson.results[0].unescapedUrl.includes("cwtv")){
      		console.log(googlejson.results["0"].richSnippet.metatags.ogUrl)
      		cwurl = googlejson.results["0"].richSnippet.metatags.ogUrl

      	}

      



if (googleurl.includes("cw")) {

fetchcwjson(cwurl)


}

if (googleurl.includes("abc")) {

fetchabcjson(googleurl)


}

if (googleurl.includes("watchcartoon")) {

fetchabcjson(googleurl)


}

 if (googleurl.includes("fox")) {
fetchabcjson(foxurl)



}

if (googleurl.includes("netflix")) {

fetchabcjson(googleurl)



}

}};




  xhttp.open("GET", "https://www.googleapis.com/customsearch/v1element?key=AIzaSyCVAXiUzRYsML1Pv6RwSG1gunmMikTzQqY&rsz=filtered_cse&num=2&hl=en&prettyPrint=false&source=gcsc&gss=.com&sig=0c3990ce7a056ed50667fe0c3873c9b6&cx=009916453314335219988:-0yvqrz4snu&q=" + currenturl  , true);
  xhttp.send();












