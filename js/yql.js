 function yql(url,type) {

url = encodeURIComponent('url');

var yql1 = "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20json%20where%20url%3D%22";
var yql2 = "%22%20&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys";

finalurl = yql1 + url + yql2;
  return finalurl;
}
