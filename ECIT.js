//Author: Daniel Baitz  
//Date: 4/26/2020
// Case Project: Final Project


"use strict"

var map;
var waitForUser;
var currPosLat= {};
var currPosLng = {};
var mapOptions = {};

var operatingSystem = "Unknown OS";
if (navigator.appVersion.indexOf("Win") !=- 1) operatingSystem = "Windows";
if (navigator.appVersion.indexOf("Mac") !=- 1) operatingSystem = "MacOS";
if (navigator.appVersion.indexOf("X11") !=- 1) operatingSystem = "UNIX";
if (navigator.appVersion.indexOf("Linux") !=- 1) operatingSystem = "Linux";
console.log('Your OS: ' + operatingSystem);
document.getElementById("OS").innerHTML= "Your operating system is:&nbsp" + operatingSystem;


function createorigin(position) { 
    clearTimeout(waitForUser);
 console.log("Longitude: " + position.coords.longitude);
 console.log("Latitude: " + position.coords.latitude);
 var currPosLat = position.coords.latitude;
 var currPosLng = position.coords.longitude;
 var mapOptions = {
     zoom:7,
    center: new google.maps.LatLng(currPosLat, currPosLng),
 };
 map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
document.getElementById("results").innerHTML = "Your longitude is:&nbsp" + currPosLng + "&nbspYour latitude is:&nbsp" + currPosLat;
var location = [];
location.push(currPosLat, currPosLng);
 ({
     'locations': [location]
}, function(results,status) {{ console.log(status)
    if (status === 'OK'){ 
        
        }
    }
});
}
function loadScript() {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://maps.googleapis.com/maps/api/js?v=3' +
        '&key=AIzaSyAtKd85njub5VK4YsMm8p2fQ1RIeGLdRh4&callback=geotest';
    document.body.appendChild(script);
}

function geoTest() { 
waitForUser = setTimeout(fail, 10000);
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(createorigin,fail, {timeout: 10000});
    } else {
   fail();
    }     
}



function fail() {
    document.getElementById("map").innerHTML ="Unable to access your current location.";
 }

window.onload=loadScript;
window.addEventListener("load", geoTest, false);