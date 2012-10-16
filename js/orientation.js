(function () {
	var oriStatus = document.getElementById("ori_status");
	var orientation = screen.mozOrientation;
	var oriDisplay = document.getElementById("ori_display");
	
    function show() {
    	if(orientation){
    		orientation = screen.mozOrientation;
    		oriDisplay.innerHTML = orientation;
    		oriStatus.innerHTML = "PASS";
      	}else{
	      	oriDisplay.innerHTML = "Not Supported";
    		oriStatus.innerHTML = "FAIL";
      	}
    }
    screen.addEventListener("mozorientationchange", show, false);
    show();

})();