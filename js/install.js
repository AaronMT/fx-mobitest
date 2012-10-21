(function () {
    document.querySelector("#install_button").addEventListener("click", function () {
    	console.log("install click");
		var request = navigator.mozApps.install("https://mobile.twitter.com/cache/twitter.webapp");  
		var installStatus = document.getElementById("install_status");
	    request.onsuccess = function() {  
	    	console.log("install starting");
		    installStatus.innerHTML = "PASS";
	    }  
	    request.onerror = function() {  
	    	console.log("install error"+ request.error.name);
	     	installStatus.innerHTML = "FAIL";
	    }      
    }, false);

})();