function rating(rate) {
  if (rate == undefined){
    return "UNRATED"
  }

  if (rate.includes('tv-14')) {
    return "TV-14"
  }
  if (rate.includes('tv-pg')) {
    return "TV-PG"
  }
  if (rate.includes('tv-y7')) {
    return "TV-Y7"
  }
  if (rate.includes('tv-y')) {
    return "TV-Y"
  }
  if (rate.includes('tv-g')) {
    return "TV-G"
  }
  return rate.toUpperCase();
}

function makeid() {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (var i = 0; i < 196; i++) text += possible.charAt(Math.floor(Math.random() * possible.length));
  return text;
}
function epiformat(s, e) {
  s = parseInt(s)
  e = parseInt(e)
  if (s < 10) {
    s = '0' + s
  }
  if (e < 10) {
    e = '0' + e
  }
  return 'S' + s + 'E' + e
}

	var externalToApi = 'https://api.fox.com/fbc-content/v3/video?externalId=853172291669'
var shows = 'https://api.fox.com/fbc-content/v3/screens/find'
var newest = 'https://api.fox.com/fbc-content/v3/screenpanels/58d57fd0880f910001a9fb82/items' 
var data = null;

function loadInfo(id){
  self.postMessage('add');

var loadShow = new XMLHttpRequest();
loadShow.addEventListener("readystatechange", function () {

  if (this.readyState === 4) {
        if (this.status  === 200) {

    var showinfo = (JSON.parse(this.responseText));


var seasoninfo = new XMLHttpRequest();
seasoninfo.addEventListener("readystatechange",function () {
      if (!this.status  == 200) {
  self.postMessage('remove');

}
  if (this.readyState === 4) {
    if (this.status === 200) {
console.time()
var json = (JSON.parse(this.responseText))

for(i in json.member){
if(!json.member[i].requiresAuth && json.member[i].isFullEpisode ){
var image = json.member[i].images.still.HD.split('?')[0]
var sizes = [
'208:117',
'240:135',
'304:171',
'384:216',
'400:225',
'432:243',
'576:324',
'720:405',
'768:432',
'896:504',
'1024:576',
'1280:720',
'1920:1080'
]
var srcset = ''
for (var z = sizes.length - 1; z >= 0; z--) {
  srcset += (image + '?fit=inside%7C' + encodeURIComponent(sizes[z]) + ' '+ sizes[z].split(':')[0] +'w ' +sizes[z].split(':')[1] +'h,')
}
srcset = srcset.substr(0, srcset.length - 1);
var temp = new Date(json.member[i].originalAirDate);
  self.postMessage({
        img: json.member[i].images.still.SD,
        rating: rating(json.member[i].contentRating),
        href: json.member[i]['@id'],
        show: json.member[i].seriesName,
        episode: json.member[i].name,
        id: makeid(),
        epiformat: epiformat(json.member[i].seasonNumber, json.member[i].episodeNumber),
        length: json.member[i].durationInSeconds,
        type: "fox",
        imgdyn: srcset,
        autoplay:json.member[i].autoPlayVideo.default.url,
        bg:json.member[i].images.still.HD.split('?')[0] + '?fit=inside%7C' + encodeURIComponent('8:4'),
        time:Date.parse(temp)

              });
self.postMessage({loadshow:json.member[i].seriesName,
	img:json.member[i].images.seriesStill.SD})



}
}
console.timeEnd()
  self.postMessage('remove');




    }else{
  self.postMessage('remove');
      return;
    }


}

})

var season = null
try{
var season = showinfo.panels.member[1].items.member["0"].episodes["@id"]
seasoninfo.open("GET",season);
seasoninfo.setRequestHeader("apikey", "rm7dzFLzucfbXAVkZi8e1P34PWEN4GoR");

seasoninfo.send(null)

  self.postMessage('add');

}catch(e){
}








  self.postMessage('remove');


}else{
  self.postMessage('remove');
return;
}

  }
});
loadShow.open("GET", 'https://api.fox.com/fbc-content/v3/screens/series-detail/'+id);

loadShow.setRequestHeader("apikey", "rm7dzFLzucfbXAVkZi8e1P34PWEN4GoR");
loadShow.send(data)

}





  self.postMessage('add');
	self.postMessage('loaded')

var xhr = new XMLHttpRequest();
xhr.onerror = function() {
  self.postMessage('remove');
return;
 };

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === 4 ) {
if (this.status === 200) {
var allshows = []
var json = JSON.parse(this.responseText).panels.member
/*
for (var i = json.length - 1; i >= 0; i--) {
  try{

allshows.unshift.apply( allshows, json[i].items.member );

  
  }catch(e){
console.log(e)
  }

}
*/
allshows.unshift.apply( allshows, json[3].items.member );

// FX allshows.unshift.apply( allshows, json[4].items.member );

    var foxshows = (JSON.parse(this.responseText).panels.member[3].items.member);
    var json = []
    for (var i = allshows.length - 1; i >= 0; i--) {
      json.push({name:allshows[i].name,image:allshows[i].images.seriesList.HD})
if(allshows[i].seriesType != 'special' || allshows[i].seriesType != 'movie'){


            loadInfo(allshows[i].id)

          }

    }
  self.postMessage('remove');
}else{
  self.postMessage('remove');
  return;
}


  }
});


xhr.open("GET", "https://api.fox.com/fbc-content/v3/screens/find");

xhr.setRequestHeader("apikey", "rm7dzFLzucfbXAVkZi8e1P34PWEN4GoR");


xhr.send(data);


self.addEventListener('message', function(e) {
  self.postMessage(e.data);
}, false);