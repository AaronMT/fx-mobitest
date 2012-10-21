(function () {
    document.querySelector("#notification_button").addEventListener("click", function () {
    	console.log("notification click");
    	var notification = navigator.mozNotification.createNotification("notification","test!");
    	var notificationStatus = document.getElementById("notification_status");
    	notification.show();
    	notification.onclick = function() {  
	     console.log("notification starting");
	     notificationStatus.innerHTML = "PASS";
	    }
	  }, false);
})();