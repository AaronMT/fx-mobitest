(function () {
    document.querySelector("#vibrate_on").addEventListener("click", function () {
    	console.log("vib button press");
        navigator.mozVibrate(1000);
    }, false);
    
    document.querySelector("#vibrate_off").addEventListener("click", function () {
        navigator.mozVibrate(0);
    }, false);
    
    var vib = navigator.mozVibrate;
    var vibStatus = document.getElementById("vib_status");
    if (vib){
        vibStatus.innerHTML = "PASS";
    }else{
	    vibStatus.innerHTML = "FAIL";
    }
})();

