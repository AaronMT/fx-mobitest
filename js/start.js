(function () {
	var request = navigator.mozApps.getSelf();  
	request.onsuccess = function() {  
  if (request.result) {  
    // we're installed  
    // alert('This app is installed.');
  } else {  
    // not installed  
    alert('This app is not currently installed.');
  }  
}  
request.onerror = function() {  
  alert('Error checking installation status: ' + this.error.message);  
} 
})();