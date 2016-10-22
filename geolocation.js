function includeJs(jsFilePath) {
    var js = document.createElement("script");

    js.type = "text/javascript";
    js.src = jsFilePath;

    document.body.appendChild(js);
}

includeJs("https://cdnjs.cloudflare.com/ajax/libs/fetch/1.0.0/fetch.min.js");

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {

     var finishlocation = position.coords.latitude
     + (",") + position.coords.longitude
     fetch(
        ('https://maps.googleapis.com/maps/api/geocode/json?latlng=') + finishlocation + ('&token=0"')
    ).then(function(response) {
        // Convert to JSON
        return response.json();
    }).then(function(tysk) {

        // Yay, `j` is a JavaScript object

console.log(tysk)
console.log(finishlocation)
console.log("You Are at " + tysk.results[0].formatted_address)




    });
}
getLocation()
