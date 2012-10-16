(function () {
    var battery = navigator.battery,
        batteryStatus = document.getElementById("battery_status"),
        batteryCheck = document.getElementById("battery_check");

    if (battery) {
        function setStatus () {
            console.log("Set status");
            batteryStatus.innerHTML = "PASS";
            batteryCheck.innerHTML = "Charging? " + battery.charging + "<br />";
            batteryCheck.innerHTML += "Battery level: " + (battery.level)*100 + "%<br />";
        }
        // Set initial status
        setStatus();
        // Set events
        battery.addEventListener("levelchange", setStatus, false);
        battery.addEventListener("chargingchange", setStatus, false);
        battery.addEventListener("chargingtimechange", setStatus, false);
        battery.addEventListener("dischargingtimechange", setStatus, false);
    }
    else {
        batteryStatus.innerHTML = "FAIL";
        batteryCheck.innerHTML = "Battery API Unavailable";
    }
})();