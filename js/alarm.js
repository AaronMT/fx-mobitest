(function () {
	var alarmStatus = document.getElementById("alarm_status");
	var alarmCheck = document.getElementById("alarm_check");
	var alarm = navigator.mozAlarms;
	
    if (alarm){
        alarmStatus.innerHTML = "PASS";
        alarmCheck.innerHTML += navigator.mozHasPendingMessage("alarm");
    }else{
	    alarmStatus.innerHTML = "FAIL";
    }    
    
})();