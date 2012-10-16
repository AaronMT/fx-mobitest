(function () {
	var hasAccepted = false;
	var geoCheck = document.getElementById("geo_check");
	var geoStatus = document.getElementById("geo_status");
	function check_geolocation(location) {
		if (hasAccepted){
			if (location) { 
				geoStatus.innerHTML = "PASS";
				var coords = location.coords;
				geoCheck.innerHTML += "Coords:" + "<br />"
				geoCheck.innerHTML += "Latitude: " + coords.latitude + "<br />"
				geoCheck.innerHTML += "Longitude: " + coords.longitude + "<br />"
				geoCheck.innerHTML += "Altitude: " + coords.altitude + "<br />"
				geoCheck.innerHTML += "Accuracy: " + coords.accuracy + "<br />"
				geoCheck.innerHTML += "Altitude Accuracy: " + coords.altitudeAccuracy + "<br />"
				geoCheck.innerHTML += "Heading: " + coords.heading + "<br />"
				geoCheck.innerHTML += "Speed: " + coords.speed + "<br />"
			}else{
				geoStatus.innerHTML += "FAIL";
				geoCheck.innerHTML += "Geolocation not supported."
			}	
		}else{
			geoStatus.innerHTML = "FAIL";

		}
	//code for google map
	//mapsurl = "http://maps.google.com/maps?f=q&source=s_q&hl=en&q=" + coords.latitude + ",+" + coords.longitude;
	//d.innerHTML += "<iframe name=map src=" + mapsurl + " width=80% height=80%></iframe>"
	}
	
	function successCallback(position) {
		check_geolocation(position);
	}
	
	function accept() {
		hasAccepted = true;
	}
	geoStatus.innerHTML = "FAIL";
	navigator.geolocation.getCurrentPosition(successCallback, null, null);
	setTimeout(accept, 50);
        
})();
