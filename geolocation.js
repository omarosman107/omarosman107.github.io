    var div = document.getElementById('div');


if (fetch) {

	console.log("its working!")
} else {
	console.log("fetch isn't on your browser so i am going to install it...")

var firstScript = document.getElementsByTagName('script')[0],
      js = document.createElement('script');
  js.src = 'https://cdnjs.cloudflare.com/ajax/libs/fetch/1.0.0/fetch.min.js';
  js.onload = function () {
    // do stuff with your dynamically loaded script
  };
  firstScript.parentNode.insertBefore(js, firstScript);

}



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
        div.innerHTML = "You Are EXTREMELY! near OR at " + tysk.results[0].formatted_address
console.log(tysk)
console.log(finishlocation)
console.log("You Are EXTREMELY! near OR at " + tysk.results[0].formatted_address)




    });
}
getLocation()
