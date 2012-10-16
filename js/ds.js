(function () {
	var dsStatus = document.getElementById("ds_status");
	var dsCheck = document.getElementById("ds_check");
	var ds = navigator.getDeviceStorage("profile");
/*	ok(navigator.getDeviceStorage, "Should have getDeviceStorage");
	
	request = storage[0].addNamed(createRandomBlob(), "devicestorage/hi");
	ok(request, "Should have a non-null request");
	
	request.onsuccess = addSuccess;
	request.onerror = addError;
	
	function addSuccess(e) {
		    dsStatus.innerHTML = "PASS";

		ok(e.target.result == gFileName, "File name should match");
		var storage = navigator.getDeviceStorage("profile");
		request = storage[0].get(gFileName);
		request.onsuccess = getSuccess;
		request.onerror = getError;
		ok(true, "addSuccess was called");
	}


function addError(e) {
    dsStatus.innerHTML = "FAIL";

ok(false, "addError was called : " + e.target.error.name);
devicestorage_cleanup();

}
*/


	
	
	function dstest() { 
		//var request = ds[0].addNamed(googletest, "https://www.google.com/images/srpr/logo3w.png");
	    if (ds){
	        dsStatus.innerHTML = "PASS";
	    }else{
		    dsStatus.innerHTML = "FAIL";
	    }
    }
    
    dstest();
    //dsStatus.innerHTML = "FAIL";
})();